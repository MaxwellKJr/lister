import { useState } from 'react'
import { Link } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView, Text, View, TextInput, Pressable } from 'react-native'
import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledPressable = styled(Pressable)

interface User {
  name: string
}

export default function HomeScreen() {
  const [name, setName] = useState('')
  const handleOnChangeText = (text: string) => setName(text)

  const handleNameSubmit = async (user: User) => {
    await AsyncStorage.setItem('user', JSON.stringify(user))
  }

  return (
    <SafeAreaView>
      {/* Greetings Section */}
      <StyledView className="flex p-4 justify-center items-start bg-Apricot h-screen">
        <StyledText className="font-bold text-2xl">Hello,</StyledText>
        <StyledText className="font-black text-4xl">What is your name?</StyledText>
        <StyledView className="w-full mt-4">
          <StyledText className={name.trim().length == 1 ? `text-red-600 pb-1 ml-4` : `hidden`}>
            Not enough characters
          </StyledText>
          <StyledTextInput
            value={name}
            onChangeText={handleOnChangeText}
            className={
              name.trim().length == 1
                ? `w-full border-red-600 border-2 rounded-full mb-4 py-2 px-6`
                : `w-full border-black border-2 rounded-full mb-4 py-2 px-6`
            }
            placeholder="Enter first name (e.g. Maxwell)"
          />
        </StyledView>
        <StyledPressable
          className={
            name.trim().length > 1
              ? `w-full p-4 mt-4 mb-8 bg-White rounded-full`
              : `hidden w-full p-4 mt-4 mb-8 bg-gray-500 rounded-full`
          }
          onPress={handleNameSubmit}
        >
          <Link
            href="/home"
            className={
              name.trim().length >= 1
                ? `text-center font-bold text-xl`
                : `text-center font-bold text-xl border-gray-800`
            }
          >
            <StyledText>Enter name</StyledText>
          </Link>
        </StyledPressable>
      </StyledView>
    </SafeAreaView>
  )
}
