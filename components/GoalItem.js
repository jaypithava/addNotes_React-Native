import {Text, StyleSheet, Pressable, View} from 'react-native';

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{color: '#dddddd'}}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({pressed})=> pressed && styles.pressedItem}>
      <View style={styles.goalItem}>
        <Text style={{color: 'white', padding: 8,}}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
export default GoalItem;
