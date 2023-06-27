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
    <View className="flex-1 items-center justify-center bg-black">
    <Text className="text-2xl font-bold italic text-white">
      Poem Generator

    </Text>

    <Text className="text-sm font-bold italic text-center text-white">
      Express your feelings ❣️
    </Text>

    <View className="w-10/12">
    {!showPoem ? (
      <Formik
        validationSchema={requestValidationSchema}
        initialValues={{name : "" , toName : "" , feelings : ""}}
        onSubmit={handleSubmit}
        >
        {({ handleChange , handleBlur , handleSubmit  , values , errors }) => (
          <View>
            <Input
              value = {values.name}
              onBlur = {handleBlur("toName")}
              onChangeText={handleChange("toName")}
              placeholder="Who are you sending this to?"
            />

            {errors.toName && (
              <Text className="text-red-500 mt-1">{errors.toName}</Text>
            )}
            <Input
              style={{
                height : 100 , 
                textAlignVertical : "top",
              }}
              placeholder = "What are your feelings?"
              onChangeText = {handleChange("feelings")}
              onBlur={handleBlur("feelings")}
              value={values.feelings}
              multiline={true}
            />
            {errors.feelings && (
              <Text className="text-red-500 mt-1">{errors.feelings}</Text>
            )}
            <CustomButton
            style={{
              flexDirection : "row",
            }}
            onPress={handleSubmit}
            title="Generate">

            </CustomButton>
            {loading && (
              <View
              style={[
                styleSheet.absoluteFillObject ,
                {
                  justifyContent : "center",
                  alignItems : "center",
                  backgroundColor : "rgba(0,0,0,0.5)"
                },
              ]}>

                <LottieView
                  sorce={require("./assets/heart-loader.json")}
                />

              </View>
            )}

            
          </View>
        )}

      </Formik>
    )

    }
    </View>
      
    </View>
  );
}
