import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const Calculater = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);
  const onChangeNumber1 = e => {
    setNumber1(parseInt(e.target.value));
  };
  const onChangeNumber2 = e => {
    setNumber2(parseInt(e.target.value));
  };
  const onClickSum = () => {
    setTotal(number1 + number2);
  };
  const onClickSub = () => {
    setTotal(number1 - number2);
  };
  const onClickMult = () => {
    setTotal(number1 * number2);
  };
  const onClickDiv = () => {
    setTotal(number1 / number2);
  };
  const onClickPers = () => {
    setTotal(number1 % number2);
  };
 
  return (
    <>
      <Heading textAlign="center">Calculator</Heading>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Container>
          <Box display="flex" width="30rem" justifyContent="space-between">
            <Input
              type="number"
              width="45%"
              borderRadius="lg"
              _placeholder={{ opacity: 1, color: 'white' }}
              placeholder="Number 1"
              backgroundColor="#066163"
              onChange={onChangeNumber1}
            ></Input>
            <Text
              padding={1.5}
              textAlign="center"
              type="number"
              width="5%"
              borderRadius="lg"
              _placeholder={{ opacity: 1, color: 'white' }}
              backgroundColor="#066163"
            >
              &
            </Text>
            <Input
              type="number"
              width="45%"
              borderRadius="lg"
              _placeholder={{ opacity: 1, color: 'white' }}
              placeholder="Number 2"
              backgroundColor="#066163"
              onChange={onChangeNumber2}
            ></Input>
          </Box>
          <Box marginTop="1rem" display="flex" justifyContent="space-between">
            <Button onClick={onClickSum}>+</Button>
            <Button onClick={onClickSub}>-</Button>
            <Button onClick={onClickMult}>*</Button>
            <Button onClick={onClickDiv}>/</Button>
            <Button onClick={onClickPers}>%</Button>
          </Box>
          <Text
            marginTop="1rem"
            width="100%"
            padding={1.5}
            textAlign="center"
            type="number"
            borderRadius="lg"
            _placeholder={{ opacity: 1, color: 'white' }}
            backgroundColor="#066163"
          >
            {total}
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Calculater;
