import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/Block4.scss';

import fruitImage from '../assets/images/combine.png';

const Block4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const zoomInMoveLeft = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 0.2,
      scale: 1,
      // x: '-10%',
      x: '0%',
      transition: { duration: 2, ease: 'easeInOut', delay: 0.5 },
    },
  };



  const textFlyInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: 'easeOut', delay: 1.5 },
    },
  };

  return (
    <div className="block4-container" ref={ref}>
      <div className="block4-grid">
        {/* Tiêu đề trên */}
        <motion.div
          className="section section-title-top"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 1 }}
        >
          <div className="title-top">Giải pháp bền vững</div>
        </motion.div>

        {/* Ảnh + đoạn mô tả */}
        <div className="section section-center">
          <div className="content-center">
            <div className="fruit-container">
              <motion.img
                src={fruitImage}
                alt="Thanh long"
                className="fruit-image"
                variants={zoomInMoveLeft}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              />
            </div>

            <motion.div
              className="description"
              variants={textFlyInRight}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              Ứng dụng Agri-Solar vào canh tác thanh long giúp tận dụng tối đa nguồn năng lượng mặt trời, giảm chi phí điện năng từ hệ thống đèn chiếu sáng, tối ưu hóa tưới tiêu và bảo quản sau thu hoạch. Đây không chỉ là bước tiến quan trọng trong việc nâng cao năng suất, mà còn giúp người nông dân chủ động thích ứng với biến đổi khí hậu, hướng đến mô hình canh tác bền vững.          </motion.div>
          </div>
        </div>

        {/* Tiêu đề dưới */}
        <motion.div
          className="section section-title-bottom"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="title-bottom">
            <span className="black-text">CHO CANH TÁC </span>
            <span className="green-text">Thanh Long</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Block4;