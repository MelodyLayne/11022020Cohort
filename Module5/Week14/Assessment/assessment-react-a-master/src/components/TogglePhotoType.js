import React from 'react';
import { usePhoto } from '../context/PhotoContext';

const TogglePhotoType = () => {
  const { photoType, setPhotoType } = usePhoto();

  return (
    <div className="toggle-photo-type">
      <h2>Cat or Dog?</h2>
      <label>
        <input
          type="radio"
          value="cat"
          name="photoType"
          checked={photoType === 'cat'}
          onChange={(e) => setPhotoType('cat')}
          />
        Cat
      </label>
      <label>
        <input
          type="radio"
          value="dog"
          name="photoType"
          checked={photoType === 'dog'}
          onChange={(e) => setPhotoType('dog')}
        />
        Dog
      </label>
    </div>
  );
}

export default TogglePhotoType;
