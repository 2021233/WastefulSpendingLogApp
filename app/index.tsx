import { Text, View } from "react-native"
import { VoltraAndroid } from "voltra"
import { VoltraWidgetPreview } from "voltra/android/client"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <MyWidgetPreview />
    </View>
  )
}

export function MyWidgetPreview() {
  return (
    <VoltraWidgetPreview
      family="mediumWide"
      style={{ backgroundColor: "#f0f0f0", borderRadius: 16 }}
    >
      <VoltraAndroid.Column style={{ padding: 16 }}>
        <VoltraAndroid.Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Awesome Wedget
        </VoltraAndroid.Text>
      </VoltraAndroid.Column>
    </VoltraWidgetPreview>
  )
}
