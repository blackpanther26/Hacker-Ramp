import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import useAuthStore from "../../store/authStore";
import useFollowUser from "../../hooks/useFollowUser";

const SuggestedUser = ({ user ,setUser}) => {
  const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(user.uid);
  const authUser = useAuthStore((state)=>state.user);
  const onFollowUser = async() =>{
    await handleFollowUser();
    setUser({
      ...user,
      followers: isFollowing? user.followers.filter((follower)=>follower.uid!==authUser.uid): [...user.followers,authUser],
    })
  }
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={user.profilePicURL} size={"md"} />
        <VStack spacing={0}>
          <Box fontSize={13} fontWeight={"bold"} alignSelf={"start"}>
            {user.fullname}
          </Box>
          <Box fontSize={12} color={"gray.500"} alignSelf={"start"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
        fontSize={12}
        bg={"transparent"}
        p={0}
        fontWeight={"bold"}
        h={"max-content"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{color: "white"}}
        onClick={onFollowUser}
        isLoading={isUpdating}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
