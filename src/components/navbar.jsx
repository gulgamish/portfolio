import {
    Container,
    Box,
    Text,
    Heading,
    Stack,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Link as LinkChakra,
    Button
} from "@chakra-ui/react";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons"
import styled from "@emotion/styled"
import { Link, useLocation } from "react-router-dom"
import ThemeToggleButton from "./theme-toggle-button";

const GlassyBox = styled(Box)`
    backdrop-filter: blur(3.7px);
    -webkit-backdrop-filter: blur(3.7px);
    z-index: 1;
`

const LinkItem = ({ to, children, ...props }) => {
    const { pathname } = useLocation();
    const active = pathname === to;

    return (
        <Box mr={5} bg={active ? "teal" : undefined} p={2}>
            <Heading
                as={LinkChakra}
                fontSize={15}
                color={active ? "white" : undefined}
                {...props}
            >
                <Link to={to}>
                    {children}
                </Link>
            </Heading>
        </Box>
    )
}

const Navbar = () => {
    
    
    return (
        <GlassyBox as="nav" position="fixed" w="100%" p={2}>
            <Container
                display="flex"
                p={2}
                alignItems="center"
                maxW="container.lg"
                justifyContent="space-between"
            >
                <Box mr={4}>
                    <Heading as="h1" size="lg" letterSpacing="tighter">
                        <Text fontFamily="M PLUS Rounded 1c" fontWeight="bold" ml={3}>
                            <Link to="/">
                                Ayman Elamrani
                            </Link>
                        </Text>
                    </Heading>
                </Box>
                <Stack
                    display={{ base: "none", md: "flex" }}
                    direction={{ base: "column", md: "row" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    ml={5}
                >
                    <LinkItem to="/projects">
                        Projects
                    </LinkItem>
                </Stack>
                <Flex flex={1} justifyContent="flex-end">
                    <Link to="/AymanCv.pdf" target="_blank" download>
                        <Button variant="outline" rightIcon={<DownloadIcon />}  mr={3} >
                            CV
                        </Button>
                    </Link>
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: "inline-bloc", md: "none" }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} aria-label="Options" variant="outline" />
                            <MenuList>
                                <MenuItem>
                                    <Link style={{ width: "100%" }} to="/projects" >Projects</Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </Container>
        </GlassyBox>
    )
}

export default Navbar;