import {
  Box,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import cardQuiz from '../Images/cardQuiz.png';
import cardBlog from '../Images/cardBlog.png';
import cardTracked from '../Images/cardTracked.png';
import cardCalculater from '../Images/cardCalculater.png';
import Card from '../components/homeComponents/Card';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <Grid>
      <Flex display="flex" justifyContent="center" alignItems="center" width='100%'>
        <Box margin="3rem" alignItems='center' display='block' justifyContent='center'>
          <Heading margin="0.5rem" fontSize={['2xl', '3xl', '4xl']}>
            About me :
          </Heading>
          <Text
            margin="0.5rem"
            marginTop="1.5rem"
            fontSize={['sm', 'xl', '2xl']}
          >
            Full stack web application development, Gradut from king Abdulaziz
            university in Information System, have a knowledge of mobile app
            development, Seeking a position as a web Developer to use my skills
            and imporve them to move forward with company goals.
          </Text>
        </Box> 
      </Flex>
      <Flex display="flex" justifyContent="center" alignItems="center">
        <Box>
          <Heading margin="0.5rem">Some of Projects :</Heading>
          <SimpleGrid columns={[1, 1, 2]} spacing={10}>
            <Card
              onClick={() => navigate('/quiz')}
              imgeUrl={cardQuiz}
              title="Quiz"
            />
            <Card
              onClick={() => navigate('/blog')}
              imgeUrl={cardBlog}
              title="Blog"
            />
            <Card
              onClick={() => navigate('/tracked')}
              imgeUrl={cardTracked}
              title="covid-19 tracker"
            />
            <Card
              onClick={() => navigate('/calculater')}
              imgeUrl={cardCalculater}
              title="calculater"
            />
          </SimpleGrid>
        </Box>
      </Flex> 
    </Grid>
  );
};
export default Home;
