import { Text, View } from 'react-native'

export default function Page() {
  return (
    <View className="flex flex-col h-screen items-start p-4 justify-center bg-white">
      <View>
        <Text className="text-black font-black text-4xl">Hello World</Text>
        <Text>This is the first page of your app.</Text>
      </View>
    </View>
  )
}
