// preloadModels.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { fetchModelById } from './request';

// export async function preloadAllModels() {
//   const loader = new GLTFLoader();
//   const modelIds = [1, 2, 4, 5, 6, 7, 8, 9, 10]; // Danh sách model cần preload
//   const preloadPromises = modelIds.map((id) => preloadModelById(loader, id));

//   return Promise.all(preloadPromises);
// }

export async function preloadAllModels(onProgress) {
  const loader = new GLTFLoader();
  const modelIds = [1, 2, 4, 5, 6, 7, 8, 9, 10];
  const total = modelIds.length;
  let loadedCount = 0;

  const preloadPromises = modelIds.map((id) =>
    preloadModelById(loader, id).then((gltf) => {
      loadedCount++;
      if (onProgress) {
        onProgress(Math.floor((loadedCount / total) * 100));
      }
      return gltf;
    })
  );

  return Promise.all(preloadPromises);
}




function preloadModelById(loader, id) {
  return new Promise((resolve, reject) => {
    fetchModelById(id).then((model) => {
      loader.load(
        model.url,
        (gltf) => {
          console.log(`Model ${id} loaded`);
          resolve(gltf);
        },
        undefined,
        (error) => {
          console.error(`Error loading model ${id}:`, error);
          reject(error);
        }
      );
    }).catch((error) => {
      console.error(`Error fetching model ${id}:`, error);
      reject(error);
    });
  });
}
