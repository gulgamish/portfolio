import { Box, Container } from "@chakra-ui/react"
import Navbar from "../navbar";

const Main = ({ children, routes }) => {


    return (
        <Box as="main" pb={8}>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Portfolio of a Front-end developer" />
            <meta name="author" content="Ayman Elamrani" />
            <title>Ayman Elamrani - portfolio</title>

            <Navbar />
            
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main;