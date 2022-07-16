import {
    Container,
    Box,
    Flex,
    useColorModeValue,
    Image,
    Heading,
    Button,
    Link as LinkChakra,
    LinkOverlay,
    List,
    ListItem,
    Icon
} from "@chakra-ui/react"
import ProfilePhoto from "../assets/profile-photo.jpg"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon, DownloadIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import Wrapper from "../components/layouts/Wrapper"
import { BioSection, BioYear } from "../components/bio"
import AnimateButton from "../components/animate-404-button"
import {
    IoLogoLinkedin,
    IoLogoGithub,
    IoLogoFacebook
} from "react-icons/io5"

const Home = () => {


    return (
        <Wrapper>
        <Container mt={8} maxW="container.lg">
            <Box
                borderRadius="lg"
                bg={useColorModeValue("#E8E8E8", "#91919150")}
                border=".5px solid"
                p={3}
                mt={4}
                mb={6}
                textAlign="center"
            >
                Hello, I'm Front-end developer based in Morocco.
            </Box>
            <Box display={{ md: "flex" }} justifyContent="center" alignItems="center" mb={6}>
                <Box lineHeight={9}>
                    <Heading as="h2" fontSize={40}>
                        Ayman Elamrani
                    </Heading>
                    <p>Digital Architect (Developer / Geek / Love Code)</p>
                </Box>
                <Flex justify="center" mt={{ base: 4, md: 0 }} ml={{ base: 0, md: 6 }}>
                    <Image
                        src={ProfilePhoto}
                        flexGrow={1}
                        borderColor="whiteAlpha.200"
                        borderWidth={2}
                        borderStyle="solid"
                        maxW="100px"
                        borderRadius="full"
                    />
                </Flex>
            </Box>
            <Section delay={.4}>
                <Heading as="h3" variant="headline-text">
                    Work
                </Heading>
                <Paragraph>
                    Ayman is a Front-end developer base in Morocco with passion for building digital services, he has a knack for all things,
                    from learning and trying new languages All to way to solving real-life problems with code. when not online, he loves hanging
                    out with his friend and colleagues, and he enjoy camping and traveling.
                </Paragraph>
                <Flex justify="center" my={6}>
                    <AnimateButton direction="right">
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        <Link to="/projects">
                            My portfolio
                        </Link>
                    </Button>
                    </AnimateButton>
                </Flex>
            </Section>
            <Section delay={.3}>
                <Heading as="h3" variant="headline-text">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1997</BioYear> Born in Kalaa des sraghna, 100km away from Marrakech, Morocco.
                </BioSection>
                <BioSection>
                    <BioYear>2014</BioYear> Got my bacalaureat at Tamellalt Hight School.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear> Graduated from 1337 school of computer science as a Digital Architect.
                </BioSection>
                <BioSection>
                    <BioYear>2021 - present</BioYear> Works full-time job as a front-end engineer.
                </BioSection>
            </Section>
            <Section delay={.2}>
                <Heading as="h3" variant="headline-text">
                    I &#x2764;
                </Heading>
                <Paragraph>
                    Art, <LinkChakra color={useColorModeValue("#356efc", "#abc4ff")} href="https://www.youtube.com/watch?v=Qrt18AtgQrY" target="_blank">Music</LinkChakra>,
                    Piano, Keyboards, Traveling, Camping.
                </Paragraph>
            </Section>
            <Section delay={.3}>
                <Heading as="h3" variant="headline-text">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <LinkChakra href="https://www.linkedin.com/in/ayman-elamrani-837a14160/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                @aymanelamrani
                            </Button>
                        </LinkChakra>
                    </ListItem>
                    <ListItem>
                        <LinkChakra href="https://github.com/gulgamish" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                @Gulgamish
                            </Button>
                        </LinkChakra>
                    </ListItem>
                    <ListItem>
                        <LinkChakra href="https://www.facebook.com/elamrani.ayman.5/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoFacebook} />}>
                                @Ayman
                            </Button>
                        </LinkChakra>
                    </ListItem>
                </List>
            </Section>
        </Container>
        </Wrapper>
    )
}

export default Home;