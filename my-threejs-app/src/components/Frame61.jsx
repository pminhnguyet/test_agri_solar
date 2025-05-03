// import { motion, useInView } from "framer-motion";
// import { useRef, useEffect, useState, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import shadow_left from "../assets/images/shadow_left.png";
// import { fetchModelById } from "../utils/request";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/Frame61.scss";

// function Model3D({ url, animate = false, onDone, moveLeft = false }) {
//     const gltf = useGLTF(url, true);
//     const model = useRef();
//     const [rotationActive, setRotationActive] = useState(true);
//     const [showPopup, setShowPopup] = useState(false);

//     const handleClick = (e) => {
//         e.stopPropagation();
//         setShowPopup((prev) => !prev); // Toggle popup visibility
//     };

//     useFrame(() => {
//         if (model.current) {
//             if (rotationActive) {
//                 model.current.rotation.y += 0.002;
//             }

//             if (animate && model.current.position.y < -0.15) {
//                 model.current.position.y += 0.015;
//                 if (model.current.position.y >= -0.15) {
//                     model.current.position.y = -0.15;
//                     setRotationActive(false);
//                     if (onDone) onDone();
//                 }
//             }

//             if (moveLeft && model.current.position.x > 0) {
//                 model.current.position.x -= 0.005;
//             }
//         }
//     });

//     return (
//         <group>
//             <primitive
//                 ref={model}
//                 object={gltf.scene}
//                 scale={6}
//                 position={[0.3, -2, 0]}
//                 onClick={handleClick}
//             />
//             {showPopup && (
//                 <Html position={[-0.07, 0.08, 0]} distanceFactor={5}>
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.5 }}
//                         animate={{ opacity: 1, scale: 0.6 }}
//                         transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
//                         style={{
//                             width: "50px",
//                             background: "white",
//                             padding: "4px 6px",
//                             borderRadius: "8px",
//                             boxShadow: "0 4px 12px rgba(3, 156, 6, 0.5)",
//                             fontSize: "3.5px",
//                             color: "#333",
//                         }}
//                     >
//                         "Cây phát triển tốt, lá xanh, thân cứng cáp."
//                     </motion.div>
//                 </Html>
//             )}
//         </group>
//     );
// }

// export default function Frame61() {
//     const title = "Giai đoạn 2";
//     const subTitle = "Cây non";
//     const ref = useRef();
//     const inView = useInView(ref, { once: false });

//     const [slide, setSlide] = useState(false);
//     const [scale, setScale] = useState(0);
//     const [showText, setShowText] = useState(false);
//     const [animateModel, setAnimateModel] = useState(false);
//     const [fadeOut, setFadeOut] = useState(false);
//     const [moveLeft, setMoveLeft] = useState(false);
//     const [animationFlag, setAnimationFlag] = useState(false);

//     const [model, setModel] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [err, setErr] = useState(null);

//     useEffect(() => {
//         async function getModel() {
//             try {
//                 setLoading(true);
//                 const m = await fetchModelById(2);
//                 setModel(m);
//                 setAnimateModel(true);
//             } catch (e) {
//                 setErr(e.message);
//                 console.error("Error loading model:", e);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         getModel();
//     }, []);

//     useEffect(() => {
//         if (inView && !slide) {
//             const timer = setTimeout(() => setSlide(true), title.length * 50 + 500);
//             return () => clearTimeout(timer);
//         }
//     }, [inView, slide]);

//     useEffect(() => {
//         if (slide) {
//             const timer = setTimeout(() => {
//                 setScale(8);
//             }, 2000);
//             return () => clearTimeout(timer);
//         }
//     }, [slide]);

//     const handleModelDone = () => {
//         setTimeout(() => {
//             setFadeOut(true);
//             setMoveLeft(true);
//             setTimeout(() => {
//                 setAnimationFlag(true);
//                 setShowText(true);
//             }, 2000);
//         }, 200);
//     };

//     return (
//         <div className="frame61-container">
//             {/* Title  */}
//             <motion.div
//                 className="frame61-text"
//                 animate={{ opacity: fadeOut ? 0 : 1 }}
//                 transition={{ duration: 1 }}
//             >
//                 <div ref={ref}>
//                     <h2>{title}</h2>
//                     <motion.div className="frame61-cay-non">
//                         <motion.h2>{subTitle}</motion.h2>
//                     </motion.div>
//                 </div>
//             </motion.div>

//             {/*  Description */}
//             <motion.div
//                 className="frame61-description"
//                 initial={{ opacity: 0, x: 0 }}
//                 animate={{
//                     opacity: showText ? 1 : 0,
//                     x: showText ? 150 : 0,
//                 }}
//                 transition={{
//                     opacity: { duration: 1.5 },
//                     x: { duration: 1.5 },
//                 }}
//             >
//                 <motion.div
//                     className="title"
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1.5, ease: "easeOut" }}
//                     whileHover={{ scale: 1.1, color: "#039c06" }}
//                 >
//                     <span className="bricolage">Cây phát triển </span>
//                     <span className="roboto-italic">tự nhiên</span>
//                 </motion.div>
//                 <p>
//                     "Từ hạt giống, những chồi non đầu tiên đã xuất hiện! Hệ thống
//                     Agri-Solar cung cấp năng lượng cho tưới nhỏ giọt tự động, giúp duy trì
//                     độ ẩm ổn định và hỗ trợ cây non phát triển khỏe mạnh trong giai đoạn
//                     hình thành rễ và lá."
//                 </p>
//             </motion.div>

//             {/* Shadow */}
//             <img className="frame61-shadow" src={shadow_left} alt="Shadow Left" />

//             {/* 3D Model */}
//             <div className="frame61-canvas">
//                 {err && <p>Error loading model: {err}</p>}
//                 {model && (
//                     <Canvas camera={{ position: [0, 2, 5], fov: 6.5 }}>
//                         <ambientLight intensity={0.8} />
//                         <directionalLight position={[5, 5, 5]} intensity={1} />
//                         <Suspense fallback={null}>
//                             <Model3D
//                                 url={model.url}
//                                 animate={animateModel}
//                                 onDone={handleModelDone}
//                                 moveLeft={moveLeft}
//                             />
//                         </Suspense>
//                         {animationFlag && (
//                             <OrbitControls
//                                 maxPolarAngle={Math.PI / 2}
//                                 minPolarAngle={0}
//                                 maxAzimuthAngle={Math.PI / 2}
//                                 minAzimuthAngle={-Math.PI / 2}
//                                 minDistance={4}
//                                 maxDistance={8}
//                             />
//                         )}
//                     </Canvas>
//                 )}
//             </div>
//         </div>
//     );
// }



import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import shadow_left from "../assets/images/shadow_left.png";
import { fetchModelById } from "../utils/request";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Frame61.scss";

function Model3D({
    url,
    animate = false,
    onDone,
    moveLeft = false,
    animationCompleted,
}) {
    const gltf = useGLTF(url, true);
    const model = useRef();
    const [rotationActive, setRotationActive] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (e) => {
        if (!animationCompleted) return;
        e.stopPropagation();
        setShowPopup((prev) => !prev);
    };

    useFrame(() => {
        if (!model.current) return;

        if (rotationActive) model.current.rotation.y += 0.002;

        if (animate && model.current.position.y < -0.15) {
            model.current.position.y += 0.015;
            if (model.current.position.y >= -0.15) {
                model.current.position.y = -0.15;
                setRotationActive(false);
                onDone?.();
            }
        }

        if (moveLeft && model.current.position.x > 0) {
            model.current.position.x -= 0.005;
        }
    });

    return (
        <group>
            <primitive
                ref={model}
                object={gltf.scene}
                scale={6}
                position={[0.3, -2, 0]}
                onClick={handleClick}
            />
            {showPopup && (
                <Html position={[-0.07, 0.08, 0]} distanceFactor={5}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 0.6 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                        style={{
                            width: "40px",
                            background: "white",
                            padding: "4px 5px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 12px rgba(3, 156, 6, 0.5)",
                            fontSize: "2.5px",
                            color: "#333",
                        }}
                    >
                        "Cây phát triển tốt, lá xanh, thân cứng cáp."
                    </motion.div>
                </Html>
            )}
        </group>
    );
}

export default function Frame61() {
    const title = "Giai đoạn 2";
    const subTitle = "Cây non";
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-20% 0px" });

    const [showText, setShowText] = useState(false);
    const [animateModel, setAnimateModel] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const [animationFlag, setAnimationFlag] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false); // State mới

    const [model, setModel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    const textRef = useRef(null);
    const isTextInView = useInView(textRef, {
        triggerOnce: false,
        threshold: 0.3,
    });

    useEffect(() => {
        const getModel = async () => {
            try {
                setLoading(true);
                const m = await fetchModelById(2);
                setModel(m);
            } catch (e) {
                setErr(e.message);
                console.error("Error loading model:", e);
            } finally {
                setLoading(false);
            }
        };
        getModel();
    }, []);

    useEffect(() => {
        if (inView) {
            const timers = [];

            timers.push(setTimeout(() => setAnimateModel(true), 300));
            timers.push(setTimeout(() => setFadeOut(true), 2300));
            timers.push(setTimeout(() => setMoveLeft(true), 2800));
            timers.push(setTimeout(() => setShowText(true), 3500));
            timers.push(
                setTimeout(() => {
                    setAnimationFlag(true);
                    setAnimationCompleted(true); // Đánh dấu animation đã hoàn thành
                }, 4000)
            );

            return () => timers.forEach(clearTimeout);
        }
    }, [inView]);

    const handleModelDone = () => {
        setTimeout(() => {
            setFadeOut(true);
            setMoveLeft(true);
            setTimeout(() => {
                setAnimationFlag(true);
                setShowText(true);
                setAnimationCompleted(true); // Đánh dấu animation đã hoàn thành
            }, 2000);
        }, 200);
    };

    return (
        <div className="frame61-container" ref={ref}>
            {/* Title */}
            <motion.div
                className="frame61-text"
                animate={{ opacity: fadeOut ? 0 : 1 }}
                transition={{ duration: 1 }}
            >
                <div>
                    <h2>{title}</h2>
                    <motion.div className="frame61-cay-non">
                        <motion.h2>{subTitle}</motion.h2>
                    </motion.div>
                </div>
            </motion.div>

            {/* Description */}
            <motion.div
                className="frame61-description"
                initial={{ opacity: 0, x: 0 }}
                animate={{
                    opacity: showText ? 1 : 0,
                    x: showText ? 150 : 0,
                }}
                transition={{
                    opacity: { duration: 1.5 },
                    x: { duration: 1.5 },
                }}
            >
                <motion.div
                    className="title"
                    ref={textRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.1, color: "#039c06" }}
                >
                    <span className="bricolage">Cây phát triển </span>
                    <span className="roboto-italic">tự nhiên</span>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    "Từ hạt giống, những chồi non đầu tiên đã xuất hiện! Hệ thống
                    Agri-Solar cung cấp năng lượng cho tưới nhỏ giọt tự động, giúp duy trì
                    độ ẩm ổn định và hỗ trợ cây non phát triển khỏe mạnh trong giai đoạn
                    hình thành rễ và lá."
                </motion.p>
            </motion.div>

            {/* Shadow */}
            <img className="frame61-shadow" src={shadow_left} alt="Shadow Left" />

            {/* 3D Model */}
            <div className="frame61-canvas">
                {err && <p>Error loading model: {err}</p>}
                {model && (
                    <Canvas camera={{ position: [0, 2, 5], fov: 6.5 }}>
                        <ambientLight intensity={0.8} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <Suspense fallback={null}>
                            <Model3D
                                url={model.url}
                                animate={animateModel}
                                onDone={handleModelDone}
                                moveLeft={moveLeft}
                                animationCompleted={animationCompleted} // Truyền state vào
                            />
                        </Suspense>
                        {animationFlag && animationCompleted && (
                            <OrbitControls
                                maxPolarAngle={Math.PI / 2}
                                minPolarAngle={0}
                                maxAzimuthAngle={Math.PI / 2}
                                minAzimuthAngle={-Math.PI / 2}
                                minDistance={4}
                                maxDistance={8}
                            />
                        )}
                    </Canvas>
                )}
            </div>
        </div>
    );
}