import React from "react";
import LineGradeint from "../components/LineGradient";
import { motion, scale } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

function Project({ title }) {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey flex flex-col justify-center text-center p-16 text-deep-blue`
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
            </div>
            <img src={`/assets/${projectTitle}.jpg`} alt={projectTitle} />
        </motion.div>
    )
}

function Projects() {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-6xl">
                        MY <span className="text-red">PROJ</span>ECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradeint width="w-1/3" />
                    </div>
                </div>

                <p className="mt-10 mb-10">
                    I've built several web development projects using technologies like JavaScript, React, Tailwind CSS, Git, GitHub, and MySQL. These projects reflect my focus on responsive design, clean UI, and efficient functionality. Each one showcases my ability to turn ideas into real, user-friendly applications while continually learning and improving my skills.
                </p>
            </motion.div>
            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={container}
                >
                    {/* ROW 1 */}

                    <a href="https://github.com/AnKiT-GaRG2/Risk-Management-System"><Project title="Return risk analyzer" /></a>
                    <a href="https://github.com/shrishtimishra3304/WanderLust"><Project title="Wanderlust" /></a>

                    <a href="https://github.com/shrishtimishra3304/game2"><Project title="Dino Game" /></a>
                    <a href="https://github.com/shrishtimishra3304/e-commerce"><Project title="E Commerce" /></a>

                    <a href="https://github.com/shrishtimishra3304/game2"><Project title="Simon Says" /></a>

                    <a href="https://github.com/shrishtimishra3304/APNA-COLEGE-HTML/tree/main/spotifyclone"><Project title="Music website" /></a>


                </motion.div>
            </div>
        </section>
    )
}

export default Projects;