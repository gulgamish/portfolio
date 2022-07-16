import {
    Box,
    Image,
    Text,
    LinkBox,
    LinkOverlay,
    Flex,
    Badge
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Meta from "./Meta"

export const GridItem = ({ title, thumbnail, href, type = "web", children }) => (
    <Box w="100%">
        <Image
            src={thumbnail}
            alt={title}
            borderRadius={12}
            loading="lazy"
            placeholder="blur"
        />
        <Flex justify="center" my={3} alignItems="center">
            <Text fontSize={28}>{title}</Text>
            <Meta>{type}</Meta>
        </Flex>
        <Text fontSize={14} fontStyle={14} textAlign="center">{children}</Text>
    </Box>
)

export const ProjectGridItem = ({ id, title, thumbnail, children }) => (
    <Box w="100%" display="flex" justifyContent="center">
        <Link to={`/projects/${id}`}>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    borderRadius={12}
                    loading="lazy"
                />
                <LinkOverlay href={`/projects/${id}`}>
                    <Text mt={2} fontSize={28} textAlign="center">{title}</Text>
                </LinkOverlay>
                <Text fontSize={14} textAlign="center">{children}</Text>
            </LinkBox>
        </Link>
    </Box>
)