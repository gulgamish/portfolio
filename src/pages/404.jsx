import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Container,
    Divider,
    Heading,
    Text
} from "@chakra-ui/react"
import Wrapper from "../components/layouts/Wrapper";
import { useBreakpointValue } from "@chakra-ui/react";
import AnimateButton from "../components/animate-404-button";
import { Link } from "react-router-dom";

const Page404 = () => {
    const orientation = useBreakpointValue(["horizontal", "horizontal", "vertical"]);

    return (
        <Wrapper>
            <Container maxW="container.lg" h="80vh" display="flex" alignItems="center">
                <Box
                    display="flex"
                    flexDirection={["column", "column", "row"]}
                    justifyContent="center"
                    alignItems={["center", "center", "normal"]}
                    gap={8}
                    w="100%"
                >
                    <Box lineHeight="10">
                        <Heading as="h1" >
                            Page Not Found
                        </Heading>
                        <Text fontSize={16}>
                            The Page you're looking for was not found.
                        </Text>
                    </Box>
                    <Box w={orientation === "horizontal" ? "50%" : 0}>
                        <Divider orientation={orientation} />
                    </Box>
                    <Box>
                        <AnimateButton direction="left">
                            <Button my={6} borderRadius={8} leftIcon={<ChevronLeftIcon />} colorScheme="teal">
                                <Link to="/">
                                    Return To Home
                                </Link>
                            </Button>
                        </AnimateButton>
                    </Box>
                </Box>
            </Container>
        </Wrapper>
    )
}

export default Page404;