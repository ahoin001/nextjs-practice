import { Box, Heading, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { Link as NextLink } from "next/link";

export default function Post() {
	return (
		<Box>
			<Heading>Post Page</Heading>
			<Text fontSize="xl">
				Here is link back to{" "}
				<Link as={NextLink} href="/about" color="teal.500">
					about page
				</Link>
			</Text>
			<Text fontSize="xl">
				Here is a link to go {""}
				<Link as={NextLink} href="/" color="teal.500">
					back home
				</Link>
			</Text>
			<Text fontSize="xl">
				Link to return too {""}
				<Link as={NextLink} href="/posts" color="teal.500">
					Posts path
				</Link>
			</Text>
		</Box>
	);
}
