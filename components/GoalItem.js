import {Text, StyleSheet, Pressable, View} from 'react-native';

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{color: '#dddddd'}}
      onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={{color: 'white'}}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
});
export default GoalItem;
