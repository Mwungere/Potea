import { icons } from '@/constants/icons';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Platform, View, Text, LogBox } from 'react-native';
import {BallIndicator} from 'react-native-indicators'



export default function HomeScreen() {

  const router = useRouter()

  useEffect(() => {
    LogBox.ignoreLogs([
      'A props object containing a "key" prop is being spread into JSX',
    ]);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {

      router.push('/welcome')

      return () => clearTimeout(timer);
    }, 1000)


  },[router])

  return (
    <View className=' flex-1 flex flex-col justify-center items-center bg-dark-200'>
      
      <Image source={icons.logo} className='size-44 -top-16'/>
      <View className='w-full h-[300px] absolute bottom-0'>
         <BallIndicator color='#04b454' />
      </View>

    </View>
    )
  }   