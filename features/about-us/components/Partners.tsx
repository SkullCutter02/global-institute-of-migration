import React from "react";
import { useQuery } from "react-query";
import { AspectRatio, Box, Image, Link, SimpleGrid } from "@chakra-ui/react";

import SectionHeading from "../../../components/elements/SectionHeading";
import getPartners from "../api/getPartners";
import HOST from "../../../constants/host";

const Partners: React.FC = () => {
  const { data: partners } = useQuery("partners", () => getPartners());

  return (
    <>
      <SectionHeading heading={"OUR PARTNERS"} />
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4 }}
        spacingX={{ base: 6, sm: 14, md: 12, lg: 16 }}
        spacingY={14}
        my={16}
      >
        {partners.map((partner) => (
          <Box key={partner.id} w={"100%"}>
            <AspectRatio maxW={"100%"} ratio={1}>
              <Image src={`${HOST}/assets/${partner.logo}`} borderRadius={"full"} boxSize={"100%"} />
            </AspectRatio>
            <Link
              href={partner.website_url}
              target={"_blank"}
              mt={4}
              fontWeight={600}
              fontFamily={"secondary"}
              textTransform={"uppercase"}
              textAlign={"center"}
              display={"block"}
              fontSize={{ base: 19, md: 25 }}
              cursor={"pointer"}
            >
              {partner.name}
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Partners;
