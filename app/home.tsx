import { SafeAreaView, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

export default function HomeScreen() {
  return (
    <SafeAreaView>
      {/* Greetings Section */}
      <StyledView className="flex flex-col p-4 justify-center bg-Apricot">
        <StyledView className="flex flex-col py-4 mt-10">
          <StyledText className="text-white text-lg">Hello,</StyledText>
          <StyledText className="text-white font-black text-3xl">Maxwell.</StyledText>
        </StyledView>

        {/* Reminder Section */}
        <StyledView className="mt-4 px-4 py-6 bg-pink-500 rounded-2xl">
          <StyledView className="">
            <StyledText className="font-bold text-xl text-white">
              Alright, what is on your mind?
            </StyledText>
            <StyledText className="text-white text-md">
              Remember, lists are things you care about at the moment.
            </StyledText>
          </StyledView>
        </StyledView>

        <StyledView className="mt-5">
          <StyledView>
            <StyledText className="font-bold text-white text-2xl mb-4">Current Lists</StyledText>
            <StyledView>
              <StyledView className="p-4 bg-pink-800 rounded-2xl">
                <StyledText className="text-white">Call Her</StyledText>
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
    </SafeAreaView>
  )
}
