// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { useLoader } from "@react-three/fiber";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
// import "../styles/ThreeDModel.scss";

// // Component Model dùng FBXLoader
// function Model() {
//     const fbx = useLoader(FBXLoader, '/full_tree_1/D0406452B20.fbx');

//     return (
//         <primitive object={fbx} scale={0.2} position={[0, 0, 0]} />
//     );
// }

// // Component chính
// export default function Block11() {
//     const titleRef = useRef(null);
//     const isTitleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.3 });

//     const textRef = useRef(null);
//     const isTextInView = useInView(textRef, { triggerOnce: true, threshold: 0.5 });

//     return (
//         <div className="second_container">
//             <div className="canvas-part">
//                 <Canvas camera={{ position: [100, 50, 500], fov: 50 }}>
//                     <ambientLight intensity={5} />
//                     <directionalLight position={[5, 5, 5]} intensity={1} />
//                     <Model />
//                     <OrbitControls
//                         maxPolarAngle={Math.PI / 2}
//                         minPolarAngle={0}
//                         maxAzimuthAngle={Math.PI / 2}
//                         minAzimuthAngle={-Math.PI / 2}
//                     />
//                 </Canvas>
//             </div>

//             <div className="text-part">
//                 <motion.h2
//                     ref={titleRef}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     whileHover={{ scale: 1.1, color: "#039c06" }}
//                 >
//                     Giai đoạn 2.2: Cây non - Cây phát triển tự nhiên
//                 </motion.h2>

//                 <motion.p
//                     ref={textRef}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={isTextInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 1.2, ease: "easeOut" }}
//                 >
//                     Từ hạt giống, những chồi non đầu tiên đã xuất hiện! Cây non đang phát triển rễ và lá, chuẩn bị cho giai đoạn trưởng thành.
//                 </motion.p>
//             </div>
//         </div>
//     );
// }

























import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Environment } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import "../styles/Block11.scss";

// Component Model dùng FBXLoader
function Model() {
    const fbx = useLoader(FBXLoader, '/full_tree_1/D0406452B20.fbx');
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation(); // Ngăn chặn event lan ra ngoài
        setShowPopup((prev) => !prev);
    };

    return (
        // <primitive object={fbx} scale={0.2} position={[0, 0, 0]} />
        <group>
            <primitive object={fbx} scale={0.2} position={[0, 0, 0]} onClick={handleClick} />
            {showPopup && (
                <Html position={[100, -100, 0]} distanceFactor={5}>
                    <motion.div
                        //Scale bật nhẹ với delay (như loading)
                        initial={{ opacity: 0, scale: 50}}
                        animate={{ opacity: 1, scale: 100 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}

                        style={{
                            width: "200px",
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
export default function Block11() {
    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.3 });
    const titleText = "Giai đoạn 5";

    const descRef = useRef(null);
    const isDescInView = useInView(descRef, { triggerOnce: true, threshold: 0.3 });

    const descSecondRef = useRef(null);
    const isDescSecondInView = useInView(descSecondRef, { triggerOnce: true, threshold: 0.3 });

    const lines = [
        "Khi từng tia nắng hóa thành dòng điện xanh, Agri-Solar âm thầm nâng niu từng trái thanh long.",
        "Ánh sáng chuẩn, nước tưới đều – mọi điều kiện được cân chỉnh hoàn hảo để tạo nên vụ mùa trọn vị, ngọt lành và căng mọng."
    ];




    return (

        <div className="block11">
            <div className="block11_title" ref={titleRef}>
                <h2>
                    {titleText.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 50, skewY: 10 }}
                            animate={isTitleInView ? { opacity: 1, y: 0, skewY: 0 } : {}}
                            whileHover={{ scale: 2, color: "#fab446", rotate: -30 }}
                            transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                            style={{ display: "inline-block", cursor: "pointer" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </h2>
            </div>
            <div className="block11_middle">
                <div className="block11_description" ref={descRef} >
                    <motion.p
                        className="block11_description_first"
                        initial={{ opacity: 0 }}
                        animate={isDescInView ? { opacity: 1 } : {}}
                        transition={{ duration: 2 }}
                    >

                        {
                            "Kết trái và thu hoạch".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isDescInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.05 * index }}
                                    style={{ display: "inline-block" }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))
                        }
                    </motion.p>
                 
                    
                    <div
                        className="block11_description_second"
                        ref={descSecondRef}>
                        {/* Khi từng tia nắng hóa thành dòng điện xanh, Agri-Solar âm thầm nâng niu từng trái thanh long. Ánh sáng chuẩn, nước tưới đều – mọi điều kiện được cân chỉnh hoàn hảo để tạo nên vụ mùa trọn vị, ngọt lành và căng mọng. */}
                        {lines.map((line, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                animate={isDescSecondInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.3, duration: 0.6, ease: "easeOut" }}
                                style={{ marginBottom: "12px" }}
                            >
                                {line}
                            </motion.p>
                        ))}

                    </div>
                    {/* <p popup >Từ đèn LED đến giọt nước cuối cùng, mọi vận hành đều lấy năng lượng mặt trời làm gốc. Nhờ đó, trái phát triển đồng đều, lên màu đẹp, chín ngọt tự nhiên – từng chi tiết nhỏ góp phần làm nên vụ mùa đáng giá.</p> */}
                </div>

                <div className="block11-canvas-part">
                    <Canvas camera={{ position: [100, 50, 500], fov: 50 }}>
                        <ambientLight intensity={5} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <Model />
                        <OrbitControls
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={0}
                            maxAzimuthAngle={Math.PI / 2}
                            minAzimuthAngle={-Math.PI / 2}
                        />
                    </Canvas>
                </div>

            </div>

            <div className="block11_end">
                <img src="#"></img>
                <p>"Sau khi hoa thụ phấn thành công, trái thanh long bắt đầu hình thành và phát triển. Cây khỏe mạnh, trái lớn nhanh, màu sắc đẹp và đạt chất lượng cao khi thu hoạch."</p>
            </div>
        </div>
    );
}