import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals(currentCourseGoal => [...courseGoals, enteredGoalText]);
    console.log(enteredGoalText);
  }
  return (
    <View style={styles.appContainer}>
      <Text style={styles.headerTitle}>Add Notes</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Notes!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Notes" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        {courseGoals.map(goal => (
          <View style={styles.goalItem}>
            <Text key="{goal}">{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    margin: 10,
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 24,
    borderBottomWidth: 3,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
});
