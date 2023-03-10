import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';
import PlaceItem from './PlaceItem';

const PlacesList = ({ places }) => {
  const navigation = useNavigation();

  const selectPlaceHandler = (id) => {
    navigation.navigate('PlaceDetails', { placeId: id });
  };

  if (!places || places.length === 0)
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places found, maybe start creating some?
        </Text>
      </View>
    );

  return (
    <FlatList
      data={places}
      style={styles.list}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem Item place={item} onPress={selectPlaceHandler} />
      )}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 18,
    color: Colors.primary100,
  },
});
