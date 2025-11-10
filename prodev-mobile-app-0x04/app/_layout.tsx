import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // hides the default header
      }}
    >
      <Stack.Screen name="/" />       {/* Landing page */}
      <Stack.Screen name="join" />    {/* Join page */}
      <Stack.Screen name="signin" />  {/* Sign In page */}
    </Stack>
  );
}
