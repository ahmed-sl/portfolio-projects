import { UnorderedList } from '@chakra-ui/react';
import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogList }) => {
  return (
    <UnorderedList width="90%" padding="0.5rem" border='1px'>
      {blogList.map((item, index) => (
        <BlogItem item={item} key={index} />
      ))}
    </UnorderedList>
  );
};

export default BlogList;
