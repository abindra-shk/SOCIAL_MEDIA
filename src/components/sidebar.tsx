import React from 'react';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  return (
    <div className="p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <Button variant="link">Home</Button>
          </li>
          <li className="mb-2">
            <Button variant="link">Profile</Button>
          </li>
          <li className="mb-2">
            <Button variant="link">Messages</Button>
          </li>
          <li className="mb-2">
            <Button variant="link">Settings</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
