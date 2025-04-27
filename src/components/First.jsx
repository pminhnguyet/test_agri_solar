// import React, { useEffect, useState } from 'react';
// import './First.scss';

// import logo from '../assets/logo.png';
// import fruitImage from '../assets/fruit.png';
// import backgroundImage from '../assets/back1.png';

// const First = () => {
//   const [opened25, setOpened25] = useState(false);
//   const [showCreative, setShowCreative] = useState(false);
//   const [opened50, setOpened50] = useState(false);
//   const [showFriendly, setShowFriendly] = useState(false);
//   const [opened100, setOpened100] = useState(false);
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setOpened25(true);
//     }, 500);

//     setTimeout(() => {
//       setShowCreative(true);
//     }, 1200);

//     setTimeout(() => {
//       setShowCreative(false);
//       setOpened50(true);
//     }, 3000);

//     setTimeout(() => {
//       setShowFriendly(true);
//     }, 3500);

//     setTimeout(() => {
//       setShowFriendly(false);
//       setOpened100(true);
//     }, 5000);

//     setTimeout(() => {
//       setShowContent(true);
//     }, 6000);
//   }, []);

//   return (
//     <div
//       className={`first-container 
//         ${opened25 ? 'opened-25' : ''} 
//         ${opened50 ? 'opened-50' : ''} 
//         ${opened100 ? 'opened-100' : ''} 
//         ${showCreative ? 'show-creative' : ''} 
//         ${showFriendly ? 'show-friendly' : ''} 
//         ${showContent ? 'show-content' : ''}`}
//     >
//       {/* Pannels */}
//       <div className="panel left-panel"></div>
//       <div className="panel right-panel"></div>

//       {/* Text layer */}
//       <div className="title-text creative">CREATIVE</div>
//       <div className="title-text friendly">FRIENDLY</div>

//       {/* Background Image */}
//       <div
//         className="background-block"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       ></div>

//       {/* Header + Description */}
//       {showContent && (
//         <div className="content visible">
//           <div className="header">
//             <img className="logo" src={logo} alt="Logo" />
//             <div className="menu-icon">
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </div>

//           <div  className="description">
//             <div className="text show-text">
//               <h2 className="headline">Khám phá</h2>
//               <h1 className="subheadline">Agri-Solar</h1>
//               <p className="paragraph">
//                 Mô hình Agri-Solar giúp tiết kiệm tài nguyên, giảm tác động môi trường và tăng năng suất trồng thanh long
//               </p>
//               <button className="detail-button">Xem chi tiết</button>
//             </div>

//             <div className="image show-image">
//               <img src={fruitImage} alt="Thanh long" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default First;

import React, { useEffect, useState } from 'react';
import '../assets/styles/First.scss';

import logo from '../assets/images/logo.png';
import fruitImage from '../assets/images/fruit.png';
import backgroundImage from '../assets/images/back1.png';

const First = () => {
  const [opened, setOpened] = useState(false);
  const [showCreative, setShowCreative] = useState(false);
  const [showFriendly, setShowFriendly] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpened(true); // Mở panel sau 0.5s
    }, 500);

    setTimeout(() => {
      setShowCreative(true); // Hiển thị 'CREATIVE' sau 1s
    }, 1000);

    setTimeout(() => {
      setShowCreative(false);
      setShowFriendly(true); // Hiển thị 'FRIENDLY' sau 2.5s
    }, 2500);

    setTimeout(() => {
      setShowFriendly(false);
      setShowContent(true); // Hiển thị nội dung sau 4s
    }, 4000);
  }, []);

  return (
    <div
      className={`first-container 
        ${opened ? 'opened' : ''} 
        ${showCreative ? 'show-creative' : ''} 
        ${showFriendly ? 'show-friendly' : ''} 
        ${showContent ? 'show-content' : ''}`}
    >
      {/* Panels */}
      <div className="panel left-panel"></div>
      <div className="panel right-panel"></div>

      {/* Text overlay */}
      <div className="title-text creative">CREATIVE</div>
      <div className="title-text friendly">FRIENDLY</div>

      {/* Background */}
      <div
        className="background-block"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Header + Description */}
      {showContent && (
        <div className="content visible">
          <div className="header">
            <img className="logo" src={logo} alt="Logo" />
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="description">
            <div className="text show-text">
              <h2 className="headline">Khám phá</h2>
              <h1 className="subheadline">Agri-Solar</h1>
              <p className="paragraph">
                Mô hình Agri-Solar giúp tiết kiệm tài nguyên, giảm tác động môi trường và tăng năng suất trồng thanh long
              </p>
              <button className="detail-button">Xem chi tiết</button>
            </div>

            <div className="image show-image">
              <img src={fruitImage} alt="Thanh long" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default First;
