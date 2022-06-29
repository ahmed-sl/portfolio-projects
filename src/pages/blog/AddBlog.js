import React, { useState, useContext } from 'react';
import QuizContext from '../../context/QuizContext';
import {
  Spinner,
  Button,
  Container,
  Flex,
  VStack,
  Input,
  useToast,
  Textarea,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const { loading, setLoading } = useContext(QuizContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const onClick = async e => {
    setLoading(true);
    try {
      const request = await fetch(
        'https://ahmed-blog-systems.herokuapp.com/api/v1/blog',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, body }),
        }
      );
      if (request.status === 201) {
        setLoading(false);
        toast({
          title: 'Blog add',
          position: 'top-right',
          status: 'success',
          isClosable: true,
        })
        navigate('/blog');
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
          <VStack width="100%">
            <Input
              placeholder="Enter title"
              onChange={e => setTitle(e.target.value)}
            ></Input>
            <Textarea
              placeholder="Enter body"
              onChange={e => setBody(e.target.value)}
            ></Textarea>
            <Button width="100%" onClick={onClick}>
              add
            </Button>
          </VStack>
        </Container>
      )}
    </Flex>
  );
};

export default AddBlog;
