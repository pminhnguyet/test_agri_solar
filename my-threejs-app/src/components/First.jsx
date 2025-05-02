// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import "../styles/First.scss";

// const First = () => {
//     const titleRef = useRef(null);
//     const isTitleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.05 });

//     const textRef = useRef(null);
//     const isTextInView = useInView(textRef, { triggerOnce: true, threshold: 0.05 });

//     // console.log("isTitleInView:", isTitleInView);
//     // console.log("isTextInView:", isTextInView);

//     return (
//         <section className="first-section">
//             <div className="first-title-container" ref={titleRef}>
//                 <motion.h2
//                     className="first-title"
//                     initial={{ y: "100%", opacity: 0 }}
//                     animate={isTitleInView ? { y: "0%", opacity: 1 } : {}}
//                     transition={{ duration: 1.5, ease: "easeOut" }}
//                 >
//                     Khám phá Agri-Solar:<br />
//                     Giải pháp bền vững cho canh tác thanh long
//                 </motion.h2>
//             </div>

//             <div className="first-description-container" ref={textRef}>
//                 <motion.p
//                     className="first-description"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isTextInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
//                 >
//                     Mô hình Agri-Solar giúp tiết kiệm tài nguyên, giảm tác động môi trường và tăng năng suất trồng thanh long.
//                 </motion.p>
//             </div>
//         </section>
//     );
// };

// export default First;


import React, { useEffect, useRef, useState } from 'react';
import '../styles/First.scss';

import logo from '../assets/images/logo.png';
import fruitImage from '../assets/images/fruit.png';
import backgroundImage from '../assets/images/back1.png';

const First = ({ scrollToIntro }) => {
    const containerRef = useRef(null);
    const [inView, setInView] = useState(false);

    const [opened, setOpened] = useState(false);
    const [showCreative, setShowCreative] = useState(false);
    const [showFriendly, setShowFriendly] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            {
                threshold: 0.3, // Tối thiểu 30% block nằm trong viewport
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!inView) return;

        setTimeout(() => setOpened(true), 500);
        setTimeout(() => setShowCreative(true), 1000);

        setTimeout(() => {
            setShowCreative(false);
            setShowFriendly(true);
        }, 2500);

        setTimeout(() => {
            setShowFriendly(false);
            setShowContent(true);
        }, 4000);
    }, [inView]);

    return (
        <div
            ref={containerRef}
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
            // <div className="menu-icon">
            //   <span></span>
            //   <span></span>
            //   <span></span>
            // </div>
                    </div>

                    <div className="description">
                        <div className="text show-text">
                            <h2 className="headline">Khám phá</h2>
                            <h1 className="subheadline">Agri-Solar</h1>
                            <p className="paragraph">
                                Mô hình Agri-Solar giúp tiết kiệm tài nguyên, giảm tác động môi trường và tăng năng suất trồng thanh long
                            </p>
                            {/* <button
                                className="detail-button"
                                onClick={scrollToIntro} // Cuộn xuống khi click
                            >
                                Xem chi tiết
                            </button> */}
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