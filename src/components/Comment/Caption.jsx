import { Avatar, Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { timeAgo } from "../../utils/timeAgo"
import useUserProfileStore from "../../store/userProfileStore"

const Caption = ({post}) => {
    const userProfile = useUserProfileStore(state=>state.userProfile)
  return (
    <Flex gap={4} alignItems={"center"}>
      <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicURL} size={"sm"} />
      </Link>
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Link to={`/${userProfile.username}`}>
            <Text fontWeight={"bold"} fontSize={14}>
              {userProfile.username}
            </Text>
          </Link>
          <Text fontSize={13} fontWeight={"md"}>
            {post.caption}
          </Text>
        </Flex>
        <Text fontSize={11} color={"gray.400"} fontWeight={"bold"}>
          {timeAgo(post.createdAt)}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Caption