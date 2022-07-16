import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";

const CustomButton = chakra(motion.div, {
    shouldForwardProp: props => shouldForwardProp(props) || props === "transition"
})

const AnimateButton = ({ children, direction, ...props }) => (
    <CustomButton
        initial={{ x: direction === "left" ? -10 : 10, opacity: .5 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ repeat: Infinity, duration: .8, repeatType: "reverse" }}
        {...props}
    >
        {children}
    </CustomButton>
)

export default AnimateButton;