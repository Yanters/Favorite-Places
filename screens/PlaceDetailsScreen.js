import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import OutlinedButton from '../components/UI/OutlinedButton';
import { Colors } from '../constants/colors';
import { fetchPlaceDetails } from '../util/database';

const PlaceDetailsScreen = ({ route, navigation }) => {
  const [placeDetails, setPlaceDetails] = useState();
  const showOnMapHandler = () => {};

  const { placeId } = route.params;

  useEffect(() => {
    const loadPlaceDetails = async () => {
      const response = await fetchPlaceDetails(placeId);
      setPlaceDetails(response);
      navigation.setOptions({ title: response.title });
    };
    loadPlaceDetails();
  }, [placeId]);

  if (!placeDetails) {
    return (
      <View style={styles.fallback}>
        <Text>Loading Place Details...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: placeDetails.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{placeDetails.address}</Text>
        </View>
        <OutlinedButton icon='map' onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetailsScreen;

const styles = StyleSheet.create({
  fallback: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '40%',
    minHeight: 300,
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
