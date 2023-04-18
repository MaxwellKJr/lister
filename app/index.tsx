import { SafeAreaView, Text, View, TextInput, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledPressable = styled(Pressable)

export default function HomeScreen() {
  return (
    <SafeAreaView>
      {/* Greetings Section */}
      <StyledView className="flex p-4 justify-center items-start bg-Apricot h-screen">
        <StyledText className="font-bold text-2xl">Hello,</StyledText>
        <StyledText className="font-black text-4xl">What is your name?</StyledText>
        <StyledTextInput
          className="w-full border-black border-2 rounded-2xl my-4 p-2"
          placeholder="Enter first name"
        />
        <StyledPressable className="w-full p-4 my-4 bg-white rounded-full">
          <StyledText className="text-center font-bold text-xl">Enter name</StyledText>
        </StyledPressable>
      </StyledView>
    </SafeAreaView>
  )
}
