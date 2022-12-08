import {
  Button,
  StyleSheet,
  View,
  TextInput,
  Modal,
  Text,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.length === 0) {
      Alert.alert('Please Enter Something!!');
    } else {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText('');
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>Add Notes</Text>
      </View>
      <View style={styles.mainView}>
        <LottieView
          source={require('../assets/notes.json')}
          autoPlay
          loop={true}
        />
        {/* <Image
          style={styles.image}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075908.png',
          }}
        /> */}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Please Enter Your Notes!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonView}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Notes"
              onPress={addGoalHandler}
              color="#5e0acc"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  inputContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 24,
    borderBottomWidth: 4,
    padding: 16,
    backgroundColor: '#6c6dff',
  },
  textInput: {
    borderWidth: 3,
    borderColor: '#e4d0ff',
    width: '100%',
    marginRight: 8,
    padding: 8,
    color: '#000000',
    borderRadius: 6,
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
export default GoalInput;
