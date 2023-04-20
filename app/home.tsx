import { SafeAreaView, Text, View } from 'react-native'
import { styled } from 'nativewind'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const StyledView = styled(View)
const StyledText = styled(Text)

interface User {
  name: string
}

export default function HomeScreen() {
  const [user, setUser] = useState<User>({ name: '' })

  const fetchUser = async () => {
    const result = await AsyncStorage.getItem('user')

    if (result !== null) {
      setUser(JSON.parse(result))
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <SafeAreaView>
      {/* Greetings Section */}
      <StyledView className="flex flex-col p-4 justify-center bg-Apricot">
        <StyledView className="flex flex-col py-4 mt-10">
          <StyledText className="text-black text-lg">Hello,</StyledText>
          <StyledText className="text-black font-black text-3xl">{user.name}</StyledText>
        </StyledView>

        {/* Reminder Section */}
        <StyledView className="mt-4 px-4 py-6 bg-White rounded-2xl">
          <StyledView className="">
            <StyledText className="font-bold text-xl text-black">
              Alright, what is on your mind?
            </StyledText>
            <StyledText className="text-black text-md">
              Remember, lists are things you care about at the moment.
            </StyledText>
          </StyledView>
        </StyledView>

        <StyledView className="mt-5">
          <StyledView>
            <StyledText className="font-bold text-black text-2xl mb-4">Current Lists</StyledText>
            <StyledView>
              <StyledView className="p-4 bg-ElectricBlue rounded-2xl">
                <StyledText className="text-black">Call Her</StyledText>
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
    </SafeAreaView>
  )
}
