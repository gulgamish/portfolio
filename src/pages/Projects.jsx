import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react"
import { GridItem, ProjectGridItem } from "../components/grid-item"
import Section from "../components/section"
import Wrapper from "../components/layouts/Wrapper"

import corewarThumbNail from "../../src/assets/corewar.png"
import matchaThumbNail from "../../src/assets/matcha.png"
import otalentThumbnail from "../../src/assets/otalent.png"
import minishellThumbnail from "../../src/assets/minishell.gif"

const Projects = () => {


    return (
        <Wrapper>
            <Container mt={10} maxW="container.lg">
                <Heading as="h3" fontSize={27} variant="headline-text">
                    Projects
                </Heading>
                <SimpleGrid gap={6} columns={[1, 1, 2]}>
                    <Section delay={.4}>
                        <GridItem title="O-Talent" href="" thumbnail={otalentThumbnail}>
                            The goal of the project is the Digitalization of the OCP Human Resources
                            Management and it consisted of multiple Modules
                        </GridItem>
                    </Section>
                    <Section delay={.4}>
                        <GridItem title="Matcha" href="" thumbnail={matchaThumbNail}>
                            Matcha is a dating website (tinder like)
                        </GridItem>
                    </Section>
                </SimpleGrid>
                <Section delay={.3}>
                    <Divider my={6} />
                    <Heading as="h3" variant="headline-text">
                        School Projects
                    </Heading>
                </Section>
                <SimpleGrid gap={6} columns={[1, 1, 2]}>
                    <Section delay={.4}>
                        <GridItem title="corewar" type="algorithm" href='https://google.com' thumbnail={corewarThumbNail}>
                            Re-Programing of Core War, it's a 1984 programming game created by D. G. Jones and A. K. Dewdney in which two or more battle programs (called "warriors") compete for control of a virtual computer. These battle programs are written in an abstract assembly language called Redcode
                        </GridItem>
                    </Section>
                    <Section delay={.4}>
                        <GridItem title="Minishell" type="system" href="" thumbnail={minishellThumbnail}>
                            This project is all about recreating my very own (mini)shell.
                        </GridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Wrapper>
    )
}

export default Projects;