import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SimpleGrid } from "@chakra-ui/react";
import HomeStatisticTemp from "./HomeSection2Temp";

export default function HomeStatisticInfo() {
  const Statistics = [
    {
      title: " Companies",
      number: 97,
    },
    {
      title: " Companies",
      number: 97,
    },
    {
      title: " Companies",
      number: 80,
    },
  ];
  const StatisticList = Statistics.map((item) => (
    <HomeStatisticTemp state={item} />
  ));

  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);
  return (
    <div>
      <SimpleGrid
        minChildWidth="200px"
        mr={16}
        ml={16}
        mb={20}
        rounded={15}
        boxShadow={"base"}
        data-aos="fade-up"
      >
        {StatisticList}
      </SimpleGrid>
      {/* <Box zIndex="1" width="50%" position="absolute" height="40%">
            <Box
              bgGradient={useColorModeValue(
                'radial(yellow.300 1px, transparent 1px)',
                'radial(yellow.300 1px, transparent 1px)'
              )}
              backgroundSize="13px 20px"
              opacity="0.7"
              height="70%"
            />
          </Box>  */}
    </div>
  );
}
