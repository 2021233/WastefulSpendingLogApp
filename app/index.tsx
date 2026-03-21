import { Text, View } from "react-native";
import { VoltraAndroid } from 'voltra';
import { updateWidget } from 'voltra/client';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const MyWidget = () => (
  <VoltraAndroid.Column
    style={{
      padding: 16,
      backgroundColor: '#3DDC84',
      width: '100%',
      height: '100%',
    }}
    verticalAlignment="center-vertically"
    horizontalAlignment="center-horizontally"
  >
    <VoltraAndroid.Text
      style={{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      }}
    >
      Android Widget
    </VoltraAndroid.Text>
    <VoltraAndroid.Text
      style={{
        color: 'white',
      }}
    >
      Powered by Voltra & Glance
    </VoltraAndroid.Text>
  </VoltraAndroid.Column>
)

await updateWidget('my_widget', <MyWidget />);
