import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ReportPage({ navigation }) {
  const [questionOne, setQuestionOne] = useState('');
  const [questionTwo, setQuestionTwo] = useState('');
  const [questionThree, setQuestionThree] = useState('');
  const [questionFour, setQuestionFour] = useState('');
  const [questionFive, setQuestionFive] = useState('');

  const handleSubmit = () => {
    // You will handle the submission of data here
    // For now, just console log the answers
    console.log(questionOne, questionTwo, questionThree, questionFour, questionFive);
    // You might want to navigate to a different screen after submit
    // navigation.navigate('SomeOtherScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Question 1:</Text>
      <TextInput
        style={styles.input}
        value={questionOne}
        onChangeText={setQuestionOne}
        placeholder="Your answer..."
      />

      <Text style={styles.question}>Question 2:</Text>
      <TextInput
        style={styles.input}
        value={questionTwo}
        onChangeText={setQuestionTwo}
        placeholder="Your answer..."
      />

      <Text style={styles.question}>Question 3:</Text>
      <TextInput
        style={styles.input}
        value={questionThree}
        onChangeText={setQuestionThree}
        placeholder="Your answer..."
      />

      <Text style={styles.question}>Question 4:</Text>
      <TextInput
        style={styles.input}
        value={questionFour}
        onChangeText={setQuestionFour}
        placeholder="Your answer..."
      />

      <Text style={styles.question}>Question 5:</Text>
      <TextInput
        style={styles.input}
        value={questionFive}
        onChangeText={setQuestionFive}
        placeholder="Your answer..."
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  question: {
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});