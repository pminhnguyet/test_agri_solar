import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import backgroundImage from '../assets/images/back91.png';  // ảnh nền

import '../assets/styles/Block91.scss';

const SolarPanelModel = () => {
  const { scene } = useGLTF('/public/soler_panel_setup/scene.gltf');
  const modelRef = useRef();  // Tham chiếu tới mô hình

  useFrame(() => {
    // Nếu cần xoay mô hình tự động
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.75} />;
};

const Block5 = () => {
  return (
    <div className="block5-container">
      {/* Background Image */}
      <img src={backgroundImage} alt="Background" className="background-image" />

      <div className="content-wrapper">
        {/* Left Section */}
        <div className="left-section">
          <div className="title">
            <span className="highlight">Pin năng lượng</span> <span className="green-text">mặt trời</span>
          </div>
          <div className="model-wrapper">
            <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
              <ambientLight intensity={1} />
              <SolarPanelModel />
              {/* OrbitControls cho phép người dùng di chuyển, xoay và phóng to thu nhỏ mô hình */}
              <OrbitControls />
            </Canvas>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="text-section">
            <p>
              <strong>PIN NĂNG LƯỢNG MẶT TRỜI</strong> cung cấp <strong>năng lượng sạch, năng lượng tái tạo</strong> bằng cách sử dụng <strong>ánh sáng mặt trời</strong> để tạo ra <strong>điện năng</strong> cho <strong>đèn LED</strong> và <strong>hệ thống tưới</strong> hoạt động.
            </p>
          </div>
          <div className="text-section">
            <p>
              <strong>SỬ DỤNG PIN NĂNG LƯỢNG MẶT TRỜI</strong> không chỉ giúp <strong>giảm chi phí điện năng</strong> mà còn <strong>bảo vệ môi trường</strong>, là giải pháp nông nghiệp <strong>hiệu quả</strong>, hỗ trợ quá trình chăm sóc thanh long một cách <strong>thân thiện với thiên nhiên</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block5;
