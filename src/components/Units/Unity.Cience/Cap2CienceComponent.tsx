import React from 'react'
import { Button, GestureResponderEvent, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from '../../../firebase/firebaseConfig';
import { assignUnityToUser } from '../../../firebase/usersStorage';
import UnityContentList from '../../common/UnityContentList';

export default function Cap2CienceComponent({ navigation }: any) {
    const unities = [
        { title: "Oscilaciones y ondas", data: ["https://drive.google.com/file/d/1h3uJjvJGEu8UPlMCD6Y7KMnOuO_U7oBt/view?usp=share_link"] },
        { title: "Ejercicios onda", data: ["https://drive.google.com/file/d/1kd-62yL5ql8RpCGOrwcMMyvOlKnaDjU_/view?usp=share_link"] }
    ]
    const assignUnity = (event: GestureResponderEvent): void => {
        const user = auth.currentUser;
        if (user) {
            assignUnityToUser(user.uid, { id: 2, name: 'Cap2Science', course: 'Science' })
        }
    }
    return (
        <>

            <View style={styles.container}>
                <Text>Capitulo 2 Science</Text>
                <UnityContentList list={unities} />
                <Button title='Completado' color={'green'} onPress={(e) => assignUnity(e)} />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
  container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
      
  },
  buttonText: {
      fontSize: 25,
      color: 'white',
  },
  buttons:{
      width: '80%',
      height: 60,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      
  },
  red: {
      backgroundColor: '#EC4141',
      opacity: 0.8,
  }
  ,
  blue: {
      backgroundColor: '#414BEC',
      opacity: 1,
  }
  ,
  yellow: {
      backgroundColor: '#DDE71E',
      opacity: 0.8,
  }
  ,
  green: {
      backgroundColor: '#23D634',
      opacity: 0.8,
  }
  ,
  Textx:{
      fontSize: 60,
      fontWeight: 'bold',
      color: 'black',
      marginVertical: 10,
      marginBottom: 100,
      
  }
});
