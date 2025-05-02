import { useState, useRef, useEffect } from 'react'
import { motion } from "framer-motion";
import './App.css'
import ThreeDModel from './components/ThreeDModel'
import Canvas3D from './components/Canvas3D'
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import First from './components/First';
import Block11 from './components/Block11';
import Frame7_1 from './components/Frame7_1';
import Frame7_2 from './components/Frame7_2';
import Block10 from './components/Block10';
import Frame51 from './components/Frame51';
import Frame61 from './components/Frame61';
import Block3 from './components/Block3';
import Block4 from './components/Block4';
import Block5 from './components/Block5';
import Block9_1 from './components/Block9_1';
import IntroSection from './components/Introsection';
import Block9_2 from './components/Block9_2';
import Block9_3 from './components/Block9_3';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div style={{ width: "50vw", height: "100vh" }}>
//         <Canvas3D />
//         <ThreeDModel />
//       </div>

//     </>
//   )
// }

// export default App


// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// function App() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null); // Giữ nguyên Canvas3D khi cuộn vòng

//   useEffect(() => {
//     const container = containerRef.current;

//     ScrollTrigger.create({
//       trigger: container,
//       start: "top top",
//       end: "bottom bottom",
//       pin: true,
//       scrub: 1,
//     });

//     container.addEventListener("scroll", () => {
//       const { scrollTop, scrollHeight, clientHeight } = container;

//       // Khi cuộn đến hết ThreeDModel → Quay lại đầu ngay lập tức
//       if (scrollTop + clientHeight >= scrollHeight - 10) {
//         gsap.to(container, {
//           scrollTo: { y: 1 }, // Dịch chuyển ngay lên đầu
//           duration: 0,
//         });
//       }
//     });

//     return () => {
//       container.removeEventListener("scroll", () => { });
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         overflowY: "scroll",
//         height: "100vh",
//         scrollbarWidth: "none",
//       }}
//     >
//       {/* Canvas3D (Gốc) */}
//       <div className="section" style={sectionStyle} ref={canvasRef}>
//         <Canvas3D />
//       </div>

//       {/* ThreeDModel */}
//       <div className="section" style={sectionStyle}>
//         <ThreeDModel />
//       </div>

//       {/* Canvas3D (Bản sao) */}
//       <div className="section" style={{ ...sectionStyle, position: "absolute", top: "200vh", width: "100%" }}>
//         {canvasRef.current} {/* Render lại Canvas3D từ ref */}
//       </div>
//     </div>
//   );
// }

// const sectionStyle = {
//   width: "100%",
//   height: "100vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// export default App;




gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const container = containerRef.current;

  //   ScrollTrigger.create({
  //     trigger: container,
  //     start: "top top",
  //     end: "bottom bottom",
  //     pin: true,
  //     scrub: 1,
  //   });

  //   container.addEventListener("scroll", () => {
  //     const { scrollTop, scrollHeight, clientHeight } = container;

  //     // Khi cuộn đến cuối phần ThreeDModel → Quay lại đầu ngay lập tức
  //     if (scrollTop + clientHeight >= scrollHeight - 10) {
  //       gsap.to(container, {
  //         scrollTo: { y: 1 },
  //         duration: 0,
  //       });
  //     }
  //   });

  //   return () => {
  //     container.removeEventListener("scroll", () => { });
  //   };
  // }, []);




  //Đang dùng oke
  // useEffect(() => {
  //   const container = containerRef.current;

  //   // Khởi tạo ScrollTrigger
  //   ScrollTrigger.create({
  //     trigger: container,
  //     start: "top top",
  //     end: "bottom bottom",
  //     pin: true,
  //     scrub: 1,
  //   });

  //   // Gửi scroll lên đầu khi cuộn đến cuối
  //   container.addEventListener("scroll", () => {
  //     const { scrollTop, scrollHeight, clientHeight } = container;
  //     if (scrollTop + clientHeight >= scrollHeight - 10) {
  //       gsap.to(container, {
  //         scrollTo: { y: 1 },
  //         duration: 0,
  //       });
  //     }
  //   });

  //   // Tạo ScrollTrigger cho từng block
  //   const triggers = [
  //     ScrollTrigger.create(
  //       {
  //         trigger: ".frame7_2",
  //         start: "top top",
  //         // end: "bottom top",
  //         end: "+=100%",
  //         pin: true,
  //         pinSpacing: false,
  //         scrub: true,
  //         scroller: container,
  //         anticipatePin: 1,
  //       }),
  //     ScrollTrigger.create({
  //       trigger: ".block9_1",

  //       start: "top top",
  //       end: "bottom top",

  //       pin: true,
  //       pinSpacing: false,
  //       scrub: true,
  //       scroller: container,
  //     }),
  //     ScrollTrigger.create({
  //       trigger: ".block9_2",
  //       start: "top top",
  //       end: "bottom top",
  //       pin: true,
  //        pinSpacing: false,
  //       scrub: true,
  //       scroller: container,
  //     }),
  //     ScrollTrigger.create({
  //       trigger: ".block9_3",
  //       start: "top top",
  //       end: "bottom top",
  //       pin: true,
  //        pinSpacing: false,
  //       scrub: true,
  //       scroller: container,
  //     }),
  //   ];

  //   // Cleanup triggers khi unmount
  //   return () => {
  //     triggers.forEach(trigger => trigger.kill());
  //   };
  // }, []);



  useEffect(() => {
    const container = containerRef.current;

    // Danh sách các block có hiệu ứng scale & opacity
    const fadingBlocks = [".frame7_2", ".block9_1", ".block9_2"];

    // Tạo ScrollTrigger cho từng block
    fadingBlocks.forEach((selector) => {
      ScrollTrigger.create({
        trigger: selector,
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
        scroller: container,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(selector, {
            scale: 1 - progress * 0.1,
            opacity: 1 - progress * 1.2,
            ease: "none",
            overwrite: true,
            duration: 0.1,
          });
        },
      });
    });

    // Hiệu ứng xuất hiện mượt cho mỗi block
    const appearBlocks = [".block9_1", ".block9_2", ".block9_3"];
    appearBlocks.forEach((selector) => {
      gsap.fromTo(
        selector,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: selector,
            start: "top bottom",
            end: "top top",
            scrub: true,
            scroller: container,
          },
        }
      );
    });

    // Cuộn vòng nếu muốn
    container.addEventListener("scroll", () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        gsap.to(container, {
          scrollTo: { y: 1 },
          duration: 0,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  return (
    <div
      ref={containerRef}
      style={{
        overflowY: "scroll",
        height: "100vh",
        position: "relative",
        scrollbarWidth: "none",
      }}
    >
      {/* Canvas3D đầu tiên */}
      <div className="section" >
        <First />
      </div>
      {/* <div className="section" >
        <IntroSection />
      </div> */}
      {/* <div className="section" >
        <Block3 />
      </div> */}
      {/* <div className="section" >
        <Block4 />
      </div> */}
      {/* <div className="section" >
        <Block5 />
      </div> */}


      {/* <div className="section" >
        <Canvas3D />
      </div> */}
      {/* ThreeDModel */}
      {/* <div className="section">
        <ThreeDModel />
      </div> */}



      <div className="section">
        <Frame51 />
      </div>
      <div className="section">
        <Frame61 />
      </div>
      <div className="section">
        <Frame7_1 />
      </div>
      <div className="section frame7_2">
        <Frame7_2 />
      </div>

      <div className="section block9_1" >
        <Block9_1 />
      </div>
      <div className="section block9_2" >
        <Block9_2 />
      </div>
      <div className="section block9_3" >
        <Block9_3 />
      </div>


      {/* <div className="section frame9_wrapper">
        <Frame7_2 />
        <Block9_1 />
      </div> */}
      <div className="section block10">
        <Block10 />
      </div>
      <div className="section block11">
        <Block11 />
      </div>
      <div className="section" >
        <First />
      </div>
    </div>
  );
}

// const sectionStyle = {
//   width: "100%",
//   // height: "100vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

export default App;








