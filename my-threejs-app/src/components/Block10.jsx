// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Html, Environment, useGLTF } from "@react-three/drei";
// import { motion, useInView } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// import "../styles/Block10.scss"

// // Component Model dùng FBXLoader
// function Model() {
//     const { scene } = useGLTF('/perfect_flower/scene.gltf');
//     // const { scene } = useGLTF('/wilted_flower/scene.gltf');
//     const [showPopup, setShowPopup] = useState(false);

//     const handleClick = (e) => {
//         e.stopPropagation(); // Ngăn chặn event lan ra ngoài
//         setShowPopup((prev) => !prev);
//     };

//     return (

//         <group>
//             <primitive object={scene} scale={35} position={[0, 1, 0]} />;
//             {/* <primitive object={scene} scale={1} position={[0, -2.5, 0]} />; */}

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
// export default function Block10() {
//     const titleRef = useRef(null);
//     const isTitleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.3 });
//     const titleText = "Giai đoạn 5";

//     const descRef = useRef(null);
//     const isDescInView = useInView(descRef, { triggerOnce: true, threshold: 0.3 });

//     const descSecondRef = useRef(null);
//     const isDescSecondInView = useInView(descSecondRef, { triggerOnce: true, threshold: 0.3 });

//     return (

//         <div className="block10">
//             <div className="block10_first">
//                 <div className="block10_title" ref={titleRef}>
//                     <h2 className="block10_title_first">
//                         <span className="font-primary">Giai đoạn 4: </span>
//                         <span className="font-secondary">Cây ra hoa</span>
//                     </h2>
//                     <h3>Agri-Solar hỗ trợ kích thích quá trình ra hoa</h3>
//                 </div>
//                 <div className="block10_description" ref={descRef} >
//                     <p>
//                         Cây thanh long đã trưởng thành và bắt đầu nở hoa. Để hoa nở đều và thụ phấn tốt, ánh sáng và nhiệt độ cần được kiểm soát chặt chẽ. Hệ thống đèn LED Agri-Solar đóng vai trò quan trọng trong việc điều chỉnh chu kỳ ra hoa.
//                     </p>
//                 </div>
//             </div>

//             <div className="block10_middle">

//                 <div className="block10_button">
//                     <div className="slider-group">
//                         <label>Độ ẩm:</label>
//                         <input type="range" min="0" max="2" step="1" defaultValue="1" />
//                         <div className="slider-labels">
//                             <span>Quá thấp</span>
//                             <span>Lý tưởng</span>
//                             <span>Quá cao</span>
//                         </div>
//                     </div>

//                     <div className="slider-group">
//                         <label>Ánh sáng:</label>
//                         <input type="range" min="0" max="2" step="1" defaultValue="1" />
//                         <div className="slider-labels">
//                             <span>Quá thấp</span>
//                             <span>Lý tưởng</span>
//                             <span>Quá cao</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="block10-canvas-part">
//                     <Canvas camera={{ position: [0, 5, 0], fov: 50 }}>
//                         <ambientLight intensity={2} />
//                         <directionalLight position={[5, 5, 5]} intensity={1} />
//                         <Model />
//                         <OrbitControls maxDistance={10} />
//                     </Canvas>
//                     {/* <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
//                         <ambientLight intensity={2} />
//                         <directionalLight position={[5, 5, 5]} intensity={1} />
//                         <Model />
//                         <OrbitControls />
//                     </Canvas> */}
//                 </div>


//             </div>


//         </div>
//     );
// }












import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html, Environment, useGLTF } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import "../styles/Block10.scss"




// Component Model dùng FBXLoader
function Model({ isIdeal }) {
    const { scene } = useGLTF(isIdeal ? '/perfect_flower/scene.gltf' : '/wilted_flower/scene.gltf');
    // const { scene } = useGLTF('/wilted_flower/scene.gltf');
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation(); // Ngăn chặn event lan ra ngoài
        setShowPopup((prev) => !prev);
    };

    return (

        <group>
            {/* <primitive object={scene} scale={35} position={[0, 1, 0]} />; */}
            {/* <primitive object={scene} scale={1} position={[0, -2.5, 0]} />; */}
            <primitive
                object={scene}
                scale={isIdeal ? 35 : 1}
                position={isIdeal ? [0, 1, 0] : [0, -2.5, 0]}
            />
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



//Đổi góc camera
function CameraUpdater({ isIdeal }) {
    const { camera } = useThree();

    useEffect(() => {
        camera.position.set(isIdeal ? 0 : 0, isIdeal ? 5 : 2, isIdeal ? 0 : 5);
        camera.fov = 50;
        camera.updateProjectionMatrix(); // cần gọi để fov mới có hiệu lực
    }, [isIdeal, camera]);

    return null;
}



//Đổi model




// Component chính
export default function Block10() {
    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.3 });
    const titleText = "Giai đoạn 5";

    const descRef = useRef(null);
    const isDescInView = useInView(descRef, { triggerOnce: true, threshold: 0.3 });

    const descSecondRef = useRef(null);
    const isDescSecondInView = useInView(descSecondRef, { triggerOnce: true, threshold: 0.3 });



    const [humidity, setHumidity] = useState(1); // 0=quá thấp, 1=lý tưởng, 2=quá cao
    const [light, setLight] = useState(1);

    const isIdeal = humidity === 1 && light === 1;


    return (

        <div className="block10">
            <div className="block10_first">
                <div className="block10_title" ref={titleRef}>
                    <h2 className="block10_title_first">
                        <span className="font-primary">Giai đoạn 4: </span>
                        <span className="font-secondary">Cây ra hoa</span>
                    </h2>
                    <h3>Agri-Solar hỗ trợ kích thích quá trình ra hoa</h3>
                </div>
                <div className="block10_description" ref={descRef} >
                    <p>
                        Cây thanh long đã trưởng thành và bắt đầu nở hoa. Để hoa nở đều và thụ phấn tốt, ánh sáng và nhiệt độ cần được kiểm soát chặt chẽ. Hệ thống đèn LED Agri-Solar đóng vai trò quan trọng trong việc điều chỉnh chu kỳ ra hoa.
                    </p>
                </div>
            </div>

            <div className="block10_middle">

                <div className="block10_button">
                    <div className="slider-group">
                        <label>Độ ẩm:</label>
                        <input
                            type="range"
                            min="0"
                            max="2"
                            step="1"
                            value={humidity}
                            onChange={(e) => setHumidity(+e.target.value)}
                        />
                        <div className="slider-labels">
                            <span>Quá thấp</span>
                            <span>Lý tưởng</span>
                            <span>Quá cao</span>
                        </div>
                    </div>

                    <div className="slider-group">
                        <label>Ánh sáng:</label>
                        <input
                            type="range"
                            min="0"
                            max="2"
                            step="1"
                            value={light}
                            onChange={(e) => setLight(+e.target.value)}
                        />
                        <div className="slider-labels">
                            <span>Quá thấp</span>
                            <span>Lý tưởng</span>
                            <span>Quá cao</span>
                        </div>
                    </div>
                </div>
                <div className="block10-canvas-part">
                    <Canvas>
                        <CameraUpdater isIdeal={isIdeal} />
                        <ambientLight intensity={2} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <Model isIdeal={isIdeal} />

                        <OrbitControls maxDistance={10} />
                    </Canvas>

                </div>


            </div>


        </div>
    );
}