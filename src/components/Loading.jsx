import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loading = () => {
	return (
    <div className='flex items-center justify-center h-screen w-full'>
      <MoonLoader color='#ec4899' size={60} />
    </div>
  );
};

export default Loading;
