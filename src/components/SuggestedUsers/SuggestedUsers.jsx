import { Box, Flex, Text, VStack,Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={14} fontWeight={"bold"} color={"gray.400"}>
          Suggested for you
        </Text>
        <Text
          fontSize={13}
          fontWeight={"bold"}
          color={"white"}
          _hover={{ color: "gray.500" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser name="Soumil Malhotra" followers={357} avatar="https://media.licdn.com/dms/image/D4E03AQFsAEsJOipu_w/profile-displayphoto-shrink_200_200/0/1703684484618?e=2147483647&v=beta&t=KiSTePg5r2xSZXFpnga3M_CfBj23GGYsdUAoc53ouPc"/>
      <SuggestedUser name="Saanvi Malik" followers={672} avatar="https://media.licdn.com/dms/image/D5603AQHevhYc_w9XRg/profile-displayphoto-shrink_400_400/0/1720154086087?e=1726099200&v=beta&t=2zLG7e_pJiOdLjQdzwOIsdUTEmxkF1EalCqzcVhCToU"/>
      <SuggestedUser name="Priyanshu Chahal" followers={672} avatar="https://media.licdn.com/dms/image/D5603AQF8TenZN1hG0Q/profile-displayphoto-shrink_800_800/0/1703917893137?e=1726099200&v=beta&t=CTEtB010MRCHyNL7_nlYPHgMasNSE8NC-ROJHpVsJcQ"/>
      <SuggestedUser name="Charushree Agarwal" followers={565} avatar="https://media.licdn.com/dms/image/D4D03AQFUcRw2AFxiiA/profile-displayphoto-shrink_400_400/0/1712377856305?e=1726099200&v=beta&t=87Tdo6aYWCK4K1Db2BlGn54GU9sEh60dhS-HpTqWZ-Q"/>
      <SuggestedUser name="Sujal Kakkar" followers={309} avatar="https://media.licdn.com/dms/image/D4D03AQFTtZV8YNGKiw/profile-displayphoto-shrink_100_100/0/1690224207076?e=1726099200&v=beta&t=sVyot5xJiiG4gP6vNSw3PYXOgiGtST9eoQxe1ly6wk4"/>
      <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>
        © 2024 Built By{" "}
        <Link href={"https://github.com/blackpanther26"} target="_blank" color='blue.500'>blackpanther26</Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
