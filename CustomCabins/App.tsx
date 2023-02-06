import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { AppLayout } from '@Components';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  return (
    fontsLoaded && (
      <SafeAreaView style={styles.container}>
        <AppLayout />
      </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
