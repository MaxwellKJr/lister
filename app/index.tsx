import { SafeAreaView, Text, View } from 'react-native'
import Header from '../components/Header'

export default function Page() {
  return (
    <SafeAreaView>
      {/* Greetings Section */}
      <View className="flex flex-col p-4 justify-center bg-pink-600">
        <View className="flex flex-col py-4 mt-10">
          <Text className="text-white text-lg">Hello,</Text>
          <Text className="text-white font-black text-3xl">Maxwell.</Text>
        </View>

        {/* Reminder Section */}
        <View className="mt-4 px-4 py-6 bg-pink-500 rounded-2xl">
          <View className="">
            <Text className="font-bold text-xl text-white">Alright, what is on your mind?</Text>
            <Text className="text-white text-md">
              Remember, lists are things you care about at the moment.
            </Text>
          </View>
        </View>

        <View className="mt-5">
          <View>
            <Text className="font-bold text-white text-2xl mb-4">Current Lists</Text>
            <View>
              <View className="p-4 bg-pink-800 rounded-2xl">
                <Text className="text-white">Call Her</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
