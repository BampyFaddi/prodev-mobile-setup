import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FACEBOOKLOGO, GOOGLELOGO } from "../constants";
import { styles } from "../styles/_joinstyle";
import { useRouter, Link } from "expo-router";

export default function Join() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleJoin = async () => {
    console.log("[Join] Join button pressed");
    try {
      // simulate auth success => navigate to home
      await router.push("/(home)");
      console.log("[Join] router.push('/(home)') called");
    } catch (err) {
      console.error("[Join] navigation error:", err);
      Alert.alert("Navigation error", String(err));
    }
  };

  const goToSignIn = () => {
    console.log("[Join] Sign In link pressed");
    router.push("/signin");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconsection}>
        <Image source={require("../assets/images/Logo.png")} />
        <Text style={styles.titleText}>Join Now</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full Name</Text>
        <TextInput style={styles.formControl} placeholder="Enter your full name" />

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
            secureTextEntry={!showPassword}
            placeholder="Enter your password"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text>{showPassword ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.formLabel}>Confirm Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput
            style={styles.passwordControl}
            secureTextEntry={!showConfirmPassword}
            placeholder="Confirm your password"
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Text>{showConfirmPassword ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={handleJoin}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or join with</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity onPress={goToSignIn}>
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 8 }}>
          <Link href="/signin">
            <Text style={{ color: "#007AFF" }}>Open Signin (Link fallback)</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
