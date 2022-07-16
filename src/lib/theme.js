import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode("#FFFFFF", '#1A202C')(props)
        }
    })
}

const components = {
    Link: {
        baseStyle: props => ({
            color: mode('#000000', '#FFFFFF')(props)
        })
    },
    Heading: {
        variants: {
            "headline-text": {
                textDecoration: "underline",
                textUnderlineOffset: 14,
                textDecorationThickness: 3,
                marginBottom: 6,
                fontSize: 23
            }
        }
    },
}

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
}

export default extendTheme({
    config,
    styles,
    components,
})