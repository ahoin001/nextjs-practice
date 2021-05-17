import { Box, Heading, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { Link as NextLink } from "next/link";

export default function Post() {
	return (
		<Box>
			<Heading>Post Page</Heading>
			<Text fontSize="xl">
				Post page, here is link to{" "}
				<Link as={NextLink} href="/about" color="teal.500">
					about page
				</Link>
			</Text>
			<Text fontSize="xl">
				Here is a link {""}
				<Link as={NextLink} href="/" color="teal.500">
					back home
				</Link>
			</Text>
			<Text fontSize="xl">
				Dynamic link to a {""}
				<Link as={NextLink} href="/posts/post" color="teal.500">
					random post
				</Link>
			</Text>
		</Box>
	);
}
