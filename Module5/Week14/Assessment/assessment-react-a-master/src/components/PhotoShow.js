import React from 'react';
import { usePhoto } from '../context/PhotoContext';

const PhotoShow = () => {
  const { photoUrl } = usePhoto();

  return (
    <div className='photo-show'>
      <h2>Photo Show</h2>
      <img src={photoUrl} alt='a cat or a dog' />
    </div>
  );
}

export default PhotoShow;
