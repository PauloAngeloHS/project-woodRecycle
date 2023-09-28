import { View, Text, Image } from "react-native";

function person(props) {
 return ( <View>
  <Image source={props.image}/>
  <Text>{props.name}</Text>
  <Text>{props.work}</Text>
 </View>);
}
export default function About({ navigation }) {
  return <View></View>;
}
