import React from 'react'
import { Select } from '@chakra-ui/react';


const Option = ({ List, placeholder, onChange }) => {
  return (
    <Select onChange={onChange} variant="filled"  marginTop='1rem' w={['100%','100%', '60%']}  backgroundColor='#066163'>
      <option selected hidden disabled value="notSelected">
        {placeholder}
      </option>
      {List?.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.lable}
          </option>
        );
      })}
    </Select>
  )
}

export default Option