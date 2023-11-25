import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useLocalSearchParams, useRouter } from 'expo-router'
import Anticons from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-virtualized-view'
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function exerciseDetails() {
    const item = useLocalSearchParams()
    const router = useRouter()
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
        source={{uri: item.gifUrl}}
        contentFit='cover'
        style={{width: wp(100), height: wp(100)}}
        className="rounded-b-[40px]"
        />
      </View>

      <TouchableOpacity onPress={() => router.back()}
     className="mx-2 absolute rounded-full mt-14 right-0">
         <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>

      {/* details */}
      <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 60}}>
        <Animated.Text style={{fontSize: hp(3.5)}}
        className="font-semibold text-neutral-800 tracking-wide"
        entering={FadeInDown.duration(300).springify()}>
            {item.name}
        </Animated.Text>

        <Animated.Text entering={FadeInDown.delay(100).duration(300).springify()} style={{fontSize: hp(2)}}
        className="text-neutral-800 tracking-wide">
            Equipment <Text  className="text-neutral-800 font-bold">
                {item?.equipment}
            </Text>
        </Animated.Text>
        
        <Animated.Text  entering={FadeInDown.delay(300).duration(300).springify()} style={{fontSize: hp(2)}}
        className="text-neutral-800 tracking-wide">
            Secondary Muscles <Text  className="text-neutral-800 font-bold">
                {item?.secondaryMuscles}
            </Text>
        </Animated.Text>

        <Animated.Text  entering={FadeInDown.delay(400).duration(300).springify()} style={{fontSize: hp(2)}}
        className="text-neutral-800 tracking-wide">
            Target <Text  className="text-neutral-800 font-bold">
                {item?.target}
            </Text>
        </Animated.Text>

        <Animated.Text  entering={FadeInDown.delay(400).duration(300).springify()} style={{fontSize: hp(3)}}
        className="font-semibold text-neutral-800 tracking-wide">
            Instructions
        </Animated.Text>

        {
            item?.instructions.split(',').map((instructions, index) => {
                return (
                  <Animated.Text
                  entering={FadeInDown.delay((index+5)*100).duration(300).springify()}
                  key={instructions}
                  style={{fontSize: hp(1.7)}}
                  className="text-neutral-800">
                     {instructions}
                  </Animated.Text>
                )
            })
        }
      </ScrollView>
    </View>
  )
}