import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

const index = () => {
  const[isClicked,setisClicked]=useState(false);
  const handleButtonClick =()=>{
    setisClicked(!isClicked)
  }
  return (
   <View className='flex-1 bg-gray-50'>
    <TouchableOpacity onPress={handleButtonClick} className={`absolute bottom-24 left-5 right-5 p-5 rounded-lg ${isClicked ? 'bg-green-500' : 'bg-blue-500'}`}>
      <Text className='text-xl'>CLick AR Button</Text>
    </TouchableOpacity>
   </View>
  )
}

export default index

const styles = StyleSheet.create({})