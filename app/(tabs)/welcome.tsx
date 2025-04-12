import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import { LinearGradient } from 'expo-linear-gradient';


export default function explore() {
  return (
    <View className='flex-1 justify-center items-center bg-dark-200'>
      <ImageBackground source={icons.aloevera} className=' w-full h-full my-14 mx-3 flex-1'>

      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', '#0F0D23']}
        start={{ x: 0.1, y: 0.2 }}
        className=" flex-1"    
      />
      </ImageBackground>
    </View>
  )
}