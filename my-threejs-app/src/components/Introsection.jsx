import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/IntroSection.scss';

const IntroSection = () => {
  const fullText = 'Agri-Solar là mô hình kết hợp nông nghiệp và sản xuất điện mặt trời trên cùng một không gian, giúp tối ưu hóa tài nguyên đất, nâng cao hiệu quả sử dụng năng lượng và tạo ra lợi ích kinh tế bền vững.';
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      // Đợi 1.5s sau animation title rồi mới bắt đầu gõ chữ
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  useEffect(() => {
    if (startTyping && index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [startTyping, index]);

  return (
    <section className="intro-section" ref={ref}>
      <div className={`intro-title ${inView ? 'animate-title' : ''}`}>
        <h2 className="agri-text">Agri-Solar</h2>
        <h2 className="what-text">là gì?</h2>
      </div>
      <p className="typed-text">{typedText}</p>
    </section>
  );
};

export default IntroSection;



// import React, { useEffect, useState } from 'react';
// import '../styles/IntroSection.scss';

// export default function IntroSection() {


//   return (
//     <>
//       <div className="intro-section" >
//         <div className="intro-title">
//           <h2 className="agri-text">Agri-Solar</h2>
//           <h2 className="what-text">là gì?</h2>
//         </div>
//         <p className="typed-text">
//           Agri-Solar là mô hình kết hợp nông nghiệp và sản xuất điện mặt trời trên cùng một không gian, giúp tối ưu hóa tài nguyên đất, nâng cao hiệu quả sử dụng năng lượng và tạo ra lợi ích kinh tế bền vững.
//         </p>
//       </div>
//     </>

//   );
// };


// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import '../styles/IntroSection.scss';

// export default function IntroSection() {
//   const titleRef = useRef(null);
//   const isTitleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.3 });

//   const textRef = useRef(null);
//   const isTextInView = useInView(textRef, { triggerOnce: true, threshold: 0.3 });

//   const text = "Agri-Solar là mô hình kết hợp nông nghiệp và sản xuất điện mặt trời trên cùng một không gian, giúp tối ưu hóa tài nguyên đất, nâng cao hiệu quả sử dụng năng lượng và tạo ra lợi ích kinh tế bền vững.";

//   return (
//     <div className="intro-section">
//       {/* Title xuất hiện từ góc dưới phải */}
//       <motion.div
//         className="intro-title"
//         ref={titleRef}
//         initial={{ x: 150, y: 150, opacity: 0 }}
//         animate={isTitleInView ? {
//           x: 0,
//           y: 0,
//           opacity: 1,
//           transition: { duration: 1, ease: "easeOut" }
//         } : {}}
//       >
//         <h2 className="agri-text">Agri-Solar</h2>
//         <h2 className="what-text">là gì?</h2>
//       </motion.div>

//       {/* Hiệu ứng đánh chữ sau khi title hiện xong */}
//       <div className="typed-text" ref={textRef}>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isTextInView ? { opacity: 1 } : {}}
//           transition={{ delay: 1.2, duration: 0.3 }}
//         >
//           {text.split("").map((char, index) => (
//             <motion.span
//               key={index}
//               initial={{ opacity: 0 }}
//               animate={isTextInView ? { opacity: 1 } : {}}
//               transition={{ delay: 1.3 + index * 0.02, duration: 0.2 }}
//               style={{ display: "inline-block" }}
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }


