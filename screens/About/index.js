import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles"
import placeHolder from "../../assets/images/placeHolder.png";
function Person(props) {
 return ( <View style={styles.personWrapper}>
  <Image  style={styles.personImage} source={props.image}/>
  <Text style={styles.personName}>{props.name}</Text>
  <Text style={styles.personJob}>{props.job}</Text>
 </View>);
}
export default function About({ navigation }) {
  return <View>
    <View style={styles.persons}>
      <Person name="Jose Miguel" job="Organizador" image={placeHolder}></Person>
      <Person name="Sofia" job="Organizador" image={placeHolder}></Person>
    </View>
    <Pressable onPress={() =>{navigation.navigate('Home')}} style={styles.buttonWrapper}>
      <Text style={styles.buttonText}>Voltar</Text>
    </Pressable>
  </View>;
}
