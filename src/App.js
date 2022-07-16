import { ChakraProvider } from "@chakra-ui/react"
import Layout from "./components/layouts/main";
import Home from "./pages/Home"
import Projects from "./pages/Projects";
import Page404 from "./pages/404";
import { Routes, Route } from "react-router-dom"
import theme from "./lib/theme";
import { AnimatePresence } from "framer-motion";

const App = () => {


    return (
        <ChakraProvider theme={theme}>
            <Layout>
            <AnimatePresence exitBeforeEnter initial={true}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default App;