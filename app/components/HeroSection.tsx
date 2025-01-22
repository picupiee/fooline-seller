import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

export default function HeroSection() {
    return (
        <ImageBackground source={require('@/assets/images/react-logo.png')} className='w-full'>
            <View className='flex-1 items-center justify-center'>
                <Text className='text-black font-bold text-3xl'>Welcome to FooLine</Text>
                <Text className='text-black font-semibold text-lg'>Neighborhood Food Marketplace</Text>
            </View>
        </ImageBackground>
    )
}