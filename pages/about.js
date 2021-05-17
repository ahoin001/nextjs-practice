import { Box, Heading, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { Link as NextLink } from "next/link";

const About = () => {
	return (
		<Box>
			<Heading>About Page</Heading>
			<Text fontSize="xl">
				About page, here is link to{" "}
				<Link as={NextLink} href="/" color="teal.500">
					home page
				</Link>
			</Text>
		</Box>
	);
};

export default About;
