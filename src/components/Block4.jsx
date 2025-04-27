import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei'; // thêm OrbitControls
import '../assets/styles/Block4.scss';

import background4 from '../assets/images/back4.png';
import ellipse from '../assets/images/ellipse.png';

const DragonFruitModel = () => {
  const group = useRef();
  const { scene } = useGLTF('/public/dragon_fruit/scene.gltf');

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002; // giữ tự quay nhẹ nhàng
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={15} position={[0, -1, 0]} />
    </group>
  );
};

const Block4 = () => {
  return (
    <div className="block4-container">
      {/* Background & Ellipse */}
      <img src={background4} alt="Background" className="background-image" />
      <img src={ellipse} alt="Ellipse" className="ellipse-image" />

      {/* Nội dung */}
      <div className="block4-grid">
        
        {/* Title trên */}
        <div className="section section-title-top">
          <div className="title-top">
            Giải pháp bền vững
          </div>
        </div>

        {/* Model + Text */}
        <div className="section section-center">
          <div className="content-center">
            <div className="model-wrapper">
              <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <DragonFruitModel />
                <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} />
              </Canvas>
            </div>

            <div className="description">
              Ứng dụng Agri-Solar vào canh tác thanh long giúp tận dụng tối đa nguồn năng lượng mặt trời, giảm chi phí điện năng từ hệ thống đèn chiếu sáng, tối ưu hóa tưới tiêu và bảo quản sau thu hoạch. Đây không chỉ là bước tiến quan trọng trong việc nâng cao năng suất, mà còn giúp người nông dân chủ động thích ứng với biến đổi khí hậu, hướng đến mô hình canh tác bền vững.
            </div>
          </div>
        </div>

        {/* Title dưới */}
        <div className="section section-title-bottom">
          <div className="title-bottom">
            <span className="black-text">CHO CANH TÁC </span>
            <span className="green-text">Thanh Long</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Block4;
