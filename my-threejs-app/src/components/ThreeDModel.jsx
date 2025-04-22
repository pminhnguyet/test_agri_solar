import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, useFBX } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import '../styles/ThreeDModel.scss'

function Model() {
    // const { scene } = useGLTF('/maple_tree_1/scene.gltf');  
    // const { scene } = useGLTF('/solar_panel_3/scene.gltf');
    // const { scene } = useGLTF('/seed/Untitled.gltf');
    // const { scene } = useGLTF('/full_tree_1/scene.gltf');
    const { scene } = useGLTF('/plant_sprout/scene.gltf');
    //  const { scene } = useGLTF('/mature_tree/scene.gltf');
    // const { scene } = useGLTF('/final_full_tree/scene.gltf');


    // useFrame(() => {
    //     scene.rotation.y += 0.002;

    // })





    // return <primitive object={scene} scale={1} position={[0, -120, 0]} />; //maple_tree_1
    // return <primitive object={scene} scale={1500} position={[45, -35, 0]} />; //solar_panel_3
    // return <primitive object={scene} scale={10} position={[1, -2, 0]} />; 
    // return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
    return <primitive object={scene} scale={20} position={[0, -0.5, 0]} />; //plant_sprout
    // return <primitive object={scene} scale={2} position={[0, -1.5, 0]} />; //mature_tree
    // return <primitive object={scene} scale={2} position={[0, -2, 0]} />; //final_full_tree
}




export default function ThreeDModel() {
    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.3 });

    const textRef = useRef(null);
    const isTextInView = useInView(textRef, { triggerOnce: true, threshold: 0.5 });



    return (
        <>
            <div className="second_container">

                <div className="canvas-part">
                    {/* <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                        <ambientLight intensity={0.8}></ambientLight>
                        <directionalLight position={[5, 5, 5]} intensity={1}></directionalLight>
                        <Model />
                        <OrbitControls maxDistance={1000} />
                    </Canvas> */}

                    {/* <Canvas camera={{ position: [0, 20, -50], fov: 30 }}>
                        <ambientLight intensity={0.8}></ambientLight>
                        <directionalLight position={[5, 5, 5]} intensity={1}></directionalLight>
                        <Model />
                        <OrbitControls target={[0, 0, 0]} />
                    </Canvas> */}

                    {/* <Canvas camera={{ position: [0, 2, 5], fov: 30 }}>
                        <ambientLight intensity={0.8}></ambientLight>
                        <directionalLight position={[5, 5, 5]} intensity={1}></directionalLight>
                        <Model />
                        <OrbitControls target={[0, 0, 0]} />
                    </Canvas> */}

                    {/* <Canvas camera={{ position: [10, 2, 5], fov: 50 }}>
                        <ambientLight intensity={0.8}></ambientLight>
                        <directionalLight position={[5, 5, 5]} intensity={1}></directionalLight>
                        <Model />
                        <OrbitControls
                            maxPolarAngle={Math.PI / 2}  // Giới hạn góc quay dọc (0 đến Math.PI / 2, tương ứng với 0 đến 90 độ từ trên xuống)
                            minPolarAngle={0}  // Giới hạn góc quay dọc (0 đến Math.PI / 2)
                            maxAzimuthAngle={Math.PI / 2}  // Giới hạn góc quay ngang (0 đến Math.PI / 2, tương ứng với góc quay từ trái sang phải)
                            minAzimuthAngle={-Math.PI / 2}
                        />
                    </Canvas> */}


                    <Canvas camera={{ position: [0, 2, 5], fov: 30 }}>
                        <ambientLight intensity={0.8}></ambientLight>
                        <directionalLight position={[5, 5, 5]} intensity={1}></directionalLight>
                        <Model />
                        <OrbitControls />
                    </Canvas>

                    {/* <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <ambientLight intensity={2}></ambientLight>
                        <directionalLight position={[5, 5, 5]} intensity={1}></directionalLight>
                        <Model />
                        <OrbitControls />
                    </Canvas> */}

                    {/* <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <ambientLight intensity={3}></ambientLight>
                        <directionalLight position={[5, 5, 5]} intensity={1}></directionalLight>
                        <Model />
                        <OrbitControls />
                    </Canvas> */}


                </div>
                <div className="text-part">
                    {/* <h2>Giai đoạn 2.2 : Cây non - Cây phát triển tự nhiên</h2> */}
                    <motion.h2
                        ref={titleRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                        whileHover={{ scale: 1.1, color: "#039c06" }}
                    >
                        Giai đoạn 2.2: Cây non - Cây phát triển tự nhiên
                    </motion.h2>

                    {/* <div> */}
                    {/* <p>Từ hạt giống, những chồi non đầu tiên đã xuất hiện! Cây non đang phát triển rễ và lá, chuẩn bị cho giai đoạn trưởng thành</p> */}
                    <motion.p
                        ref={textRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        Từ hạt giống, những chồi non đầu tiên đã xuất hiện! Cây non đang phát triển rễ và lá, chuẩn bị cho giai đoạn trưởng thành.
                    </motion.p>
                    {/* </div> */}
                </div>
            </div>
        </>

    );
}


// import { Canvas, useLoader } from "@react-three/fiber";
// import { OrbitControls, Environment, Html } from "@react-three/drei";
// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
// import "../styles/ThreeDModel.scss";

// // Model Component để load và render mô hình FBX
// function Model() {
//     // Sử dụng useLoader để tải mô hình FBX
//     const fbx = useLoader(FBXLoader, "/plant_sprout/plant_sprout_2.fbx");
//     const [showPopup, setShowPopup] = useState(false);

//     // Đảm bảo mô hình được load hoàn chỉnh trước khi render
//     if (!fbx) {
//         return null;
//     }

//     const handleClick = (e) => {
//         e.stopPropagation(); // Ngăn chặn event lan ra ngoài
//         setShowPopup((prev) => !prev);
//     };

//     // return <primitive object={fbx} scale={0.2} position={[0, 0, 0]} />;
//     // return <primitive object={fbx} scale={0.5} position={[0, -1.5, 0]} />;
//     return (
//         <group>
//             <primitive
//                 object={fbx}
//                 scale={0.5}
//                 position={[0, -1.5, 0]}
//                 onClick={handleClick}
//             />
//             {showPopup && (
//                 <Html position={[1, 0, 0]} distanceFactor={10}>
//                     {/* Nguyên bản */}
//                     {/* <div
//                         style={{
//                             width: "200px",
//                             background: "white",
//                             padding: "8px 12px",
//                             borderRadius: "8px",
//                             boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
//                             fontSize: "14px",
//                             color: "#333",
//                         }}
//                     > */}


//                     <motion.div

//                         // Zoom từ nhỏ đến lớn
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.4, ease: "easeOut" }}

//                         // Fade & Slide từ dưới lên
//                         // initial={{ opacity: 0, y: 20 }}
//                         // animate={{ opacity: 1, y: 0 }}
//                         // exit={{ opacity: 0, y: 20 }}
//                         // transition={{ duration: 0.5, ease: "easeOut" }}

//                         //Bounce Pop
//                         // initial={{ scale: 0.5, opacity: 0 }}
//                         // animate={{ scale: 1, opacity: 1 }}
//                         // transition={{ type: "spring", stiffness: 500, damping: 20 }}

//                         //Fade + Rotate nhẹ
//                         // initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
//                         // animate={{ opacity: 1, rotate: 0, scale: 1 }}
//                         // transition={{ duration: 0.6, ease: "easeOut" }}

//                         // Fly In từ bên phải
//                         // initial={{ x: 100, opacity: 0 }}
//                         // animate={{ x: 0, opacity: 1 }}
//                         // exit={{ x: 100, opacity: 0 }}
//                         // transition={{ duration: 0.4 }}

//                         //Scale bật nhẹ với delay (như loading)
//                         // initial={{ opacity: 0, scale: 0.5 }}
//                         // animate={{ opacity: 1, scale: 1 }}
//                         // transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}


//                         style={{
//                             width: "200px",
//                             background: "white",
//                             padding: "8px 12px",
//                             borderRadius: "8px",
//                             boxShadow: "0 4px 12px rgba(3, 156, 6, 0.5)",
//                             fontSize: "14px",
//                             color: "#333",
//                         }}
//                     >
//                         "Giàn leo giúp cây thanh long phát triển vững chắc, tối ưu hóa diện tích trồng và tăng năng suất."

//                     </motion.div>
//                 </Html>
//             )
//             }
//         </group >
//     );
// }

// export default function ThreeDModel() {
//     const titleRef = useRef(null);
//     const isTitleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.3 });

//     const textRef = useRef(null);
//     const isTextInView = useInView(textRef, { triggerOnce: true, threshold: 0.5 });




//     return (
//         <>
//             <div className="second_container">
//                 <div className="canvas-part">
//                     {/* <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
//                         <ambientLight intensity={5} />
//                         <directionalLight position={[5, 5, 5]} intensity={2} />
//                         <Environment preset="sunset" />
//                         <Model />
//                         <OrbitControls />
//                     </Canvas> */}


//                     <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
//                         <ambientLight intensity={3} />
//                         <directionalLight position={[5, 5, 5]} intensity={2} />
//                         <Environment preset="sunset" />
//                         <Model />
//                         <OrbitControls />
//                     </Canvas>
//                 </div>
//                 <div className="text-part">
//                     <motion.h2
//                         ref={titleRef}
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ duration: 1, ease: "easeOut" }}
//                         whileHover={{ scale: 1.1, color: "#039c06" }}
//                     >
//                         Giai đoạn 2.2: Cây non - Cây phát triển tự nhiên
//                     </motion.h2>

//                     <motion.p
//                         ref={textRef}
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={isTextInView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ duration: 1.2, ease: "easeOut" }}
//                     >
//                         Từ hạt giống, những chồi non đầu tiên đã xuất hiện! Cây non đang phát triển rễ và lá, chuẩn bị cho giai đoạn trưởng thành.
//                     </motion.p>
//                 </div>
//             </div>

//         </>
//     );
// }
