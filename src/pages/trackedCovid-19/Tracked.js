import React from 'react';
import { useEffect, useState, useContext } from 'react';
import QuizContext from '../../context/QuizContext';
import {
  Spinner,
  Button,
  Container,
  Flex,
  VStack,
  useToast,
  Image,
  Spacer,
  Text,
  HStack,
  Input,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Tracked = () => {
  const [counterName, setCountryName] = useState('');
  const [searchedCountry, setSearchedCountry] = useState('Global');
  const [confirmedCount, setConfirmedCount] = useState(0);
  const [deathCount, setDeathCount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState('');
  const [imge, setImage] = useState('');
  const { loading, setLoading } = useContext(QuizContext);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const getDataFromApi = async () => {
      setLoading(true);
      try {
        const request = await fetch('https://covid19.mathdro.id/api');
        const data = await request.json();
        if (request.status === 200) {
          setConfirmedCount(data.confirmed.value);
          setDeathCount(data.deaths.value);
          setImage(data.image);
          setLastUpdate(data.lastUpdate);
          setLoading(false);
        }
      } catch (error) {
        toast({
          title: 'error in server try again later',
          position: 'top-right',
          status: 'error',
          isClosable: true,
        });
        console.log('catch 1');
      }
    };
    getDataFromApi();
  }, []);

  const onClick = async e => {
    setLoading(true);
    console.log(counterName);
    try {
        const request = await fetch(
            "https://covid19.mathdro.id/api/countries/" + counterName
          );
          const data = await request.json();
      
          if (request.status === 200) {
          setSearchedCountry(counterName);
          setConfirmedCount(data.confirmed.value);
          setDeathCount(data.deaths.value);
          setLastUpdate(data.lastUpdate);
          setCountryName("");
            setLoading(false);
          }else{
            toast({
                title: 'cuntry name is wrong try other cuntry',
                position: 'top-right',
                status: 'error',
                isClosable: true,
              });
              setLoading(false);

          }
          
    } catch (error) {
        toast({
            title: 'error in server try again later',
            position: 'top-right',
            status: 'error',
            isClosable: true,
          });
          navigate('/')
        }
  };
  return (
    <Flex
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="rgb(114,187,220)"
          color="gray.200"
          size="xl"
        />
      ) : (
        <Container width="100%">
          <Image src={imge} alt="covid19"></Image>
          <HStack width="100%" marginTop="1rem">
            <Input onChange={(e)=>setCountryName(e.target.value)}></Input>
            <Button onClick={onClick}>get data</Button>
          </HStack>
          <Text
            marginTop="1rem"
            marginBottom="0.5rem"
            width="100%"
            textAlign="center"
          >
            The total number of covid 19 cases for {searchedCountry}
          </Text>
          <Flex marginTop='1rem'>
            <VStack>
              <Text>Confirmed count</Text>
              <Text>{confirmedCount}</Text>
            </VStack>
            <Spacer />
            <VStack>
              <Text>Deaths count</Text>
              <Text>{deathCount}</Text>
            </VStack>
            <Spacer />
            <VStack>
              <Text> Last update</Text>
              <Text>{lastUpdate}</Text>
            </VStack>
            
          </Flex>
        </Container>
      )}
    </Flex>
  );
};

export default Tracked;
