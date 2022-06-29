import React, { useState, useContext, useEffect } from 'react';
import QuizContext from '../../context/QuizContext';
import {
  Spinner,
  Button,
  Container,
  Flex,
  Text,
  useToast,
  Textarea,
  Spacer,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

const GetBlog = () => {
  const { loading, setLoading } = useContext(QuizContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const toast = useToast();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    const getBlog = async () => {
      setLoading(true);
      try {
        const request = await fetch(
          'https://ahmed-blog-systems.herokuapp.com/api/v1/blog/' + id
        );
        const data = await request.json();

        if (request.status === 400) {
          return navigate('404');
        }
        if (request.status === 201) {
          setTitle(data.title);
          setBody(data.body);
          setLoading(false);
        }else{
          toast({
            title: 'yoy don`t have blogs',
            position: 'top-right',
            status: 'error',
            isClosable: true,
          })
          navigate('/blog')
        }
      } catch (error) {
        setLoading(false);
        toast({
          title: 'error in server try again later',
          position: 'top-right',
          status: 'error',
          isClosable: true,
        });
        navigate('/blog');
      }
    };
    getBlog();
  },[]);
  const onClickDelete = async()=>{
    setLoading(true);
    try {
      const request = await fetch('https://ahmed-blog-systems.herokuapp.com/api/v1/blog/' + id,{
      method: 'Delete'
    })
    if (request.status === 201){
      toast({
        title: 'blog is deleted',
        position: 'top-right',
        status: 'success',
        isClosable: true,
        
      })
      navigate('/blog')
    }else{
      toast({
        title: 'blog is not deleted try agin later',
        position: 'top-right',
        status: 'error',
        isClosable: true,
        
      })
      setLoading(false);
      navigate('/blog')
    }
    } catch (error) {
      console.log('catch error');
      navigate('/blog')
    }
    
  }
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
            <Text textAlign='center'>{title}</Text>
            <Textarea readOnly={true}>{body}</Textarea>
            <Flex marginTop='0.5rem'>
            <Button
              onClick={() => {
                navigate('/blog');
              }}
            >
              Back To All
            </Button>
            <Spacer/>
            <Button
              onClick={onClickDelete}
            >
              Delete blog
            </Button>
            </Flex>           
        </Container>
      )}
    </Flex>
  );
};

export default GetBlog;
// onClick={() => {
//   navigate('/blog');
// }}