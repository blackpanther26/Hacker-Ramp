import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { IoIosSettings } from "react-icons/io";
const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 24 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      alignItems={"center"}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        mx={"auto"}
      >
        <Avatar
          name="priyanshu.chahal_"
          src="/profilepic.png"
          alt="blackpanther26"
        />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={6}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          w={"full"}
        >
          <Text
            fontSize={{ base: "sm", md: "xl" }}
            fontWeight={"medium"}
            cursor={"pointer"}
          >
            priyanshu.chahal_
          </Text>
          <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
            <Button bg={"gray.700"} size={{ base: "xs", md: "sm" }}>
              Edit profile
            </Button>
            <Button bg={"gray.700"} size={{ base: "xs", md: "sm" }}>
              View archive
            </Button>
            <IoIosSettings size={30} />
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 8 }} mt={6}>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              672
            </Text>
            followers
          </Text>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              644
            </Text>
            following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4} mt={4} direction={"column"} >
          <Box>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              Priyanshu Chahal
            </Text>
            <Text fontSize={"sm"} p={1} lineHeight={1} fontWeight={"medium"} px={0}>
              CRCS'21
            </Text>
            <Text fontSize={"sm"} lineHeight={1} fontWeight={"medium"}>
              IITR'28 MNC
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
