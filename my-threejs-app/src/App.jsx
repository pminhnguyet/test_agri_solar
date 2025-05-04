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
import { preloadAllModels } from './utils/preloadModels';
import { useProgress } from '@react-three/drei';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  // const { progress } = useProgress(); // giá trị từ 0 đến 100
  const [progress, setProgress] = useState(0);



  // useEffect(() => {
  //   const container = containerRef.current;

  //   // Danh sách các block có hiệu ứng scale & opacity
  //   const fadingBlocks = [".frame7_2", ".block9_1", ".block9_2"];

  //   // Tạo ScrollTrigger cho từng block
  //   fadingBlocks.forEach((selector) => {
  //     ScrollTrigger.create({
  //       trigger: selector,
  //       start: "top top",
  //       end: "+=100%",
  //       pin: true,
  //       scrub: true,
  //       scroller: container,
  //       anticipatePin: 1,
  //       onUpdate: (self) => {
  //         const progress = self.progress;
  //         gsap.to(selector, {
  //           scale: 1 - progress * 0.1,
  //           opacity: 1 - progress * 1.2,
  //           ease: "none",
  //           overwrite: true,
  //           duration: 0.1,
  //         });
  //       },
  //     });
  //   });

  //   // Hiệu ứng xuất hiện mượt cho mỗi block
  //   const appearBlocks = [".block9_1", ".block9_2", ".block9_3"];
  //   appearBlocks.forEach((selector) => {
  //     gsap.fromTo(
  //       selector,
  //       { opacity: 0, scale: 0.95 },
  //       {
  //         opacity: 1,
  //         scale: 1,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: selector,
  //           start: "top bottom",
  //           end: "top top",
  //           scrub: true,
  //           scroller: container,
  //         },
  //       }
  //     );
  //   });

  //   // Cuộn vòng nếu muốn
  //   container.addEventListener("scroll", () => {
  //     const { scrollTop, scrollHeight, clientHeight } = container;
  //     if (scrollTop + clientHeight >= scrollHeight - 10) {
  //       gsap.to(container, {
  //         scrollTo: { y: 1 },
  //         duration: 0,
  //       });
  //     }
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  //   };
  // }, []);



  // useEffect(() => {
  //   preloadAllModels().then(() => {
  //     setIsLoading(false); // Update isLoading to false when all models are loaded
  //   }).catch((error) => {
  //     console.error("Error preloading models:", error);
  //     setIsLoading(false); // Set loading to false even if there's an error
  //   });
  // }, []);

  useEffect(() => {
    preloadAllModels((percent) => {
      setProgress(percent);
    })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error preloading models:", error);
        setIsLoading(false);
      });
  }, []);
  

  useEffect(() => {
    if (!isLoading) {
      const container = containerRef.current;

      if (container) {
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
          container.removeEventListener("scroll", () => { });
        };
      }
    }
  }, [isLoading]);



  // if (isLoading) {
  //   // Hiển thị màn hình loading khi đang tải mô hình
  //   return (
  //     <div className="loading-screen">
  //       <div className="loading-spinner">
  //         <div className="spinner"></div>
  //         <p>Loading Models...</p>
  //       </div>
  //     </div>
  //   );
  // }



  // if (isLoading) {
  //   return (
  //     <div className="loading-screen">
  //       <div className="loading-container">
  //         <div className="loading-text">Loading Models...</div>
  //         <div className="progress-bar">
  //           <div
  //             className="progress-fill"
  //             style={{ width: `${progress}%` }}
  //           ></div>
  //         </div>
  //         <div className="progress-percent">{Math.floor(progress)}%</div>
  //       </div>
  //     </div>
  //   );
  // }


if (isLoading) {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-text">Loading...</div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-percent">{progress}%</div>
      </div>
    </div>
  );
}







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

      <div className="section" >
        <First />
      </div>
      <div className="section" >
        <IntroSection />
      </div>
      <div className="section" >
        <Block3 />
      </div>
      <div className="section" >
        <Block4 />
      </div>
      <div className="section" >
        <Block5 />
      </div>


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
