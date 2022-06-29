import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calculater from './pages/Calculater';
import MainQuiz from './pages/QuizPages/MainQuiz';
import Qustion from './pages/QuizPages/Qustion';
import Result from './pages/QuizPages/Result';
import Blogs from './pages/blog/Blogs';
import AddBlog from './pages/blog/AddBlog';
import GetBlog from './pages/blog/GetBlog';
import Tracked from './pages/trackedCovid-19/Tracked';



function App() {
  return (
    <ChakraProvider theme={theme}>
      
      <BrowserRouter>
          <Box textAlign="center" fontSize="xl">
            <Grid display='flex' justifyContent='space-between' alignItems='center' marginRight='0.5rem'>
            <Navbar/>
              <ColorModeSwitcher justifySelf="flex-end"/>
            </Grid>
          </Box>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/calculater' element={<Calculater/>}/>
          <Route path='/quiz' element={<MainQuiz/>}/>
          <Route path='/qustion' element={<Qustion/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/blog' element={<Blogs/>}/>
          <Route path='/addblog' element={<AddBlog/>}/>
          <Route path='/blog/:id' element={<GetBlog/>}/>
          <Route path='/tracked' element={<Tracked/>}/>
        </Routes>
      </BrowserRouter>
      
    </ChakraProvider>
  );
}

export default App;
