import React, { useContext } from 'react';
import { Box, Text, VStack, Button } from '@chakra-ui/react';
import QuizContext from '../../context/QuizContext';
import { useNavigate } from 'react-router-dom';




const Result = () => {
    const { name, score } = useContext(QuizContext);
    const navigate = useNavigate();

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <VStack width="100%">
      <Text fontSize={['xl','2xl','4xl','6xl']}>{name} finish quiz</Text>
      <Text fontSize={['xl','2xl','4xl','6xl']}>your score: {score} out of 10</Text>
      <Button
        textColor="black"
        onClick={()=>navigate('/quiz')}
      >
        take other quiz
      </Button>
    </VStack>
  </Box>
  )
}

export default Result