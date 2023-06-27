import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Clipboard from "expo-clipboard"
import  Input from "./components/Input";
import CustomButton from './components/Button';
import { Formik } from 'formik';
import { getPoem } from './services/openai';
import Ionicons from "@expo/vector-icons/Ionicons"
import { requestValidationSchema } from "./schema/request";
import LottieView from "lottie-react-native"

export default function App() {

  const [ poem , setPoem ] = useState("");
  const [ showPoem , setShowPoem ] = useState(false);
  const [ loading , setLoading ] = useState(false);

  const handleSubmit = async(values)=>{
    setLoading(true);
    const { name , toName , feelings } = values;
    setShowPoem(true);
    setPoem(poem);
    setLoading(false);
  }

  const copyToClipboard = async()=>{
    await Clipboard.setStringAsync(true);
  };

  const Reset = () => {
    setShowPoem(false);
    setPoem("");
  }

  

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
