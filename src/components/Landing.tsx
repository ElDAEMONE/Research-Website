import { Link } from "react-scroll";
import { motion } from "framer-motion";
import backImage from "../assets/logohealthyTics.svg";

const Landing: React.FC = () => {
    return (
        <div id="land" className="relative w-full h-screen overflow-hidden">
            <motion.div
                initial={{ opacity: 0, rotate: 0, scale: 8 }}
                animate={{ opacity: 1, rotate: 360, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 flex justify-center items-center"
            >
                <img
                    src={backImage as string}
                    alt="Background"
                    className="w-[100%] md:w-[30%] h-auto object-cover pointer-events-none"
                />
            </motion.div>
            <motion.div
                className="text-center font-lato absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-[55%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
            >
                <motion.h1
                    className="font-bold xl:text-7xl text-2xl md:text-3xl hover:cursor-crosshair uppercase flex justify-center"
                    style={{ letterSpacing: "0.05em" }}
                >
                    {"Healthy Tics".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            animate={{
                                color: [
                                    "#ffffff", // white
                                    "#f59e42", // orange
                                    "#a259f7", // purple
                                ],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 2,
                                delay: i * 0.5,
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h1>
                <p className="text-gray-500 font-semibold xl:text-2xl text-sm my-4 hover:cursor-crosshair uppercase">
                    Predict cardiovascular risks and take charge of your health with Healthy Tics.
                </p>
                <div className="header-btns">
                    <Link
                        to="home"
                        className="header-btn bg-transparent border text-white rounded-lg px-6 py-2 font-semibold transition-colors duration-300 hover:bg-gradient-to-l hover:shadow-lg hover:cursor-pointer hover:border-1"
                        smooth={true}
                        duration={1000}
                    >
                        Learn More
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Landing;