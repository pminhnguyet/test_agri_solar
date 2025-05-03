import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Block5.scss';

import background51 from '../assets/images/back51.png';
import background52 from '../assets/images/bg_5.png';

const Block5 = () => {
    const { ref, inView } = useInView({
        threshold: 0.3
        // triggerOnce: true
    });

    return (
        <div className="block5-container" ref={ref}>
            {/* <img src={background51} alt="Background 51" className="background-layer back51" /> */}
            <img src={background52} alt="Background 52" className="background-layer back52" />

            <div className="block5-content">
                
                <h2 className={`animated-text ${inView ? 'animate' : ''}`}>
                    {"Trải nghiệm quá trình trồng cây Thanh long cùng AGRI - SOLAR".split(" ").map((word, index) => (
                        <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                            {word}&nbsp;
                        </span>
                    ))}
                </h2>
            </div>
        </div>
    );
};

export default Block5;