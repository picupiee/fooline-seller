import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase"; // Import Firebase auth

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const router = useRouter();

  const handleAuth = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        // Login logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        router.push("/dashboard/(tabs)"); // Redirect to main page after login
      } else {
        // Register logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        Alert.alert("Success", "Account created successfully!");
        setIsLogin(true); // Switch back to login form after successful registration
      }
    } catch (error: any) {
      let errorMessage = "An error occurred. Please try again.";
      if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      } else if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        errorMessage = "Invalid email or password.";
      } else if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email already in use.";
      }
      Alert.alert(isLogin ? "Login Failed" : "Sign Up Failed", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-slate-300">
      <Text className="text-2xl mb-4 font-semibold">
        {isLogin ? "Welcome to FooLine Seller" : "Create an Account"}
      </Text>
      <View className="w-56">
        <TextInput
          className="border border-black p-2 m-2 rounded-md"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          className="border border-black p-2 m-2 rounded-md"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Pressable
          onPress={handleAuth}
          className="flex items-center justify-center"
          disabled={loading}
        >
          <View className="bg-blue-600 mt-4 rounded-md py-2 px-8">
            {loading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text className="text-center font-semibold text-white">
                {isLogin ? "Login" : "Register"}
              </Text>
            )}
          </View>
        </Pressable>
        <Pressable onPress={() => setIsLogin(!isLogin)} className="mt-4">
          <Text className="text-center text-blue-600">
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AuthPage;
