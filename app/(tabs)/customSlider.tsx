import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { icons } from "@/constants/icons";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    text: "We provide high\nquality plants just\nfor you",
    image: icons.imageSlides1,
  },
  {
    id: 2,
    text: "Your satisfaction is\nour number one\n priority",
    image: icons.imageSlides2,
  },

  {
    id: 3,
    text: "Let's Shop Your\nFavorite Plants With\nPotea Now!",
    image: icons.imageSlides3,
  },
];

export default function IntroSlider() {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1 && scrollViewRef.current) {
      const nextIndex = currentIndex + 1;
      scrollViewRef.current.scrollTo({ x: width * nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      router.push("/login");
    }
  };

  // Use useCallback to memoize the scroll handler
  const handleScroll = React.useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / width);
    setCurrentIndex(newIndex);
  }, []);

  return (
    <View className="flex-1">
      {/* Skip Button */}
      <TouchableOpacity
        className="absolute top-12 right-6 z-10 px-4 py-2 bg-gray-100 rounded-full"
        onPress={() => router.push("/login")}
      >
        <Text className="text-gray-800 font-medium">Skip</Text>
      </TouchableOpacity>

      {/* Slides */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        className="flex-1"
      >
        {slides.map((slide) => (
          <View
            key={slide.id}
            className="flex-1 flex gap-y-10 items-center justify-center p-8 bg-dark-200"
            style={{ width }}
          >
            <Image
              source={slide.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <Text className="text-center text-white/80 leading-normal font-semibold text-4xl mb-10">
              {slide.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Controls */}
      <View className="flex w-full items-center px-6 pb-8 absolute bottom-0 mb-10">
        {/* Dots */}
        <View className="flex-row mb-4">
          {slides.map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === currentIndex ? "bg-primary/80 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </View>

        {/* Next Button */}
        <TouchableOpacity
          className="px-6 w-full items-center rounded-3xl py-3 bg-primary/80"
          onPress={handleNext}
        >
          <Text className="text-white font-medium">
            {currentIndex === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}