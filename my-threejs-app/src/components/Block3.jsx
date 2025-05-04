import React, { useEffect, useRef, useState } from 'react';
import '../styles/Block3.scss';

import lightImage from '../assets/images/light.png';
import background2 from '../assets/images/back2.png';
import waterImage from '../assets/images/water.png';
import dragonImage from '../assets/images/dragon.png';

const Block3 = () => {
  const [showBlocks, setShowBlocks] = useState(false);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      setShowBlocks(true);
    }, 500);
  }, []);


  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
        } else {
          entry.target.classList.remove('animate-active');
        }
      });
    }, observerOptions);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      cardRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (

    <div className="block3-container">
      {/* title */}
      <div className="block3-header">
        <h1>Thách thức trong canh tác</h1>
        <h2 ref={titleRef} className="animate-on-scroll">
          <span className="white-text">thanh long  </span>
          <span className="highlight-text">TRUYỀN THỐNG</span>
        </h2>
      </div>

      {showBlocks && (
        <div className="card-row">
          {[lightImage, waterImage, dragonImage].map((img, idx) => (
            <div
              className={`card animate-up ${idx === 1 ? 'green-top-card' : ''
                } animate-on-scroll`}
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
            >
              <div className="card-top">
                <img src={img} alt="Card Icon" />
              </div>
              <div className="card-bottom">
                <p className="short-text">
                  {[
                    'Chi phí điện năng lớn cho đèn chiếu sáng',
                    'Nguồn nước tưới không ổn định trong mùa khô',
                    'Thanh long dễ hư hỏng, khó bảo quản',
                  ][idx]}
                </p>
                <p className="long-text">
                  {[
                    'Để kích thích cây thanh long ra hoa, người nông dân phải sử dụng hệ thống đèn chiếu sáng nhân tạo, đặc biệt vào ban đêm. Điều này khiến lượng tiêu thụ điện tăng cao, làm tăng chi phí sản xuất và gây áp lực tài chính lớn, đặc biệt trong thời điểm giá điện biến động.',
                    'Thanh long là loại cây chịu hạn khá tốt, nhưng để đạt năng suất cao vẫn cần lượng nước tưới ổn định. Trong mùa khô, nhiều khu vực gặp khó khăn trong việc cung cấp nước tưới, dẫn đến cây phát triển kém, ảnh hưởng đến chất lượng và sản lượng thu hoạch.',
                    'Sau thu hoạch, thanh long có thời gian bảo quản ngắn, dễ bị hư hỏng nếu không được xử lý đúng cách. Việc thiếu các phương pháp bảo quản hiệu quả dẫn đến hao hụt sản phẩm, gây tổn thất cho người nông dân.',
                  ][idx]}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Block3;