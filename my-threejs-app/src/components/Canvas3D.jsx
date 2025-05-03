import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion, useInView } from "framer-motion";

import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Canvas3D.scss";


//load model 
function Model3D() {
    const { scene } = useGLTF('/stylized_tree/scene.gltf');

    useFrame(() => {
        scene.rotation.y += 0.002;
    })

    return <primitive object={scene} scale={1} position={[0, -0.3, 0]} />
}

export default function Canvas3D() {
    const text = "Giai đoạn 2: Cây non - Cây phát triển tự nhiên";
    return (
        <>
            <div className="canvas-container">
                <div className="text-section">
                    {/* <h2>Giai đoạn 2: Cây non - Cây phát triển tự nhiên</h2> */}

                    {/* Hover vào chữ, hóng to nhẹ và đổi màu */}
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        whileHover={{ scale: 1.1, color: "#039c06" }} // Hiệu ứng khi hover
                    >
                        Giai đoạn 2: Cây non - Cây phát triển tự nhiên
                    </motion.h2>

                    {/* Hiệu ứng đánh máy (Typewriter) */}
                    {/* <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {text.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h2> */}

                    {/* Hiệu ứng Sóng (Wave Animation) */}
                    {/* <motion.h2 style={{ display: "flex", gap: "4px" }}>
                        {text.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                style={{
                                    display: "inline-block",
                                    marginRight: char === " " ? "8px" : "0px", // Giữ khoảng trắng giữa chữ
                                }}
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 0.4,
                                    repeat: 0,
                                    repeatDelay: 1,
                                    delay: index * 0.1,
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h2> */}


                    {/* Hiệu ứng xuất hiện nhỏ -> lớn dần(Scale & Opacity) */}
                    {/* <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Giai đoạn 2: Cây non – Cây phát triển tự nhiên
                    </motion.h2> */}

                    {/* Hiệu ứng Biến Hình (Morphing) */}
                    {/* <motion.h2
                        initial={{ letterSpacing: "-0.5em", opacity: 0 }}
                        animate={{ letterSpacing: "0em", opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Giai đoạn 2: Cây non – Cây phát triển tự nhiên
                    </motion.h2> */}



                    <div>
                        <p>Từ hạt giống, những chồi non đầu tiên đã xuất hiện! Cây non đang phát triển rễ và lá, chuẩn bị cho giai đoạn trưởng thành</p>
                    </div>

                </div>
                <div className="canvas-section">
                    <Canvas camera={{ position: [0, 2, 5], fov: 6.5 }}>
                        <ambientLight intensity={0.8}></ambientLight>
                        <directionalLight position={[5, 5, 5]} intensity={1}></directionalLight>
                        <Model3D />
                        <OrbitControls maxDistance={10} />
                    </Canvas>
                </div>

            </div>


        </>

    )
}