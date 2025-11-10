import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FACEBOOKLOGO, GOOGLELOGO } from "../constants";
import { styles } from "../styles/_joinstyle";

export default function Join() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* 🔹 Top Navigation / Logo */}
      <View style={styles.iconsection}>
        <Image source={require("../assets/images/Logo.png")} />
        <Text style={styles.titleText}>Join Now</Text>
      </View>

      {/* 🔹 Input Form */}
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full Name</Text>
        <TextInput
          style={styles.formControl}
          placeholder="Enter your full name"
        />

        <Text style={styles.formLabel}>Email</Text>
        <TextInput
          style={styles.formControl}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput
            style={styles.passwordControl}
            secureTextEntry={!showPassword}
            placeholder="Enter your password"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={require("../assets/images/eye.png")} />
          </TouchableOpacity>
        </View>

        <Text style={styles.formLabel}>Confirm Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput
            style={styles.passwordControl}
            secureTextEntry={!showPassword}
            placeholder="Confirm password"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={require("../assets/images/eye.png")} />
          </TouchableOpacity>
        </View>
      </View>

      {/* 🔹 Join Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>

      {/* 🔹 Social Media Options */}
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

      {/* 🔹 Bottom Text */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
