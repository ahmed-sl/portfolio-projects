import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  useToast,
  VStack,
  Spinner,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import Option from '../../components/quizComponents/Option';
import QuizImg from '../../Images/quizImg.svg';
import QuizContext from '../../context/QuizContext';
import { useNavigate } from 'react-router-dom';

const MainQuiz = () => {
  const {
    setName,
    setDifficult,
    setCatgory,
    setTypeQuistion,
    setScore,
    setQuistion,
    catagory,
    difficult,
    setLoading,
    typeQuistion,
    loading,
  } = useContext(QuizContext);
  const [nameFild, setNameFild] = useState(false);
  const [difficultFild, setDifficultFild] = useState(false);
  const [catagoryFild, setCatgoryFild] = useState(false);
  const [typeFild, setTypeFild] = useState(false);
  const toast = useToast();
  const navigation = useNavigate();
  const DiffList = [
    { lable: 'Easy', value: 'easy' },
    { lable: 'Medium', value: 'medium' },
    { lable: 'Hard', value: 'hard' },
  ];
  const CatList = [
    { lable: 'General knowledge', value: 9 },
    { lable: 'Entertainment: Books', value: 10 },
    { lable: 'Entertainment: Film', value: 11 },
    { lable: 'Entertainment: Music', value: 12 },
    { lable: 'Entertainment: Musicals & Theaters', value: 13 },
    { lable: 'Entertainment: Television', value: 14 },
    { lable: 'Entertainment: Video Games', value: 15 },
    { lable: 'Entertainment: Board Games', value: 16 },
    { lable: 'Science & Nature', value: 17 },
    { lable: 'Science: Computers', value: 18 },
    { lable: 'Science: Mathematics', value: 19 },
    { lable: 'Mythology', value: 20 },
    { lable: 'Sports', value: 21 },
    { lable: 'Geography', value: 22 },
    { lable: 'History', value: 23 },
    { lable: 'Politics', value: 24 },
    { lable: 'Art', value: 25 },
    { lable: 'Celebrities', value: 26 },
    { lable: 'Animals', value: 27 },
  ];
  const TypeList = [
    { lable: 'Multiple Choice', value: 'multiple' },
    { lable: 'True / False', value: 'boolean' },
  ];
  const onChangeName = e => {
    setName(e.target.value);
    setNameFild(true);
  };
  const onChangeDiffcult = e => {
    console.log(e.target.value);
    setDifficult(e.target.value);
    setDifficultFild(true);
  };
  const onChangeCatgory = e => {
    console.log(e.target.value);
    setCatgory(e.target.value);
    setCatgoryFild(true);
  };
  const onChangeType = e => {
    console.log(e.target.value);
    setTypeQuistion(e.target.value);
    setTypeFild(true);
  };
  const onClick = async () => {
    if (
      nameFild === false ||
      difficultFild === false ||
      catagoryFild === false ||
      typeFild === false
    ) {
      return toast({
        title: 'all fild is required',
        status: 'error',
        isClosable: true,
      });
    }
    setLoading(true);
    try {
      const request = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${catagory}&difficulty=${difficult}&type=${typeQuistion}`
      );
      const data = await request.json();
      console.log(data);
      if (data.response_code === 1) {
        return console.log('error in featch data');
      }
      setQuistion(data.results);
      setScore(0);
      setLoading(false);
      navigation('/qustion');
    } catch (error) {
      
        toast({
            title: 'error in server try again later',
            position:'top-right',
            status: 'error',
            isClosable: true,
    })}
  };
  return (
    <Box
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
        < >
          <VStack width={['100%', '50%']}>
            <Container>
              <Heading textAlign="center">Quiz Settings</Heading>
              <Input
                backgroundColor="#066163"
                _placeholder={{ opacity: 1, color: 'white' }}
                placeholder="Enter your name"
                marginTop="1rem"
                borderRadius="md"
                bg="black"
                w={['100%','100%', '60%']}
                onChange={onChangeName}
              ></Input>
              <Option
                onChange={onChangeCatgory}
                List={CatList}
                placeholder={'CatList'}
              />
              <Option
                onChange={onChangeDiffcult}
                List={DiffList}
                placeholder={'Difficulty'}
              />
              <Option
                onChange={onChangeType}
                List={TypeList}
                placeholder={'Type'}
              />
              <Button marginTop="1rem"  width={['100%', '60%']} onClick={onClick}>
                Start
              </Button>
            </Container>
          </VStack>
          <VStack width={['0','0','50%']}>
            <Container>
              <Image src={QuizImg}></Image>
            </Container>
          </VStack>
        </>
      )}
    </Box>
  );
};

export default MainQuiz;
