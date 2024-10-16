import { HelloWave } from "@/components/HelloWave"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import * as NavigationBar from "expo-navigation-bar"
import { Button } from "react-native"

export default function HomeScreen() {
  return (
    <ThemedView style={{ paddingTop: 100 }}>
      <Button
        title="Change to green"
        onPress={() => {
          configureNavigationBar().catch((err) => console.error(err));
        }}
      ></Button>
    </ThemedView>
  );
}

async function configureNavigationBar() {
  await NavigationBar.setBackgroundColorAsync("#00ff00");
}
