import React from "react";
import { useQuery } from "react-query";
import { Heading, Box } from "@chakra-ui/react";

import SectionHeading from "../../../components/elements/SectionHeading";
import getWriters from "../api/getWriters";
import WriterPreview from "./WriterPreview";
import TeamGrid from "./TeamGrid";
import groupByObjectValue from "../../../utils/groupByObjectValue";

const Team: React.FC = () => {
  const { data: writers } = useQuery("writers", () => getWriters());

  return (
    <>
      <SectionHeading heading={"OUR TEAM"} />
      <Heading
        fontSize={{ base: 25, md: 30 }}
        fontWeight={900}
        my={{ base: 8, md: 16 }}
        textAlign={"center"}
        textTransform={"uppercase"}
      >
        Management
      </Heading>
      <TeamGrid>
        {writers
          .filter((writer) => writer.isFounder)
          .map((writer) => (
            <WriterPreview writer={writer} key={writer.id} />
          ))}
      </TeamGrid>
      <Box>
        {Object.entries(groupByObjectValue(writers, "department")).map((entry) => (
          <Box key={entry[0]} _last={{ mb: 16 }}>
            <Heading
              fontSize={{ base: 25, md: 30 }}
              fontWeight={900}
              my={{ base: 8, md: 16 }}
              textAlign={"center"}
              textTransform={"uppercase"}
            >
              {entry[0]}
            </Heading>
            <TeamGrid>
              {entry[1].map((writer) => (
                <WriterPreview writer={writer} key={writer.id} />
              ))}
            </TeamGrid>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Team;
