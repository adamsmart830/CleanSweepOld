import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ReportPage({ navigation }) {
  const [questionOne, setQuestionOne] = useState('');
  const [questionTwo, setQuestionTwo] = useState('');
  const [questionThree, setQuestionThree] = useState('');
  const [questionFour, setQuestionFour] = useState('');
  const [questionFive, setQuestionFive] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reportsList, setReportsList] = useState([]);

  const handleSubmit = async () => {
    
    setIsSubmitting(true);

    // ... validate data before sending
    try {
      const reportData = {
            questionOne,
            questionTwo,
          };

    
    
    
      // Add the new report to the reports list
      setReportsList(currentList => [...currentList, reportData]);

          // Simulate a network request with a timeout
      setTimeout(async () => {
        // Submit your data to the server...
        // Here you would normally have your fetch/axios request
        console.log('Report submitted:', reportData);

        // After submission, set isSubmitting to false to hide temporary page
        setIsSubmitting(false);
        
        // You can navigate to another screen if necessary
        navigation.navigate('./SuccessPage');
      }, 2000);

    } catch (error) {
      console.error('An error occurred during submission:', error);
      setIsSubmitting(false); // Hide temporary page in case of error
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Type of Trash:</Text>
      <TextInput
        style={styles.input}
        value={questionOne}
        onChangeText={setQuestionOne}
        placeholder="Bottles, wrappers, plastics, etc..."
      />

      <Text style={styles.question}>How many people needed for cleanup:</Text>
      <TextInput
        style={styles.input}
        value={questionTwo}
        onChangeText={setQuestionTwo}
        placeholder="1, 2, 5, 10, 100..."
      />

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="#2D3320" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#82B04D'
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
    backgroundColor: 'beige'
  },
  buttonContainer: {
    marginTop: 16,
    borderColor: '#2D3320',
    borderWidth: 2,
    borderRadius: 5,
  }
});