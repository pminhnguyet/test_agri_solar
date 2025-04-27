import React from 'react';
import '../assets/styles/Block5.scss';

import background51 from '../assets/images/back51.png';
import background52 from '../assets/images/back52.png';

const Block5 = () => {
  return (
    <div className="block5-container">
      <img src={background51} alt="Background 51" className="background-layer back51" />
      <img src={background52} alt="Background 52" className="background-layer back52" />

      <div className="block5-content">
        <h2 className="animated-text">
            {"Trải nghiệm quá trình trồng cây Thanh long cùng AGRI - SOLAR".split(" ").map((word, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                {word}&nbsp;
                </span>
            ))}
        </h2>
        <button className="detail-button">Xem chi tiết</button>
      </div>
    </div>
  );
};

export default Block5;
