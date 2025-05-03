import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { fetchModelById } from '../utils/request';


import '../styles/Block9_3.scss';

// Component load model GLB từ URL
const SolarPanelModel = ({ modelUrl }) => {
    const modelRef = useRef();
    const { scene } = useGLTF(modelUrl, true);
    // useFrame(() => {
    //     if (modelRef.current) {
    //         modelRef.current.rotation.y += 0.005; // tốc độ xoay
    //     }
    // });
    return <primitive ref={modelRef} object={scene} scale={0.6} position={[-0.5, 0, 0]} />;
};

const Block9_3 = () => {
    const [model, setModel] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadModel() {
            try {
                const m = await fetchModelById(10); // lấy model id=9 từ API
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
        <div className="block9_3_first"  >
            <div className="content-wrapper">
                <div className="left-section">
                    <div className="title">
                        <span className="highlight">Hệ thống tưới </span>
                        <span className="green-text">tự động</span>
                    </div>
                    <div className="model-wrapper">
                        {error && <p>Error loading model: {error}</p>}
                        {!loading && model && (
                            <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
                                <ambientLight intensity={1} />
                                <Suspense fallback={null}>
                                    <SolarPanelModel modelUrl={model.url} />
                                </Suspense>
                                <OrbitControls maxDistance={8} />
                            </Canvas>
                        )}
                    </div>
                </div>

                <div className="right-section">
                    <div className="text-section-1">
                        <p>
                            <strong>HỆ THỐNG TƯỚI TỰ ĐỘNG</strong> sử dụng <strong>năng lượng từ pin mặt trời</strong>, giúp cung cấp <strong>nước chính xác và kịp thời</strong> cho cây thanh long.
                        </p>
                    </div>
                    <div className="text-section-2">
                        <p>
                            Với <strong>công nghệ tưới thông minh</strong>, hệ thống này không chỉ <strong>tiết kiệm nước</strong>  mà còn <strong>duy trì độ ẩm lý tưởng </strong>cho cây, đảm bảo cây thanh long luôn <strong>phát triển mạnh mẽ, khỏe mạnh</strong> và đạt <strong>năng suất cao.</strong>
                        </p>
                    </div>
                    <div className="text-section-3">
                        <p>
                            Giải pháp tưới này giúp <strong>tối ưu hóa việc chăm sóc cây</strong>, đồng thời <strong>bảo vệ tài nguyên nước</strong> và <strong>nâng cao hiệu quả canh tác.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block9_3;