import { Avatar, Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="Pixel" size={"md"} src="/profilepic.png" />
        <Box fontSize={14} fontWeight={"bold"}>
          Pixel
        </Box>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={13}
        fontWeight={"bold"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
