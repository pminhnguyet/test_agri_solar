// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Html, Environment } from "@react-three/drei";
// import { motion, useInView } from "framer-motion";
// import { useRef, useEffect, useState } from "react";
// import { useLoader } from "@react-three/fiber";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
// import "../styles/Block11.scss";

// // Component Model dùng FBXLoader
// function Model() {
//     const fbx = useLoader(FBXLoader, '/full_tree_1/D0406452B20.fbx');
//     const [showPopup, setShowPopup] = useState(false);

//     const handleClick = (e) => {
//         e.stopPropagation(); // Ngăn chặn event lan ra ngoài
//         setShowPopup((prev) => !prev);
//     };

//     return (
//         // <primitive object={fbx} scale={0.2} position={[0, 0, 0]} />
//         <group>
//             <primitive object={fbx} scale={0.2} position={[0, 0, 0]} onClick={handleClick} />
//             {showPopup && (
//                 <Html position={[100, -100, 0]} distanceFactor={5}>
//                     <motion.div
//                         //Scale bật nhẹ với delay (như loading)
//                         initial={{ opacity: 0, scale: 50}}
//                         animate={{ opacity: 1, scale: 100 }}
//                         transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}

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
//                         "Từ đèn LED đến giọt nước cuối cùng, mọi vận hành đều lấy năng lượng mặt trời làm gốc. Nhờ đó, trái phát triển đồng đều, lên màu đẹp, chín ngọt tự nhiên – từng chi tiết nhỏ góp phần làm nên vụ mùa đáng giá."

//                     </motion.div>
//                 </Html>
//             )
//             }
//         </group>
//     );
// }

// // Component chính
// export default function Block11() {
//     const titleRef = useRef(null);
//     const isTitleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.3 });
//     const titleText = "Giai đoạn 5";

//     const descRef = useRef(null);
//     const isDescInView = useInView(descRef, { triggerOnce: true, threshold: 0.3 });

//     const descSecondRef = useRef(null);
//     const isDescSecondInView = useInView(descSecondRef, { triggerOnce: true, threshold: 0.3 });

//     const lines = [
//         "Khi từng tia nắng hóa thành dòng điện xanh, Agri-Solar âm thầm nâng niu từng trái thanh long.",
//         "Ánh sáng chuẩn, nước tưới đều – mọi điều kiện được cân chỉnh hoàn hảo để tạo nên vụ mùa trọn vị, ngọt lành và căng mọng."
//     ];




//     return (

//         <div className="block11">
//             <div className="block11_title" ref={titleRef}>
//                 <h2>
//                     {titleText.split("").map((char, index) => (
//                         <motion.span
//                             key={index}
//                             initial={{ opacity: 0, y: 50, skewY: 10 }}
//                             animate={isTitleInView ? { opacity: 1, y: 0, skewY: 0 } : {}}
//                             whileHover={{ scale: 2, color: "#fab446", rotate: -30 }}
//                             transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
//                             style={{ display: "inline-block", cursor: "pointer" }}
//                         >
//                             {char === " " ? "\u00A0" : char}
//                         </motion.span>
//                     ))}
//                 </h2>
//             </div>
//             <div className="block11_middle">
//                 <div className="block11_description" ref={descRef} >
//                     <motion.p
//                         className="block11_description_first"
//                         initial={{ opacity: 0 }}
//                         animate={isDescInView ? { opacity: 1 } : {}}
//                         transition={{ duration: 2 }}
//                     >

//                         {
//                             "Kết trái và thu hoạch".split("").map((char, index) => (
//                                 <motion.span
//                                     key={index}
//                                     initial={{ opacity: 0, y: 10 }}
//                                     animate={isDescInView ? { opacity: 1, y: 0 } : {}}
//                                     transition={{ delay: 0.05 * index }}
//                                     style={{ display: "inline-block" }}
//                                 >
//                                     {char === " " ? "\u00A0" : char}
//                                 </motion.span>
//                             ))
//                         }
//                     </motion.p>


//                     <div
//                         className="block11_description_second"
//                         ref={descSecondRef}>
//                         {/* Khi từng tia nắng hóa thành dòng điện xanh, Agri-Solar âm thầm nâng niu từng trái thanh long. Ánh sáng chuẩn, nước tưới đều – mọi điều kiện được cân chỉnh hoàn hảo để tạo nên vụ mùa trọn vị, ngọt lành và căng mọng. */}
//                         {lines.map((line, index) => (
//                             <motion.p
//                                 key={index}
//                                 initial={{ opacity: 0, y: 100 }}
//                                 animate={isDescSecondInView ? { opacity: 1, y: 0 } : {}}
//                                 transition={{ delay: index * 0.3, duration: 0.6, ease: "easeOut" }}
//                                 style={{ marginBottom: "12px" }}
//                             >
//                                 {line}
//                             </motion.p>
//                         ))}

//                     </div>
//                     {/* <p popup >Từ đèn LED đến giọt nước cuối cùng, mọi vận hành đều lấy năng lượng mặt trời làm gốc. Nhờ đó, trái phát triển đồng đều, lên màu đẹp, chín ngọt tự nhiên – từng chi tiết nhỏ góp phần làm nên vụ mùa đáng giá.</p> */}
//                 </div>

//                 <div className="block11-canvas-part">
//                     <Canvas camera={{ position: [100, 50, 500], fov: 50 }}>
//                         <ambientLight intensity={5} />
//                         <directionalLight position={[5, 5, 5]} intensity={1} />
//                         <Model />
//                         <OrbitControls
//                             maxPolarAngle={Math.PI / 2}
//                             minPolarAngle={0}
//                             maxAzimuthAngle={Math.PI / 2}
//                             minAzimuthAngle={-Math.PI / 2}
//                         />
//                     </Canvas>
//                 </div>

//             </div>

//             <div className="block11_end">
//                 <img src="#"></img>
//                 <p>"Sau khi hoa thụ phấn thành công, trái thanh long bắt đầu hình thành và phát triển. Cây khỏe mạnh, trái lớn nhanh, màu sắc đẹp và đạt chất lượng cao khi thu hoạch."</p>
//             </div>
//         </div>
//     );
// }












import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Environment, useGLTF } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import "../styles/Block11.scss";

// Component Model dùng FBXLoader
function Model({ inView }) {
    const { scene } = useGLTF('/final_full_tree/scene.gltf');
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation(); // Ngăn chặn event lan ra ngoài
        setShowPopup((prev) => !prev);
    };

    useFrame(() => {
        if (scene) {
            scene.position.x = 0;
            scene.position.z = 0;
            // if (inView) {
            //     if (scene.position.x > 0) {
            //         scene.position.x -= 0.015;
            //         if (scene.position.x < 0) scene.position.x = 0;
            //     }
            // } else {
            //     // Nếu không còn inView → reset về phải
            //     if (scene.position.x < 1) {
            //         scene.position.x += 0.015; // bay ngược về nhanh
            //         if (scene.position.x > 1) scene.position.x = 1;
            //     }
            // }
            if (inView) {
                if (scene.position.y < -2) {
                    scene.position.y += 0.025;
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
        // <primitive object={fbx} scale={0.2} position={[0, 0, 0]} />
        <group >
            {/* <primitive object={scene} scale={2} position={[1, -2, 0]} onClick={handleClick} />; */}
            <primitive object={scene} scale={2} onClick={handleClick} />;
            {showPopup && (
                <Html position={[1, -1, 0]} distanceFactor={2}>
                    <motion.div
                        //Scale bật nhẹ với delay (như loading)
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 3 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}

                        style={{
                            width: "220px",
                            background: "linear-gradient(200deg, #284b1e 20%, #5ec243 100%)",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            // boxShadow: "0 4px 12px rgba(3, 156, 6, 0.5)",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                            fontSize: "14px",
                            color: "#fff",
                            fontFamily: "'Raleway', sans-serif",
                            fontWeight: 300,

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



//Block11_end
function Block11End() {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

    return (
        <div className="block11_end" ref={ref}>
            <motion.div
                className="block11_end_image"
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <img src="/Block11_image/dragon (1).png" alt="Quả thanh long" />
            </motion.div>

            <motion.div
                className="block11_end_content"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            >
                <p>
                    "Sau khi hoa thụ phấn thành công, trái thanh long bắt đầu hình thành và phát triển.
                    Cây khỏe mạnh, trái lớn nhanh, màu sắc đẹp và đạt chất lượng cao khi thu hoạch."
                </p>
            </motion.div>
        </div>
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

    const middleRef = useRef(null);
    const isMiddleInView = useInView(middleRef, { threshold: 0.3 });


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
                                transition={{ delay: index * 0.6, duration: 1, ease: "easeOut" }}
                                style={{ marginBottom: "12px" }}
                            >
                                {line}
                            </motion.p>
                        ))}

                    </div>
                    {/* <p popup >Từ đèn LED đến giọt nước cuối cùng, mọi vận hành đều lấy năng lượng mặt trời làm gốc. Nhờ đó, trái phát triển đồng đều, lên màu đẹp, chín ngọt tự nhiên – từng chi tiết nhỏ góp phần làm nên vụ mùa đáng giá.</p> */}
                </div>

                <div className="block11-canvas-part" ref={middleRef}>
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} >
                        <ambientLight intensity={5} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <Model inView={isMiddleInView} />
                        <OrbitControls
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={0}
                            maxAzimuthAngle={Math.PI / 2}
                            minAzimuthAngle={-Math.PI / 2}
                            maxDistance={10}
                        />
                    </Canvas>
                </div>

            </div>

            {/* <div className="block11_end">
                <div className="block11_end_image">
                    <img src="/public/Block11_image/dragon (1).png" alt="Quả thanh long"></img>
                </div>
                <div className="block11_end_content">
                    <p>"Sau khi hoa thụ phấn thành công, trái thanh long bắt đầu hình thành và phát triển. Cây khỏe mạnh, trái lớn nhanh, màu sắc đẹp và đạt chất lượng cao khi thu hoạch."</p>
                </div>
            </div> */}
            <Block11End />
        </div>
    );
}