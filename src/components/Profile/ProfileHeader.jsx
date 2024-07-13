import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Text,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { IoIosSettings } from "react-icons/io";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile";
import useFollowUser from "../../hooks/useFollowUser";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isUpdating, isFollowing, handleFollowUser}=useFollowUser(userProfile?.uid)

  const vistingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username;
  const vistingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile.username;
    
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
        <Avatar src={userProfile.profilePicURL} alt={userProfile.username} />
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
            {userProfile.username}
          </Text>
          {vistingOwnProfileAndAuth && (
            <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
              <Button bg={"gray.700"} size={{ base: "xs", md: "sm" }} onClick={onOpen}>
                Edit profile
              </Button>
              <Button bg={"gray.700"} size={{ base: "xs", md: "sm" }}>
                View archive
              </Button>
              <IoIosSettings size={30} />
            </Flex>
          )}
          {vistingAnotherProfileAndAuth && (
            <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"gray.700"}
                size={{ base: "xs", md: "sm" }}
                onClick={handleFollowUser}
                isLoading={isUpdating}
              >
                {isFollowing? "Unfollow":"Follow"}
              </Button>
            </Flex>
          )}
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 8 }} mt={6}>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.posts.length}
            </Text>
            posts
          </Text>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.followers.length}
            </Text>
            followers
          </Text>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.following.length}
            </Text>
            following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4} mt={4} direction={"column"}>
          <Box>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {userProfile.fullname}
            </Text>
            <Text
              fontSize={"sm"}
              p={1}
              lineHeight={1}
              fontWeight={"medium"}
              px={0}
            >
              {userProfile.bio}
            </Text>
          </Box>
        </Flex>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/>}
    </Flex>
  );
};

export default ProfileHeader;
