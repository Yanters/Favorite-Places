import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import PlacesList from '../components/Places/PlacesList';
import { fetchPlaces } from '../util/database';

const AllPlacesScreen = ({ route }) => {
  const [places, setPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadPlaces = async () => {
      const dbResult = await fetchPlaces();
      setPlaces(dbResult);
    };

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={places} />;
};

export default AllPlacesScreen;
