import {
  Spinner,
  Button,
  Container,
  Flex,
  VStack,
  useToast,
  Heading,
} from '@chakra-ui/react';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogList from '../../components/blogComponents/BlogList';
import QuizContext from '../../context/QuizContext';
const Blogs = () => {
  const { loading, setLoading } = useContext(QuizContext);
  const [blogList, setBlogList] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      try {
        const requst = await fetch(
          'https://ahmed-blog-systems.herokuapp.com/api/v1/blog'
        );
        const data = await requst.json();
        if (requst.status === 200) {
          setBlogList(data);
          setLoading(false);
        }
      } catch (error) {
        toast({
          title: 'error in server try again later',
          position: 'top-right',
          status: 'error',
          isClosable: true,
        });
      }
    };
    getBlogs();
  }, []);
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
          <Heading textAlign='center' marginBottom='0.5rem'>Blogs</Heading>
          <VStack width="100%">
            <BlogList blogList={blogList} />
            <Button
              width="100%"
              onClick={() => {
                navigate('/addblog');
              }}
            >
              add
            </Button>
          </VStack>
        </Container>
      )}
    </Flex>
  );
};

export default Blogs;


