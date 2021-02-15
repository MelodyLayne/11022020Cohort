import { createContext, useState, useContext } from 'react';

import catUrl from '../images/cat.jpg';
import dogUrl from '../images/dog.jpg';

const photos = {
  cat: catUrl,
  dog: dogUrl
}

export const PhotoContext = createContext();
export const usePhoto = () => useContext(PhotoContext)

export default function PhotoProvider(props) {
  const [photoType, setPhotoType] = useState("cat");

  return (
    <PhotoContext.Provider
      value={{
        photoType,
        setPhotoType,
        photoUrl: photos[photoType]
      }}
    >
      {props.children}
    </PhotoContext.Provider>
  )
}
