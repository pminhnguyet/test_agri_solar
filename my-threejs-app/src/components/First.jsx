import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "../styles/First.scss";

const First = () => {
    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.05 });

    const textRef = useRef(null);
    const isTextInView = useInView(textRef, { triggerOnce: true, threshold: 0.05 });

    // console.log("isTitleInView:", isTitleInView);
    // console.log("isTextInView:", isTextInView);

    return (
        <section className="first-section">
            <div className="first-title-container" ref={titleRef}>
                <motion.h2
                    className="first-title"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={isTitleInView ? { y: "0%", opacity: 1 } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    Khám phá Agri-Solar:<br />
                    Giải pháp bền vững cho canh tác thanh long
                </motion.h2>
            </div>

            <div className="first-description-container" ref={textRef}>
                <motion.p
                    className="first-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                >
                    Mô hình Agri-Solar giúp tiết kiệm tài nguyên, giảm tác động môi trường và tăng năng suất trồng thanh long.
                </motion.p>
            </div>
        </section>
    );
};

export default First;
