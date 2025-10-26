import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

const springConfig = { damping: 20, stiffness: 80 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        const grow = () => cursorRef.current.style.transform = "scale(2)";
        const shrink = () => cursorRef.current.style.transform = "scale(1)";
        document.querySelectorAll("a, button").forEach(el => {
            el.addEventListener("mouseenter", grow);
            el.addEventListener("mouseleave", shrink);
        });
        return () => {
            document.querySelectorAll("a, button").forEach(el => {
                el.removeEventListener("mouseenter", grow);
                el.removeEventListener("mouseleave", shrink);
            });
        };
    }, []);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 10); // adjust offset for circle center
            cursorY.set(e.clientY - 10);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <motion.div
            ref={cursorRef}
            className="custom-cursor"
            style={{
                translateX: x,
                translateY: y,
            }}
        />
    );
};

export default CustomCursor;
