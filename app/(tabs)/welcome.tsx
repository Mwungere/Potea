import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import { LinearGradient } from "expo-linear-gradient";
import useDelayedNavigation from "@/hooks/useDelayedNavigation";

export default function welcome() {

  useDelayedNavigation('/customSlider', 4000)
  return (
    <View className="flex-1 flex justify-center items-center bg-dark-200">
      <ImageBackground
        source={icons.aloevera}
        className=" w-full h-full my-14 mx-3 flex-1 flex justify-end items-center "
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "#0F0D23"]}
          start={{ x: 0, y: 0 }}
          // end={{x: 0.1, y: -0.1}}
          className=" flex-1 absolute w-full h-full"
        />

        <View className=" w-full flex flex-col pl-10">
          <Text className=" text-4xl font-semibold text-white/80">Welcome to <Text className="waving-hand">👋</Text></Text>
          <Text className=" text-7xl font-extrabold text-primary/80 my-5">Potea</Text>
          <Text className="text-white/80 mb-10 max-w-[270px] tracking-wider text-sm font-normal">The best plant e-commerce & online store app of the century for your needs</Text>
        </View>

      </ImageBackground>
    </View>
  );
}
