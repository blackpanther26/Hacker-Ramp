import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";

const PostFooter = ({ post, username, isProfilePage }) => {
  const { handlePostComment, isCommenting } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const { handleLikePost, isLiked, likes } = useLikePost(post);
  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
    <Box my={4}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box
          cursor={"pointer"}
          fontSize={18}
          onClick={() => commentRef.current.focus()}
        >
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={"sm"}>
            {username}{" "}
            <Text fontWeight={400} as="span">
              Feeling good
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            View all 1,000 comments
          </Text>
        </>
      )}
      {authUser && (
        <Flex
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          w={"full"}
        >
          <InputGroup>
            <Input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              variant="flushed"
              placeholder="Add a comment..."
              fontSize={14}
              ref={commentRef}
            />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{
                  color: "white",
                }}
                bg={"transparent"}
                onClick={handleSubmitComment}
                isLoading={isCommenting}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
