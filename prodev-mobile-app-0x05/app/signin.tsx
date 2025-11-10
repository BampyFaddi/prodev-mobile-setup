import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "../constants";
import { useRouter, Link } from "expo-router";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    console.log("[SignIn] Sign in pressed");
    try {
      await router.push("/(home)");
      console.log("[SignIn] router.push('/(home)') called");
    } catch (err) {
      console.error("[SignIn] navigation error:", err);
      Alert.alert("Navigation error", String(err));
    }
  };

  const goToJoin = () => {
    console.log("[SignIn] Join link pressed");
    router.push("/join");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconsection}>
        <Image source={require("../assets/images/Logo.png")} />
        <Text style={styles.titleText}>Welcome Back 👋</Text>
        <Text style={styles.subText}>Sign in to continue</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput
          style={styles.formControl}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput
            style={styles.passwordControl}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text>{showPassword ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Sign in with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={goToJoin}>
          <Text style={styles.signupSubTitleText}>Join Now</Text>
        </TouchableOpacity>

        {/* Visible fallback link for web */}
        <View style={{ marginTop: 8 }}>
          <Link href="/join">
            <Text style={{ color: "#007AFF" }}>Open Join (Link fallback)</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
