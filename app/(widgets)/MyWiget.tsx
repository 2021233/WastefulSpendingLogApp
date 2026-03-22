import { VoltraAndroid } from "voltra/android"
// import { updateWidget } from "voltra/client"

export default function MyWidget() {
  return (
    <VoltraAndroid.Column
      style={{
        padding: 16,
        backgroundColor: "#3DDC84",
        width: "100%",
        height: "100%"
      }}
      verticalAlignment="center-vertically"
      horizontalAlignment="center-horizontally"
    >
      <VoltraAndroid.Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "bold"
        }}
      >
        Android Widget
      </VoltraAndroid.Text>
      <VoltraAndroid.Text
        style={{
          color: "white"
        }}
      >
        Powered by Voltra & Glance
      </VoltraAndroid.Text>
    </VoltraAndroid.Column>
  )
}

// await updateWidget("my_widget", <MyWidget />)
