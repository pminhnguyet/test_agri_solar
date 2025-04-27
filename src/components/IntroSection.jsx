import React, { useEffect, useState } from 'react';
import '../assets/styles/IntroSection.scss';


const IntroSection = () => {
  const fullText = 'Agri-Solar là mô hình kết hợp nông nghiệp và sản xuất điện mặt trời trên cùng một không gian, giúp tối ưu hóa tài nguyên đất, nâng cao hiệu quả sử dụng năng lượng và tạo ra lợi ích kinh tế bền vững.';
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="intro-section">
      <div className="intro-title">
        <h2 className="agri-text">Agri-Solar</h2>
        <h2 className="what-text">là gì?</h2>
      </div>
      <p className="typed-text">{typedText}</p>
    </section>
  );
};

export default IntroSection;
