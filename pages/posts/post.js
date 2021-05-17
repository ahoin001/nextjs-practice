import React from "react";
import { Box, Header, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { Link as NextLink } from "next/link";
const APost = () => {
	return (
		<Box>
			<Header> Dynamic Link !</Header>
			<Text>
				Some text, and a link{" "}
				<Link as={NextLink} href="/" color="teal.500">
					back home
				</Link>
			</Text>
		</Box>
	);
};

export default APost;
