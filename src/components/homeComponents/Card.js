import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const Card = ({ imgeUrl, title, onClick }) => {
  return (
    <Box
      onClick={onClick}
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      margin='1rem'
    >
      <Image width="100%" height="80%" src={imgeUrl} alt="jk" />
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
