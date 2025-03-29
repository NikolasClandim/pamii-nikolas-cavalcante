import { Text, View } from "react-native";
import { Button, Icon, Input} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';


export default function Index() {
  return (


    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>ola</Text>
      <Button title="Solid" />
      <Button radius={"sm"} type="solid">
            Save
         <Icon name="save" color="white" />
      </Button>

      
      <Button
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ["#FF9800", "#F44336"],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
>
  Linear Gradient
</Button>
  


      
    </View>
  );
}
