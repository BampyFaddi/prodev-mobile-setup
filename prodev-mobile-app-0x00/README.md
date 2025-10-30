# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# 📱 Task 1 – First Expo Mobile App

## 🧭 Overview
This task involved creating the first mobile app using **Expo Router**.  
The setup was successfully tested via the **Expo Web Preview** since my mobile device camera is currently non-functional.

---

## ⚙️ Steps Followed
1. Navigated to the project directory:
   ```bash
   cd C:\Users\Administrator\Desktop\prodev-mobile-setup
Created the new Expo project:

bash
Copy code
npx create-expo-app@latest prodev-mobile-app-0x00
Moved into the new folder:

bash
Copy code
cd prodev-mobile-app-0x00
Launched the project in web mode:

bash
Copy code
npx expo start
and pressed w to open in browser.

🧩 App Edit
Opened:

bash
Copy code
app/(tabs)/index.tsx
and modified the title from:

tsx
Copy code
<ThemedText type="title">Welcome!</ThemedText>
to:

tsx
Copy code
<ThemedText type="title">First App Created 👋</ThemedText>
This confirmed live reload and successful rendering in Expo Web.

🧪 Testing
The app loaded correctly at:

arduino
Copy code
http://localhost:19006
and displayed:

“First App Created 👋”

🔁 Reset Project Command
Executed:

bash
Copy code
npm run reset-project
Observation:
This command restructured the app, cleaning the /app directory and restoring the original template — helpful for fresh setups.

🧠 Conclusion
Task 1 successfully completed:

Expo app scaffolded using Router template

Web preview verified working

App edited and rendered correctly

Reset command observed and documented