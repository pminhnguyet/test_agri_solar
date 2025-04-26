// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Html, Environment, useGLTF } from "@react-three/drei";
// import { motion, useInView } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// import "../styles/Frame7_1.scss"

// // Component Model dùng FBXLoader
// function Model({ inView }) {
//     const { scene } = useGLTF('/mature_tree/scene.gltf');
//     const [showPopup, setShowPopup] = useState(false);

//     const handleClick = (e) => {
//         e.stopPropagation(); // Ngăn chặn event lan ra ngoài
//         setShowPopup((prev) => !prev);
//     };



//     useFrame(() => {
//         if (scene) {
//             scene.rotation.y += 0.005;
//             scene.position.x = 0;
//             scene.position.z = 0;
//             // if (inView) {
//             //     if (scene.position.x > 0) {
//             //         scene.position.x -= 0.015;
//             //         if (scene.position.x < 0) scene.position.x = 0;
//             //     }
//             // } else {
//             //     // Nếu không còn inView → reset về phải
//             //     if (scene.position.x < 1) {
//             //         scene.position.x += 0.015; // bay ngược về nhanh
//             //         if (scene.position.x > 1) scene.position.x = 1;
//             //     }
//             // }


//             if (inView) {
//                 if (scene.position.y < -2) {
//                     scene.position.y += 0.035;
//                     if (scene.position.y > -2) scene.position.y = -2;
//                 }
//             } else {
//                 // Nếu không còn inView → reset về phải
//                 if (scene.position.y > -5) {
//                     scene.position.y -= 1; // bay ngược về nhanh
//                     if (scene.position.y < -5) scene.position.y = -5;
//                 }
//             }
//         }
//     })

//     return (

//         <group>
//             <primitive object={scene} scale={2} position={[0, -2, 0]} onClick={handleClick} />;

//             {showPopup && (
//                 <Html position={[1, -0.8, 0]} distanceFactor={2}>
//                     <motion.div
//                         //Scale bật nhẹ với delay (như loading)
//                         initial={{ opacity: 0, scale: 0 }}
//                         animate={{ opacity: 1, scale: 3 }}
//                         transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}

//                         style={{
//                             width: "220px",
//                             background: "white",
//                             padding: "8px 12px",
//                             borderRadius: "8px",
//                             boxShadow: "0 4px 12px rgba(3, 156, 6, 0.5)",
//                             fontSize: "14px",
//                             color: "#333",
//                         }}
//                     >
//                         "Từ đèn LED đến giọt nước cuối cùng, mọi vận hành đều lấy năng lượng mặt trời làm gốc. Nhờ đó, trái phát triển đồng đều, lên màu đẹp, chín ngọt tự nhiên – từng chi tiết nhỏ góp phần làm nên vụ mùa đáng giá."

//                     </motion.div>
//                 </Html>
//             )
//             }
//         </group>
//     );
// }

// // Component chính
// export default function Frame7_1() {
//     const titleRef = useRef(null);
//     const isTitleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.3 });


//     const descRef = useRef(null);
//     const isDescInView = useInView(descRef, { triggerOnce: true, threshold: 0.3 });

//     const canvasRef = useRef(null);
//     const isCanvasInView = useInView(canvasRef, { threshold: 0.3 });

//     // const descSecondRef = useRef(null);
//     // const isDescSecondInView = useInView(descSecondRef, { triggerOnce: true, threshold: 0.3 });

//     return (

//         <div className="frame7_1">
//             <div className="frame7_1_title" ref={titleRef}>
//                 <h2 className="frame7_1_title_first">
//                     <span className="font-primary">Giai đoạn 3: </span>
//                     <span className="font-secondary">Cây trưởng thành</span>
//                 </h2>
//                 <h3>Agri-Solar hỗ trợ leo giàn và phát triển tối ưu</h3>
//             </div>
//             <div className="frame7_1_middle">


//                 <div className="frame7_1-canvas-part" ref={canvasRef}>
//                     <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
//                         <ambientLight intensity={4} />
//                         <directionalLight position={[5, 5, 5]} intensity={1} />
//                         <Model inView={isCanvasInView} />
//                         <OrbitControls
//                             maxPolarAngle={Math.PI / 2}
//                             minPolarAngle={0}
//                             maxAzimuthAngle={Math.PI / 2}
//                             minAzimuthAngle={-Math.PI / 2}
//                         />
//                     </Canvas>
//                 </div>
//                 <div className="frame7_1_description" ref={descRef} >
//                     <p>
//                         Cây thanh long vươn lên mạnh mẽ, với bộ rễ vững chắc và thân cây bắt đầu leo giàn. Trong giai đoạn này, Agri-Solar hỗ trợ cây bằng việc cung cấp năng lượng mặt trời cho hệ thống tưới nhỏ giọt và đèn LED, giúp duy trì điều kiện lý tưởng để cây phát triển khỏe mạnh, leo giàn hiệu quả, và chuẩn bị sẵn sàng cho mùa hoa sắp tới – thời điểm quan trọng nhất quyết định sự thành công của mùa vụ.
//                     </p>
//                 </div>

//             </div>


//         </div>
//     );
// }










import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Environment, useGLTF } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import "../styles/Frame7_1.scss"

// Component Model dùng FBXLoader
function Model({ inView }) {
    const { scene } = useGLTF('/mature_tree/scene.gltf');
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation(); // Ngăn chặn event lan ra ngoài
        setShowPopup((prev) => !prev);
    };



    useFrame(() => {
        if (scene) {
            scene.rotation.y += 0.005;
            scene.position.x = 0;
            scene.position.z = 0;


            if (inView) {
                if (scene.position.y < -2) {
                    scene.position.y += 0.015;
                    if (scene.position.y > -2) scene.position.y = -2;
                }
            } else {
                // Nếu không còn inView → reset về phải
                if (scene.position.y > -5) {
                    scene.position.y -= 1; // bay ngược về nhanh
                    if (scene.position.y < -5) scene.position.y = -5;
                }
            }
        }
    })

    return (

        <group>
            <primitive object={scene} scale={2} position={[0, -2, 0]} onClick={handleClick} />;

            {showPopup && (
                <Html position={[1, -0.8, 0]} distanceFactor={2}>
                    <motion.div
                        //Scale bật nhẹ với delay (như loading)
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 3 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}

                        style={{
                            width: "220px",
                            background: "white",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 12px rgba(3, 156, 6, 0.5)",
                            fontSize: "14px",
                            color: "#333",
                        }}
                    >
                        "Từ đèn LED đến giọt nước cuối cùng, mọi vận hành đều lấy năng lượng mặt trời làm gốc. Nhờ đó, trái phát triển đồng đều, lên màu đẹp, chín ngọt tự nhiên – từng chi tiết nhỏ góp phần làm nên vụ mùa đáng giá."

                    </motion.div>
                </Html>
            )
            }
        </group>
    );
}

// Component chính
export default function Frame7_1() {
    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.3 });


    const descRef = useRef(null);
    const isDescInView = useInView(descRef, { triggerOnce: true, threshold: 0.3 });

    const canvasRef = useRef(null);
    const isCanvasInView = useInView(canvasRef, { threshold: 0.3 });


    return (

        <div className="frame7_1">
            <motion.div
                className="frame7_1_title"
                ref={titleRef}
                initial={{ opacity: 0 }}
                animate={isTitleInView ? { opacity: 1, transition: { duration: 1 } } : {}}
            >
                <h2 className="frame7_1_title_first">
                    {/* Giai đoạn 3 */}
                    <motion.span
                        className="font-primary"
                        initial={{ opacity: 0, y: 50, scale: 0 }}
                        animate={isTitleInView ? {
                            opacity: 1,
                            y: 0,
                            scale: [0, 2, 1],
                            transition: {
                                duration: 1.2,
                                times: [0, 0.6, 1],
                                delay: 0.2,
                                ease: "easeInOut",
                                type: "tween"
                            }
                        } : {}}
                    >
                        Giai đoạn 3:{" "}
                    </motion.span>

                    {/* Cây trưởng thành */}
                    <motion.span
                        className="font-secondary"
                        initial={{ opacity: 0, x: 100, rotate: 10, scale: 0 }}
                        animate={isTitleInView ? {
                            opacity: 1,
                            x: 0,
                            rotate: 0,
                            scale: [0, 2, 1],
                            transition: {
                                duration: 1.2,
                                times: [0, 0.6, 1],
                                delay: 0.5,
                                ease: "easeInOut",
                                type: "tween"
                            }
                        } : {}}
                    >
                        Cây trưởng thành
                    </motion.span>
                </h2>

                <motion.h3
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={isTitleInView ? {
                        opacity: 1,
                        y: 10,
                        scale: [0.8, 1.1, 1],
                        transition: {
                            duration: 1,
                            times: [0, 0.5, 1],
                            delay: 1, // delay để sau 2 span kia
                            ease: "easeOut",
                            type: "tween"
                        }
                    } : {}}
                    className="frame7_1_subtitle"
                >
                    Agri-Solar hỗ trợ leo giàn và phát triển tối ưu
                </motion.h3>
            </motion.div>
            <div className="frame7_1_middle">


                <div className="frame7_1-canvas-part" ref={canvasRef}>
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <ambientLight intensity={4} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <Model inView={isCanvasInView} />
                        <OrbitControls
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={0}
                            maxAzimuthAngle={Math.PI / 2}
                            minAzimuthAngle={-Math.PI / 2}
                        />
                    </Canvas>
                </div>
                <div className="frame7_1_description" ref={descRef} >
                    {/* <p>
                        Cây thanh long vươn lên mạnh mẽ, với bộ rễ vững chắc và thân cây bắt đầu leo giàn. Trong giai đoạn này, Agri-Solar hỗ trợ cây bằng việc cung cấp năng lượng mặt trời cho hệ thống tưới nhỏ giọt và đèn LED, giúp duy trì điều kiện lý tưởng để cây phát triển khỏe mạnh, leo giàn hiệu quả, và chuẩn bị sẵn sàng cho mùa hoa sắp tới – thời điểm quan trọng nhất quyết định sự thành công của mùa vụ.
                    </p> */}


                    {/* <p>
                            Cây thanh long <strong>vươn lên mạnh mẽ</strong>, với bộ rễ <strong>vững chắc</strong> và thân cây bắt đầu <strong>leo giàn</strong>.
                        </p>
                        <p>
                            Trong giai đoạn này, <strong>Agri-Solar</strong> hỗ trợ cây bằng việc cung cấp <strong>năng lượng mặt trời</strong> cho hệ thống <strong>tưới nhỏ giọt</strong> và <strong>đèn LED</strong>, giúp duy trì <strong>điều kiện lý tưởng</strong> để cây phát triển <strong>khỏe mạnh</strong>, <strong>leo giàn hiệu quả</strong>.
                        </p>
                        <p>
                            Cây chuẩn bị sẵn sàng cho <strong>mùa hoa</strong> sắp tới – thời điểm <strong>quan trọng nhất</strong> quyết định sự <strong>thành công</strong> của mùa vụ.
                        </p> */}

                    <motion.p
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={isDescInView ? { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, delay: 1.2 } } : {}}
                    >
                        Cây thanh long <strong>vươn lên mạnh mẽ</strong>, với bộ rễ <strong>vững chắc</strong> và thân cây bắt đầu <strong>leo giàn</strong>.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={isDescInView ? { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, delay: 1.6 } } : {}}
                    >
                        Trong giai đoạn này, <strong>Agri-Solar</strong> hỗ trợ cây bằng việc cung cấp <strong>năng lượng mặt trời</strong> cho hệ thống <strong>tưới nhỏ giọt</strong> và <strong>đèn LED</strong>, giúp duy trì <strong>điều kiện lý tưởng</strong> để cây phát triển <strong>khỏe mạnh</strong>, <strong>leo giàn hiệu quả</strong>.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={isDescInView ? { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, delay: 2 } } : {}}
                    >
                        Cây chuẩn bị sẵn sàng cho <strong>mùa hoa</strong> sắp tới – thời điểm <strong>quan trọng nhất</strong> quyết định sự <strong>thành công</strong> của mùa vụ.
                    </motion.p>

                </div>

            </div>


        </div >
    );
}