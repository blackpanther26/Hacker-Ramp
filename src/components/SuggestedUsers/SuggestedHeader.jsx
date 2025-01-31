import { Avatar, Box, Flex, Button } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  const {handleLogout,isLoggingOut}=useLogout()
  const authUser = useAuthStore((state)=>state.user);
  if (!authUser) {
    return null;
  }
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
        <Avatar size={"md"} src={authUser.profilePicURL} />
        </Link>
        <Link to={`${authUser.username}`}>
        <Box fontSize={14} fontWeight={"bold"}>
          {authUser.username}
        </Box>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{background: "transparent"}}
        onClick={handleLogout}
        fontSize={13}
        fontWeight={"bold"}
        color={"blue.400"}
        isLoading={isLoggingOut}
        cursor={"pointer"}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
