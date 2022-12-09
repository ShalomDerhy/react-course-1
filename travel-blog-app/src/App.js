import React from 'react';
import Header from './Header';
import BlogItem from './BlogItem';
import BlogData from './Data'


export default function App() {
  const blogElements = BlogData.map(item=> {
    return (
      <BlogItem data={item} />
    )
  })
    return ( 
      <div>
        <Header />
        {blogElements}
      </div>
    );
}