import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import shadow from "../assets/images/shadow.png";
import { fetchModelById } from "../utils/request";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Frame51.scss";

// Model3D component
function Model3D({ modelUrl, animate = false }) {
    const gltf = useGLTF(modelUrl, true);
    const modelRef = useRef();

    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation(); // Prevent event propagation
        setShowPopup((prev) => !prev); // Toggle popup visibility
    };

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.002;
            if (animate && modelRef.current.position.x < 0) {
                modelRef.current.position.x += 0.005;
            }
        }
    });

    return (
        <group>
            <primitive
                ref={modelRef}
                object={gltf.scene}
                scale={3}
                position={[-0.3, 0, 0]}
                onClick={handleClick}
            />
            {showPopup && (
                <Html position={[-0.05, 0.15, 0]} distanceFactor={5}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                        style={{
                            width: "50px",
                            background: "white",
                            padding: "4px 6px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 12px rgba(3, 156, 6, 0.5)",
                            fontSize: "3.5px",
                            color: "#333",
                        }}
                    >
                        "Hạt giống ở trạng thái tốt nhất, có độ ẩm phù hợp, chuẩn bị nảy
                        mầm"
                    </motion.div>
                </Html>
            )}
        </group>
    );
}

export default function Frame51() {
    const text = "Giai đoạn 1";
    const ref = useRef();
    const inView = useInView(ref, { once: false });

    const [slide, setSlide] = useState(false);
    const [scale, setScale] = useState(0);
    const [showText, setShowText] = useState(false);
    const [animateModel, setAnimateModel] = useState(false);
    const [animationFlag, setAnimationFlag] = useState(false);

    const [model, setModel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getModel() {
            try {
                setLoading(true);
                const m = await fetchModelById(1);
                setModel(m);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        getModel();
    }, []);

    useEffect(() => {
        if (inView && !slide) {
            const timer = setTimeout(() => setSlide(true), text.length * 50 + 500);
            return () => clearTimeout(timer);
        }
    }, [inView, slide]);

    useEffect(() => {
        if (slide) {
            const scaleTimer = setTimeout(() => setScale(8), 2000);
            const modelMoveTimer = setTimeout(() => setAnimateModel(true), 6000);
            const textVisibleTimer = setTimeout(() => setShowText(true), 6500);
            const endAnimationTimer = setTimeout(() => setAnimationFlag(true), 8500);

            return () => {
                clearTimeout(scaleTimer);
                clearTimeout(modelMoveTimer);
                clearTimeout(textVisibleTimer);
                clearTimeout(endAnimationTimer);
            };
        }
    }, [slide]);

    return (
        <div className="frame51-container">
            {/* Text animation */}
            <div className="frame51-text">
                <motion.div
                    ref={ref}
                    initial={{ x: 800, opacity: 0 }}
                    animate={slide ? { x: -1000, opacity: 1 } : { x: 800, opacity: 0 }}
                    transition={{ duration: 6, ease: "easeInOut" }}
                >
                    <motion.h2>{text}</motion.h2>
                </motion.div>
            </div>

            {/* Description */}
            <motion.div
                className="frame51-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: showText ? 1 : 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className="title">Khởi đầu</div>
                <p>
                    Gieo hạt là bước đầu tiên trong hành trình phát triển của cây thanh
                    long. Ở giai đoạn này, hệ thống tưới tự động sử dụng năng lượng từ pin
                    mặt trời giúp duy trì độ ẩm ổn định, tạo điều kiện lý tưởng để hạt
                    giống nảy mầm mạnh mẽ. Agri-Solar đảm bảo cây trồng được chăm sóc hiệu
                    quả ngay từ những ngày đầu tiên.
                </p>
            </motion.div>

            {/* Shadow */}
            <motion.img
                className="frame51-shadow"
                src={shadow}
                alt="Shadow"
                initial={{ scale: 0 }}
                animate={{ scale: scale }}
                transition={{ duration: 1 }}
            />

            {/* 3D Model */}
            <div className="frame51-canvas">
                {error && <p>Error loading model: {error}</p>}
                {model && (
                    <Canvas camera={{ position: [0, 2, 5], fov: 6.5 }}>
                        <ambientLight intensity={0.8} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <Suspense fallback={null}>
                            <Model3D modelUrl={model.url} animate={animateModel} />
                        </Suspense>
                        <OrbitControls
                            enabled={animationFlag}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={0}
                            maxAzimuthAngle={Math.PI / 2}
                            minAzimuthAngle={-Math.PI / 2}
                            minDistance={4}
                            maxDistance={8}
                        />
                    </Canvas>
                )}
            </div>
        </div>
    );
}