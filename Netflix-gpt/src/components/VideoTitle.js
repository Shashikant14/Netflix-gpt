import React from 'react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r w-screen aspect-video from black'>
      <h1 className='font-bold text-5xl'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white rounded-lg text-black text-xl p-4 px-12 hover:bg-opacity-80'>▶️ Play</button>
        <button className='mx-2 bg-gray-500 rounded-lg bg-opacity-50 text-white text-xl p-4 px-12'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
