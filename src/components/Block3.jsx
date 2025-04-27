import React, { useEffect, useState } from 'react';
import '../assets/styles/Block3.scss';

import lightImage from '../assets/images/light.png';
import background2 from '../assets/images/back2.png';
import waterImage from '../assets/images/water.png';
import dragonImage from '../assets/images/dragon.png';

const Block3 = () => {
  const [showBlocks, setShowBlocks] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBlocks(true);
    }, 500); 
  }, []);

  return (
    <div
      className="block3-container"
      style={{ backgroundImage: `url(${background2})` }}
    >
      {/* title */}
      <div className="block3-header">
        <h1>Thách thức canh tác</h1>
        <h2>
          <span className="white-text">thanh long </span>
          <span className="highlight-text">TRUYỀN THỐNG</span>
        </h2>
      </div>

      {showBlocks && (
        <div className="card-row">
          {[1].map((_, idx) => (
            <div className="card animate-up" key={idx}>
              <div className="card-top">
                <img src={lightImage} alt="Light" />
              </div>
              <div className="card-bottom">
                <p className="short-text">
                  Chi phí điện năng lớn cho đèn chiếu sáng
                </p>
                <p className="long-text">
                  Để kích thích cây thanh long ra hoa, người nông dân phải sử dụng hệ thống đèn chiếu sáng nhân tạo, đặc biệt vào ban đêm. Điều này khiến lượng tiêu thụ điện tăng cao, làm tăng chi phí sản xuất và gây áp lực tài chính lớn, đặc biệt trong thời điểm giá điện biến động.
                </p>
              </div>
            </div>
          ))}
          {[2].map((_, idx) => (
            <div className="card animate-up" key={idx}>
              <div className="card-top">
                <img src={waterImage} alt="Water" />
              </div>
              <div className="card-bottom">
                <p className="short-text">
                  Nguồn nước tưới không ổn định trong mùa khô
                </p>
                <p className="long-text">
                Thanh long là loại cây chịu hạn khá tốt, nhưng để đạt năng suất cao vẫn cần lượng nước tưới ổn định. Trong mùa khô, nhiều khu vực gặp khó khăn trong việc cung cấp nước tưới, dẫn đến cây phát triển kém, ảnh hưởng đến chất lượng và sản lượng thu hoạch.
                </p>
              </div>
            </div>
          ))}
          {[3].map((_, idx) => (
            <div className="card animate-up" key={idx}>
              <div className="card-top">
                <img src={dragonImage} alt="Dragon" />
              </div>
              <div className="card-bottom">
                <p className="short-text">
                  Thanh long dễ hư hỏng, khó bảo quản
                </p>
                <p className="long-text">
                  Sau thu hoạch, thanh long có thời gian bảo quản ngắn, dễ bị hư hỏng nếu không được xử lý đúng cách. Việc thiếu các phương pháp bảo quản hiệu quả dẫn đến hao hụt sản phẩm, gây tổn thất cho người nông dân.
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
