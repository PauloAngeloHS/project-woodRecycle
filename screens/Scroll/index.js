import { View, Text, Image ,Pressable } from "react-native";
import styles from "./styles"
function Slide(props){
  return (<View>
    <Text>{props.title}</Text>
    <Image source={props.image}/>
    <Text>{props.children}</Text>
  </View>)

}
function FinishButton(){
  return (<Pressable>
    
  </Pressable>)
}
function Index(props){
  let index = () => {
    return <Pressable>

    </Pressable>
  }
  for(let index = 0;index< props.number;index++){
    
  }
  return (<View>

  </View>)
}
export default function Scroll({ navigation }) {
  return (
    <View style={styles.container}>
      <View>

      </View>
     <View>
      <Index/>
      
     </View>
    </View>
  );
}
