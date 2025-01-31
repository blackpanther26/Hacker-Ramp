import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const PostHeader = ({post,creatorProfile}) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={creatorProfile.profilePicURL} alt="user profile pic" size={"sm"} />
        <Flex fontSize={15} fontWeight={"bold"} gap={2}>
          {creatorProfile.username}
        </Flex>
        <Box color={"gray.500"}>• 2h</Box>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
