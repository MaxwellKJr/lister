import { SafeAreaView, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

export default function HomeScreen() {
  return (
    <SafeAreaView>
      {/* Greetings Section */}
      <StyledView className="flex flex-col p-4 justify-center bg-Apricot"></StyledView>
    </SafeAreaView>
  )
}
