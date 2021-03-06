import { Box, Heading, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { Link as NextLink } from "next/link";

export default function Home() {
	return (
		<Box>
			<Heading>Home Page</Heading>
			<Text fontSize="xl">
				Home page, here is link to{" "}
				<Link as={NextLink} href="/about" color="teal.500">
					about page
				</Link>
			</Text>
			<Text fontSize="xl">
				Here is a folder index link {""}
				<Link as={NextLink} href="/posts" color="teal.500">
					to post path
				</Link>
			</Text>
		</Box>
	);
}
