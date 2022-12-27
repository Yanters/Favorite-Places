import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/colors';

const Button = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    backgroundColor: Colors.primary800,
    // Android shadow
    elevation: 5,
    // iOS shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    color: Colors.primary50,
    textAlign: 'center',
    textSize: 18,
  },
});
