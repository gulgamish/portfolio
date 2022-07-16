import { motion } from "framer-motion"
import { shouldForwardProp, chakra } from "@chakra-ui/react"

const CustomDiv = chakra(motion.div, {
    shouldForwardProp: props => (
        shouldForwardProp(props) || props === "transition"
    )
})

const Section = ({ children, delay = 0 }) => (
    <CustomDiv
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .7, delay }}
        mb={8}
    >
        {children}
    </CustomDiv>
)

export default Section;