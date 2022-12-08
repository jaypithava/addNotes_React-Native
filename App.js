import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoal => [
      ...courseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    console.log(enteredGoalText);
  }

  function deleteNotes(id) {
    setCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter(goal => goal.id !== id);
    });
    console.log('delete note');
  }
  return (
    <View style={styles.appContainer}>
      <Text style={styles.headerTitle}>Add Notes</Text>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteNotes}
              />
            );
          }}
          keyExtractor={(item, Index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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
  goalContainer: {
    flex: 5,
  },
});
