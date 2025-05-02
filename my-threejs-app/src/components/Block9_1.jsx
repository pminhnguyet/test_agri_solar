// import React, { useRef, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import backgroundImage from '../assets/images/back91.png';  // ảnh nền

// import '../styles/Block9_1.scss';

// const SolarPanelModel = () => {
//     const { scene } = useGLTF('/solar_panel_3/scene.gltf');
//     return <primitive object={scene} scale={1500} position={[45, -35, 0]} />;
// };

// const Block9_1 = () => {
//     return (
//         <>
//             <div className="block9_1_first">
//                 <div className="content-wrapper">
//                     <div className="left-section">
//                         <div className="title">
//                             <span className="highlight">Pin năng lượng</span>
//                             <span className="green-text"> mặt trời</span>
//                         </div>
//                         <div className="model-wrapper">
//                             <Canvas camera={{ position: [0, 20, -50], fov: 30 }}>
//                                 <ambientLight intensity={1} />
//                                 <SolarPanelModel />
//                                 <OrbitControls />
//                             </Canvas>
//                         </div>
//                     </div>


//                     <div className="right-section">
//                         <div className="text-section-1">
//                             <p>
//                                 <strong>PIN NĂNG LƯỢNG MẶT TRỜI</strong> cung cấp <strong>năng lượng sạch, năng lượng tái tạo</strong> bằng cách sử dụng <strong>ánh sáng mặt trời</strong> để tạo ra <strong>điện năng</strong> cho <strong>đèn LED</strong> và <strong>hệ thống tưới</strong> hoạt động.
//                             </p>
//                         </div>
//                         <div className="text-section-2">
//                             <p>
//                                 <strong>SỬ DỤNG PIN NĂNG LƯỢNG MẶT TRỜI</strong> không chỉ giúp <strong>giảm chi phí điện năng</strong> mà còn <strong>bảo vệ môi trường</strong>, là giải pháp nông nghiệp <strong>hiệu quả</strong>, hỗ trợ quá trình chăm sóc thanh long một cách <strong>thân thiện với thiên nhiên</strong>.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     );
// };

// export default Block9_1;





import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { fetchModelById } from '../utils/request';


import '../styles/Block9_1.scss';

// Component load model GLB từ URL
const SolarPanelModel = ({ modelUrl }) => {
    const { scene } = useGLTF(modelUrl, true);
    return <primitive object={scene} scale={1500} position={[45, -35, 0]} />;
};

const Block9_1 = () => {
    const [model, setModel] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadModel() {
            try {
                const m = await fetchModelById(9); // lấy model id=9 từ API
                setModel(m);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadModel();
    }, []);

    return (
        <div className="block9_1_first"  >
            <div className="content-wrapper">
                <div className="left-section">
                    <div className="title">
                        <span className="highlight">Pin năng lượng</span>
                        <span className="green-text"> mặt trời</span>
                    </div>
                    <div className="model-wrapper">
                        {error && <p>Error loading model: {error}</p>}
                        {!loading && model && (
                            // <Canvas camera={{ position: [0, 20, -50], fov: 30 }}>
                            <Canvas camera={{ position: [45, 20, -50], fov: 25 }}>
                                <ambientLight intensity={1} />
                                <Suspense fallback={null}>
                                    <SolarPanelModel modelUrl={model.url} />
                                </Suspense>
                                <OrbitControls maxDistance={100} />
                            </Canvas>
                        )}
                    </div>
                </div>

                <div className="right-section">
                    <div className="text-section-1">
                        <p>
                            <strong>PIN NĂNG LƯỢNG MẶT TRỜI</strong> cung cấp <strong>năng lượng sạch, năng lượng tái tạo</strong> bằng cách sử dụng <strong>ánh sáng mặt trời</strong> để tạo ra <strong>điện năng</strong> cho <strong>đèn LED</strong> và <strong>hệ thống tưới</strong> hoạt động.
                        </p>
                    </div>
                    <div className="text-section-2">
                        <p>
                            <strong>SỬ DỤNG PIN NĂNG LƯỢNG MẶT TRỜI</strong> không chỉ giúp <strong>giảm chi phí điện năng</strong> mà còn <strong>bảo vệ môi trường</strong>, là giải pháp nông nghiệp <strong>hiệu quả</strong>, hỗ trợ quá trình chăm sóc thanh long một cách <strong>thân thiện với thiên nhiên</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block9_1;





// import React, { useRef, useState, useEffect, Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { fetchModelById } from '../utils/request';
// import backgroundImage from '../assets/images/back91.png';

// import '../styles/Block9_1.scss';

// // Component load model GLB từ URL
// const SolarPanelModel = ({ modelUrl }) => {
//     const { scene } = useGLTF(modelUrl, true);
//     return <primitive object={scene} scale={2} position={[0, 0, 0]} />;
// };

// const Block9_1 = () => {
//     const [model, setModel] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function loadModel() {
//             try {
//                 const m = await fetchModelById(8); // lấy model id=9 từ API
//                 setModel(m);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         }

//         loadModel();
//     }, []);

//     return (
//         <div className="block9_1_first"  >
//             <div className="content-wrapper">
//                 <div className="left-section">
//                     <div className="title">
//                         <span className="highlight">Pin năng lượng</span>
//                         <span className="green-text"> mặt trời</span>
//                     </div>
//                     <div className="model-wrapper">
//                         {error && <p>Error loading model: {error}</p>}
//                         {!loading && model && (
//                             <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
//                                 <ambientLight intensity={1} />
//                                 <Suspense fallback={null}>
//                                     <SolarPanelModel modelUrl={model.url} />
//                                 </Suspense>
//                                 <OrbitControls />
//                             </Canvas>
//                         )}
//                     </div>
//                 </div>

//                 <div className="right-section">
//                     <div className="text-section-1">
//                         <p>
//                             <strong>PIN NĂNG LƯỢNG MẶT TRỜI</strong> cung cấp <strong>năng lượng sạch, năng lượng tái tạo</strong> bằng cách sử dụng <strong>ánh sáng mặt trời</strong> để tạo ra <strong>điện năng</strong> cho <strong>đèn LED</strong> và <strong>hệ thống tưới</strong> hoạt động.
//                         </p>
//                     </div>
//                     <div className="text-section-2">
//                         <p>
//                             <strong>SỬ DỤNG PIN NĂNG LƯỢNG MẶT TRỜI</strong> không chỉ giúp <strong>giảm chi phí điện năng</strong> mà còn <strong>bảo vệ môi trường</strong>, là giải pháp nông nghiệp <strong>hiệu quả</strong>, hỗ trợ quá trình chăm sóc thanh long một cách <strong>thân thiện với thiên nhiên</strong>.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Block9_1;