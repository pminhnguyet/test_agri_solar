import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { fetchModelById } from '../utils/request';


import '../styles/Block9_2.scss';

// Component load model GLB từ URL
const SolarPanelModel = ({ modelUrl }) => {
    const { scene } = useGLTF(modelUrl, true);
    return <primitive object={scene} scale={0.04} position={[0, 0, 0]} />;
};

const Block9_2 = () => {
    const [model, setModel] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadModel() {
            try {
                const m = await fetchModelById(8); // lấy model id=9 từ API
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
        <div className="block9_2_first"  >
            <div className="content-wrapper">
                <div className="left-section">
                    <div className="title">
                        <span className="highlight">Hệ thống đèn </span>
                        <span className="green-text">LED</span>
                    </div>
                    <div className="model-wrapper">
                        {error && <p>Error loading model: {error}</p>}
                        {!loading && model && (
                            <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                                <ambientLight intensity={1} />
                                <Suspense fallback={null}>
                                    <SolarPanelModel modelUrl={model.url} />
                                </Suspense>
                                <OrbitControls  maxDistance={8}/>
                            </Canvas>
                        )}
                    </div>
                </div>

                <div className="right-section">
                    <div className="text-section-1">
                        <p>
                            <strong>HỆ THỐNG ĐÈN LED</strong> sử dụng hoàn toàn<strong> năng lượng từ pin mặt trời</strong> cung cấp <strong>ánh sáng bổ sung</strong> cho <strong>cây thanh long</strong>  trong quá trình phát triển.
                        </p>
                    </div>
                    <div className="text-section-2">
                        <p>
                            Ánh sáng này giúp cây <strong>phát triển mạnh mẽ</strong>, kích thích quá trình ra hoa và kết trái, đồng thời <strong>tiết kiệm điện năng </strong>và<strong> giảm thiểu tác động đến môi trường.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block9_2;