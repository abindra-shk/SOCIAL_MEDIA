import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar } from './ui/avatar';
import { Button } from './ui/button';

const FollowSuggestions = () => {
  const suggestions = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ];

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Who to follow</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {suggestions.map(user => (
            <li key={user.id} className="flex items-center mb-2">
              <Avatar className="w-10 h-10 bg-gray-300 rounded-full mr-3">{user.name[0]}</Avatar>
              <span className="flex-1">{user.name}</span>
              <Button size="sm" variant="outline">Follow</Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FollowSuggestions;
