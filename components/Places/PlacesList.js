import { FlatList, StyleSheet } from 'react-native';

const PlacesList = ({ places }) => {
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
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} onPress={() => {}} />}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 18,
  },
});
