import { View, Text, ScrollView } from "react-native";

export default function Settings() {
  return (
    <ScrollView className="h-full">
      <View className="mt-8 ml-8">
        <Text className=" text-black text-[40px] font-bold mb-10">
          Settings
        </Text>
        <View className="flex-col justify-start mr-10 gap-6 mb-10">
          <Text className="text-2xl font-semibold border-b-2 py-4">Menu 1</Text>
          <Text className="text-2xl font-semibold border-b-2 py-4">Menu 2</Text>
          <Text className="text-2xl font-semibold border-b-2 py-4">Menu 3</Text>
          <Text className="text-2xl font-semibold border-b-2 py-4">Menu 4</Text>
          <Text className="text-2xl font-semibold border-b-2 py-4">Menu 5</Text>
          <Text className="text-2xl font-semibold border-b-2 py-4">Menu 6</Text>
          <Text className="text-2xl font-semibold border-b-2 py-4">Menu 7</Text>
          <Text className="text-2xl font-semibold border-b-2 py-4">Menu 8</Text>
          <Text className="text-2xl font-semibold border-b-2 py-4">Menu 9</Text>
        </View>
      </View>
    </ScrollView>
  );
}
