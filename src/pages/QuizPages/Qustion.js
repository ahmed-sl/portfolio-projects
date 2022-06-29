import { useToast,HStack,Flex,Container,VStack,Text,Button } from '@chakra-ui/react'
import React, { useContext, useEffect,useState } from 'react'
import QuizContext from '../../context/QuizContext';
import { useNavigate } from 'react-router-dom';


const Qustion = () => {
const { name, qustion, score, setScore } = useContext(QuizContext);
const [qustionIndex, setQuistionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [buttonDisable, setButtonDisabile] = useState(false);
  const navigate = useNavigate();
  const [counter, setCounter] = useState(1);
  const toast = useToast();
  const rendomOption = option => {
    return option.sort(() => Math.random() - 0.5);
  };


      useEffect(() => {
        const getOptins = () => {
          if (qustion.length > 0) {
            setOptions(
              qustion &&
                rendomOption([
                  qustion[qustionIndex]?.correct_answer,
                  ...qustion[qustionIndex]?.incorrect_answers,
                ])
            );
          }
        };
        getOptins();
      }, [qustionIndex]);
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
    <Container width="100%">
      <VStack width="100%">
        <HStack width="100%" justifyContent="space-between">
          <Text>Name: {name}</Text>
          <Text>Score: {score}</Text>
        </HStack>
        <Text width='100%'>
          Qustion {[qustionIndex + 1]}: {qustion[qustionIndex].question}
        </Text>

        {options.map((option, index) => {
          return (
            <>
              <HStack width="100%">
                <Button
                  variant="outline"
                  isDisabled={buttonDisable}
                  width="100%"
                  value={options}
                  onClick={() => {
                    setButtonDisabile(true);
                    if (option === qustion[qustionIndex].correct_answer) {
                      setScore(score + 1);
                      toast({
                        title: 'currect answer',
                        status: 'success',
                        isClosable: true,
                      });
                    } else {
                      toast({
                        title: 'wrong answer',
                        status: 'error',
                        isClosable: true,
                      });
                    }
                  }}
                  key={index}
                  colorScheme='#066163'
                >
                  <text>{option}</text>
                </Button>
              </HStack>
            </>
          );
        })}
        <Button
          width="100%"
          backgroundColor='green.700'
          onClick={() => {
            setQuistionIndex(qustionIndex + 1);

            setButtonDisabile(false);
            setCounter(counter + 1);
           
            if (counter === 10) {
              navigate('/result');
            }
            {
              console.log(counter);
            }
          }}
        >
          Next Question
        </Button>
        <Button width="100%" backgroundColor="red.700" onClick={()=>{
            navigate('/quiz')
        }}>
          Quit
        </Button>
      </VStack>
    </Container>
  </Flex>
    
  )
}

export default Qustion