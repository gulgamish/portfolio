import {
    useColorMode,
    useColorModeValue,
    IconButton
} from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <AnimatePresence
            exitBeforeEnter
            initial={false}
        >
            <motion.div
                style={{ display: "inline-block" }}
                key={useColorModeValue("light", "dark")}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    aria-label="theme toggle"
                    colorScheme={useColorModeValue("purple", "orange")}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                />
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton;