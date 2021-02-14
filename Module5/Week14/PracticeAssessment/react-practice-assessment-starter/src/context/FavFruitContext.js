import { createContext, useState, useContext } from 'react';

export const FavFruitContext = createContext();
export const useFavFruit = () => useContext(FavFruitContext);

export default function PhotoProvider(props) {
  const [favFruitId, setFavFruitId] = useState(null);

  return (
    <FavFruitContext.Provider
      value={{
        favFruitId,
        setFavFruitId
      }}
    >
      {props.children}
    </FavFruitContext.Provider>
  )
}