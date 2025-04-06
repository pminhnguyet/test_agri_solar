import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import '../styles/ThreeDModel.scss'

function Model() {
    // const { scene } = useGLTF('/maple_tree_1/scene.gltf');
    const { scene } = useGLTF('/solar_panel_2.gltf');
    // useFrame(() => {
    //     scene.rotation.y += 0.002;
    // })

    // return <primitive object={scene} scale={1} position={[0, -120, 0]} />;
    return <primitive object={scene} scale={1} position={[3, -2, 0]} />;
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

                    <Canvas camera={{ position: [0, 2, 5], fov: 30 }}>
                        <ambientLight intensity={0.8}></ambientLight>
                        <directionalLight position={[5, 5, 5]} intensity={1}></directionalLight>
                        <Model />
                        <Environment preset="sunset" />
                        <OrbitControls maxDistance={1000} />
                    </Canvas>

                    {/* 
                    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                 
                        <ambientLight intensity={0.3} />
                        <hemisphereLight intensity={1.5} />
                        <Model />
                        <Environment preset="sunset" />
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
