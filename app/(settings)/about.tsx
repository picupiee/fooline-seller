import { Link, useRouter } from "expo-router";
import { View, Text, ScrollView, Pressable } from "react-native";

export default function About() {
  const navigation = useRouter();
  const devName = (
    <Link href="https://www.x.com/picupiee">
      <Text className="font-bold text-blue-400">@picupiee</Text>
    </Link>
  );

  return (
    <ScrollView className="h-full">
      <View className="mt-8">
        <Text className="text-black text-[40px] font-bold mb-10 text-center">
          About this app
        </Text>
      </View>
      <Text className="p-2 m-2 text-center text-lg">
        This app is developed and maintained by {devName} in order to test the
        capability and efficiency of the app toward better future for
        neighborhood's transaction.
      </Text>
      <Text className="p-2 m-2 text-center text-lg">
        Hopefully, people around the neighborhood will use this app for selling
        and buying their item without having hassle to chat via Whatsapp or if
        stock is available or not.
      </Text>
      <Pressable onPress={() => navigation.back()}>
        <Text className="text-center text-xl">Go Back to Home</Text>
      </Pressable>
    </ScrollView>
  );
}
