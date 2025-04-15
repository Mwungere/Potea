import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { icons } from "@/constants/icons";

const loginOptions = [
  {
    id: 1,
    icon: icons.facebook,
    provider: "Facebook",
  },
  {
    id: 2,
    icon: icons.google,
    provider: "Google",
  },
  {
    id: 3,
    icon: icons.apple,
    provider: "Apple",
  },
];

export default function login() {
  const router = useRouter();
  return (
    <View className=" flex-1 bg-dark-200">
      <SafeAreaView className=" flex flex-1 justify-center items-center">
        <TouchableOpacity
          onPress={() => router.back()}
          className="self-start mt-8 ml-6"
        >
          <Feather name="arrow-left" size={20} color="white" />
        </TouchableOpacity>

        <LottieView
        
          source={require("../../assets/lotties/target.json")}
          autoPlay
          loop
          style={{ width: 300, height: 300 }}
        ></LottieView>
        <View className="flex-1 flex justify-center gap-y-5 items-center -mt-10">
          <Text className=" text-white text-4xl font-semibold">
            Let's Get you in
          </Text>
          <View className=" w-full flex px-4">
            <View className=" min-w-full flex justify-center items-center gap-y-3">
              {loginOptions.map(({ id, icon, provider }) => (
                <TouchableOpacity
                  key={id}
                  className=" flex flex-row w-full items-center justify-center gap-x-3 bg-dark-100 rounded-xl h-12"
                >
                  <Image
                    source={icon}
                    className={`${id == 3 ? "size-10" : "size-[40px]"}`}
                  />
                  <Text className="text-white font-semibold">
                    Continue with {provider}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View className="flex flex-row w-full justify-center items-center gap-x-4 px-2 my-6">
              <View className="flex-1 border border-dark-100" />

              <Text className=" text-white text-lg font-bold">or</Text>
              <View className="flex-1 border border-dark-100" />
            </View>

            <TouchableOpacity className="px-6 min-w-full items-center rounded-3xl py-3 bg-primary/80">
              <Text className="text-white font-medium">
                Sign in with password
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className=" mt-5 self-center">
              <Link href="/login">
                <Text className=" text-sm text-white">Don't have an account? <Text className="text-primary font-semibold">Sign-up</Text></Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
