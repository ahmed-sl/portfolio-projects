import {
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import cardQuiz from '../Images/cardQuiz.png'
import cardBlog from '../Images/cardBlog.png'
import cardTracked from '../Images/cardTracked.png'
import cardCalculater from '../Images/cardCalculater.png'
import Card from '../components/homeComponents/Card';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <Flex  display='flex' justifyContent='center' alignItems='center'>
      
        <SimpleGrid columns={[1,1,2]} spacing={10}>
          <Card onClick={()=> navigate('/quiz')} imgeUrl={cardQuiz} title='Quiz'/>
          <Card  onClick={()=> navigate('/blog')} imgeUrl={cardBlog} title='Blog'/>
          <Card  onClick={()=> navigate('/tracked')} imgeUrl={cardTracked} title='covid-19 tracker'/>
          <Card  onClick={()=> navigate('/calculater')} imgeUrl={cardCalculater} title='calculater'/>
        </SimpleGrid>
    </Flex>
  );
};
export default Home;
