import PlaceForm from '../components/Places/PlaceForm';

const AddPlaceScreen = ({ navigation }) => {
  const createPlaceHandler = (place) => {
    navigation.navigate('AllPlaces', { place });
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlaceScreen;
