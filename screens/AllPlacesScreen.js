import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import PlacesList from '../components/Places/PlacesList';

const AllPlacesScreen = ({ route }) => {
  const [places, setPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setPlaces((currentPlaces) => [
        ...currentPlaces,
        { ...route.params.place },
      ]);
    }
  }, [isFocused, route]);

  return <PlacesList places={places} />;
};

export default AllPlacesScreen;
