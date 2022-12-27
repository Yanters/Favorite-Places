import { Image, Pressable, View, Text } from 'react-native';

const PlaceItem = ({ place, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Image source={{ uri: place.imageUri }} />
        <View>
          <Text>{place.title}</Text>
          <Text>{place.address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
