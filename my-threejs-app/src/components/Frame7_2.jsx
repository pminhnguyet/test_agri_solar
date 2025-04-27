import "../styles/Frame7_2.scss"

// export default function Frame7_2() {
//     return (
//         <>
//             <div className="frame7_2">
//                 <div className="frame7_2_title">
//                     <h2 className="frame7_2_title_first">
//                         <span className="frame7_2_title_first_1">Agri-solar: </span>
//                         <span className="frame7_2_title_first_2">Gieo điều kiện, đón mùa hoa</span>
//                     </h2>
//                 </div>
//                 <div className="frame7_2_description">
//                     <div className="frame7_2_description_first">
//                         <p>Mùa hoa trọn vẹn đến từ những điều kiện hoàn hảo. Agri-Solar là bí quyết giúp cây ra hoa đúng lúc nhờ tận dụng năng lượng mặt trời để tưới tiêu, chiếu sáng và tạo điều kiện lý tưởng. </p>
//                     </div>
//                     <div className="frame7_2_description_second">
//                         <p>Khám phá ngay hệ thống Agri-Solar - bí quyết cho mùa hoa rực rỡ!</p>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// }


import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import "../styles/Frame7_2.scss";

export default function Frame7_2() {
    const titleRef = useRef(null);
    const descRef = useRef(null);

    const isTitleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.3 });
    const isDescInView = useInView(descRef, { triggerOnce: true, threshold: 0.3 });

    return (
        <div className="frame7_2">
            {/* Title */}
            <motion.div
                className="frame7_2_title"
                ref={titleRef}
                initial={{ opacity: 0 }}
                animate={isTitleInView ? { opacity: 1, transition: { duration: 1 } } : {}}
            >
                <h2 className="frame7_2_title_first">
                    <motion.span
                        className="frame7_2_title_first_1"
                        initial={{ opacity: 0, x: -100 }}
                        animate={isTitleInView ? {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1, delay: 0.2, ease: "easeOut" }
                        } : {}}
                    >
                        Agri-solar:{" "}
                    </motion.span>
                    <motion.span
                        className="frame7_2_title_first_2"
                        initial={{ opacity: 0, x: 100 }}
                        animate={isTitleInView ? {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1, delay: 0.5, ease: "easeOut" }
                        } : {}}
                    >
                        Gieo điều kiện, đón mùa hoa
                    </motion.span>
                </h2>
            </motion.div>

            {/* Description */}
            <motion.div
                className="frame7_2_description"
                ref={descRef}
                initial={{ opacity: 0 }}
                animate={isDescInView ? { opacity: 1, transition: { duration: 1 } } : {}}
            >
                <motion.div
                    className="frame7_2_description_first"
                    initial={{ y: 50, opacity: 0 }}
                    animate={isDescInView ? { y: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } } : {}}
                >
                    <p>
                        Mùa hoa trọn vẹn đến từ những điều kiện hoàn hảo. Agri-Solar là bí quyết giúp cây ra hoa đúng lúc nhờ tận dụng năng lượng mặt trời để tưới tiêu, chiếu sáng và tạo điều kiện lý tưởng.
                    </p>
                </motion.div>

                <motion.div
                    className="frame7_2_description_second"
                    initial={{ y: 50, opacity: 0 }}
                    animate={isDescInView ? { y: 0, opacity: 1, transition: { duration: 1, delay: 0.6 } } : {}}
                >
                    <p>
                        Khám phá ngay hệ thống Agri-Solar - bí quyết cho mùa hoa rực rỡ!
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
