import React from 'react';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Sidebar from '@/components/sidebar';
import FollowSuggestions from '@/components/followSuggestions';


const HomePage = () => {
  const posts = [
    { id: 1, title: 'Post 1', description: 'This is the description of post 1', content: 'This is the content of post 1' },
    { id: 2, title: 'Post 2', description: 'This is the description of post 2', content: 'This is the content of post 2' },
    { id: 3, title: 'Post 3', description: 'This is the description of post 3', content: 'This is the content of post 3' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-1/4 bg-white shadow-md">
        <Sidebar />
      </div>
      <div className="w-2/4 p-4">
        {posts.map(post => (
          <Card key={post.id} className="mb-4">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
            <CardFooter>
              <button className="text-blue-600">Like</button>
              <button className="ml-4 text-blue-600">Comment</button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="w-1/4 bg-white shadow-md">
        <FollowSuggestions />
      </div>
    </div>
  );
};

export default HomePage;
