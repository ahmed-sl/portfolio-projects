import { ListItem } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ item }) => {
  return (
    <ListItem marginLeft='0.5rem'>
      <Link to={`/blog/${item.id}`}>{item.title}</Link>
    </ListItem>
  );
};

export default BlogItem;
