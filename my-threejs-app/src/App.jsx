import { useState, useRef, useEffect } from 'react'
import { motion } from "framer-motion";
import './App.css'
import ThreeDModel from './components/ThreeDModel'
import Canvas3D from './components/Canvas3D'
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import First from './components/First';
import Block11 from './components/Block11';

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

  useEffect(() => {
    const container = containerRef.current;

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      pin: true,
      scrub: 1,
    });

    container.addEventListener("scroll", () => {
      const { scrollTop, scrollHeight, clientHeight } = container;

      // Khi cuộn đến cuối phần ThreeDModel → Quay lại đầu ngay lập tức
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        gsap.to(container, {
          scrollTo: { y: 1 },
          duration: 0,
        });
      }
    });

    return () => {
      container.removeEventListener("scroll", () => { });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        overflowY: "scroll",
        height: "100vh",
        scrollbarWidth: "none",
      }}
    >
      {/* Canvas3D đầu tiên */}
      <div className="section" >
        <First />
      </div>

      <div className="section" >
        <Canvas3D />
      </div>
      {/* ThreeDModel */}
      <div className="section">
        <ThreeDModel />
      </div>
      {/* <div className="section">
        <Block11 />
      </div> */}
      <div className="section" >
        <First />
      </div>
    </div>
  );
}

const sectionStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default App;








