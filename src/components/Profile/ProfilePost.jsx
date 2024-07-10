import {
  Avatar,
  Box,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";
const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease-in-out"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={10}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"}>442</Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"}>10</Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
              >
                <Image src={img} alt="profile post" />
              </Box>
              <Flex
                flex={1}
                flexDirection={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex gap={4} alignItems={"center"}>
                    <Avatar src="/profilepic.png" size={"sm"} name="pixel" />
                    <Text fontWeight={"bold"} fontSize={14}>
                      priyanshu.chahal_
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
                <Divider my={4} bg={"gray.700"} />
                <VStack
                  w={"full"}
                  alignItems={"start"}
                  maxHeight={"500px"}
                  overflowY={"auto"}
                >
                  <Comment
                    createdAt="1d ago"
                    username="sam"
                    profilePic="https://randomuser.me/api/portraits/men/1.jpg"
                    text={"😍"}
                  />
                  <Comment
                    createdAt="2d ago"
                    username="john_doe"
                    profilePic="https://randomuser.me/api/portraits/men/2.jpg"
                    text={"Amazing!"}
                  />
                  <Comment
                    createdAt="3h ago"
                    username="jane_smith"
                    profilePic="https://randomuser.me/api/portraits/women/3.jpg"
                    text={"Great post!"}
                  />
                  <Comment
                    createdAt="5d ago"
                    username="alice_wonder"
                    profilePic="https://randomuser.me/api/portraits/women/4.jpg"
                    text={"Beautiful!"}
                  />
                  <Comment
                    createdAt="1w ago"
                    username="mark_twain"
                    profilePic="https://randomuser.me/api/portraits/men/5.jpg"
                    text={"So cool!"}
                  />
                  <Comment
                    createdAt="2w ago"
                    username="harry_potter"
                    profilePic="https://randomuser.me/api/portraits/men/6.jpg"
                    text={"Incredible shot!"}
                  />
                  <Comment
                    createdAt="3w ago"
                    username="luna_lovegood"
                    profilePic="https://randomuser.me/api/portraits/women/7.jpg"
                    text={"Wow!"}
                  />
                  <Comment
                    createdAt="1mo ago"
                    username="ron_weasley"
                    profilePic="https://randomuser.me/api/portraits/men/8.jpg"
                    text={"Fantastic!"}
                  />
                  <Comment
                    createdAt="2mo ago"
                    username="hermione_granger"
                    profilePic="https://randomuser.me/api/portraits/women/9.jpg"
                    text={"Amazing view!"}
                  />
                  <Comment
                    createdAt="3mo ago"
                    username="draco_malfoy"
                    profilePic="https://randomuser.me/api/portraits/men/10.jpg"
                    text={"Stunning!"}
                  />
                  <Comment
                    createdAt="4mo ago"
                    username="neville_longbottom"
                    profilePic="https://randomuser.me/api/portraits/men/11.jpg"
                    text={"Lovely!"}
                  />
                  <Comment
                    createdAt="5mo ago"
                    username="ginny_weasley"
                    profilePic="https://randomuser.me/api/portraits/women/12.jpg"
                    text={"Gorgeous!"}
                  />
                  <Comment
                    createdAt="6mo ago"
                    username="fred_weasley"
                    profilePic="https://randomuser.me/api/portraits/men/13.jpg"
                    text={"Epic!"}
                  />
                  <Comment
                    createdAt="7h ago"
                    username="arthur_dent"
                    profilePic="https://randomuser.me/api/portraits/men/14.jpg"
                    text={"Absolutely love this!"}
                  />
                  <Comment
                    createdAt="8h ago"
                    username="ford_prefect"
                    profilePic="https://randomuser.me/api/portraits/men/15.jpg"
                    text={"This is awesome!"}
                  />
                  <Comment
                    createdAt="9h ago"
                    username="zaphod_beeblebrox"
                    profilePic="https://randomuser.me/api/portraits/men/16.jpg"
                    text={"So inspiring!"}
                  />
                  <Comment
                    createdAt="10h ago"
                    username="trillian_astrid"
                    profilePic="https://randomuser.me/api/portraits/women/17.jpg"
                    text={"Amazing colors!"}
                  />
                  <Comment
                    createdAt="11h ago"
                    username="marvin_android"
                    profilePic="https://randomuser.me/api/portraits/men/18.jpg"
                    text={"So vibrant!"}
                  />
                  <Comment
                    createdAt="12h ago"
                    username="slartibartfast"
                    profilePic="https://randomuser.me/api/portraits/men/19.jpg"
                    text={"Lovely capture!"}
                  />
                  <Comment
                    createdAt="13h ago"
                    username="deep_thought"
                    profilePic="https://randomuser.me/api/portraits/men/20.jpg"
                    text={"This made my day!"}
                  />
                  <Comment
                    createdAt="14h ago"
                    username="fenchurch"
                    profilePic="https://randomuser.me/api/portraits/women/21.jpg"
                    text={"So beautiful!"}
                  />
                  <Comment
                    createdAt="15h ago"
                    username="eddie_shipboard"
                    profilePic="https://randomuser.me/api/portraits/men/22.jpg"
                    text={"Just wow!"}
                  />
                  <Comment
                    createdAt="16h ago"
                    username="vogon_poet"
                    profilePic="https://randomuser.me/api/portraits/men/23.jpg"
                    text={"Impressive!"}
                  />
                  <Comment
                    createdAt="17h ago"
                    username="agrajag"
                    profilePic="https://randomuser.me/api/portraits/men/24.jpg"
                    text={"Fantastic shot!"}
                  />
                  <Comment
                    createdAt="18h ago"
                    username="zarniwoop"
                    profilePic="https://randomuser.me/api/portraits/men/25.jpg"
                    text={"Absolutely stunning!"}
                  />
                  <Comment
                    createdAt="19h ago"
                    username="prostetnic_vogon"
                    profilePic="https://randomuser.me/api/portraits/men/26.jpg"
                    text={"Incredible!"}
                  />
                  <Comment
                    createdAt="20h ago"
                    username="hactar"
                    profilePic="https://randomuser.me/api/portraits/men/27.jpg"
                    text={"Marvelous!"}
                  />
                  <Comment
                    createdAt="21h ago"
                    username="gargravarr"
                    profilePic="https://randomuser.me/api/portraits/men/28.jpg"
                    text={"Excellent!"}
                  />
                  <Comment
                    createdAt="22h ago"
                    username="max_quordlepleen"
                    profilePic="https://randomuser.me/api/portraits/men/29.jpg"
                    text={"Very nice!"}
                  />
                  <Comment
                    createdAt="23h ago"
                    username="majikthise"
                    profilePic="https://randomuser.me/api/portraits/men/30.jpg"
                    text={"Good job!"}
                  />
                  <Comment
                    createdAt="1d ago"
                    username="veet_voojagig"
                    profilePic="https://randomuser.me/api/portraits/men/31.jpg"
                    text={"Superb!"}
                  />
                  <Comment
                    createdAt="2d ago"
                    username="gag_halfrunt"
                    profilePic="https://randomuser.me/api/portraits/men/32.jpg"
                    text={"Top-notch!"}
                  />
                  <Comment
                    createdAt="3d ago"
                    username="wonko_the_sane"
                    profilePic="https://randomuser.me/api/portraits/men/33.jpg"
                    text={"Really good!"}
                  />
                </VStack>
                <Divider bg={"gray.700"} marginTop={"auto"} />
                <PostFooter isProfilePage={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
