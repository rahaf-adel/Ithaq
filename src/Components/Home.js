import React, { useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import yellowBackgroun from "./Assets/Images/aa.jpeg";
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Button,
  Box,
  Center,
  color,
  useColorModeValue,
} from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import HomeStatisticInfo from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import { Wave } from "react-animated-text";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);
  return (
    <div>
      <Header />
      <Flex className="glass" 
        w={"full"}
        h={"100vh"}
        backgroundImage={yellowBackgroun}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              <Wave text="Ithaq With Us" effect="stretch" effectChange={1.5} />
            </Text>
          </Stack>
        </VStack>
      </Flex>
      <Box>
        {/* <Box zIndex="1" width="100%" position="absolute" height="20%">
          <Box
            bgGradient={useColorModeValue(
              "radial(#1B668E 1px, transparent 1px)",
              "radial(#E1EAF5 1px, transparent 1px)"
            )}
            backgroundSize="13px 20px"
            opacity="0.7"
            height="70%"
          />
        </Box> */}
        <svg
          position="absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1B668E"
            fill-opacity="1"
            d="M0,96L1440,256L1440,0L0,0Z"
          ></path>
        </svg>
        <HomeStatisticInfo />
      </Box>

      <Box m={13} data-aos="fade-up">
        <Flex m={10} justifyContent="space-between">
          <Text
            fontSize={"2xl"}
            fontWeight={700}
            position={"relative"}
            _after={{
              content: "''",
              width: "50%",
              height: useBreakpointValue({ base: "20%", md: "30%" }),
              position: "absolute",
              bottom: 10,
              left: 0,
              bg: "#00ADBB",
              //   bg: "#92B4EC",
              zIndex: -1,
            }}
          >
            our Partners
          </Text>
          <Button
            fontSize={"lg"}
            fontWeight={700}
            color={"#00ADBB"}
            variant="outline"
            colorScheme={"#00ADBB"}
            _hover={{ bg: "#00ADBB", color: "white" }}
          >
            more
          </Button>
        </Flex>
        <HomeSection3 />
      </Box>
      <Footer/>
    </div>
  );
}
