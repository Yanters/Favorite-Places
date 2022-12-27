import { Image, Pressable, View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const PlaceItem = ({ place, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
    >
      <Image source={{ uri: place.imageUri }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: Colors.primary500,
    // Android shadow
    elevation: 5,
    // iOS shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
  },
  pressed: {
    opacity: 0.5,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.gray700,
  },
  address: {
    fontSize: 12,
    color: Colors.gray700,
  },
});
