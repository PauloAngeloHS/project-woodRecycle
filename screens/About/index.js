import { View, Text, Image, Pressable,ImageBackground  } from "react-native";
import styles from "./styles"
import background from "../../assets/images/backgroundMadeira.jpeg"
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
    <ImageBackground 
        source={background} 
        resizeMode="cover" 
        style={{width: '100%', height: "100%"}}
    >
      <View style={styles.persons}>
        <View style={styles.espaco}>
        <Person name="Jose Miguel" job="Ajudou nos custos, na montagem do aplicativo e na montagem dos itens reciclados." image={placeHolder}></Person>
        </View>
        <Person name="Sofia" job="Montadora principal dos itens, trouxe o que iriamos precisar usar." image={placeHolder}></Person>
        <View style={styles.espaco}>
        <Person name="Murilo" job="Ajudou nos custos, ficou responsável por pintar os itens." image={placeHolder}></Person>
        </View>
        <Person name="Paulo" job="Responsável principal pelo aplicativo." image={placeHolder}></Person>
        <View style={styles.espaco}>
        <Person name="Miguel" job="Responsável por comprar as tintas e por pintar os itens." image={placeHolder}></Person>
        </View>
        <Person name="Luis Felipe" job="Ajudou nos custos, na montagem e na pintura dos itens." image={placeHolder}></Person>
      </View>
      <Pressable onPress={() =>{navigation.navigate('Home')}} style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
    </ImageBackground>
  </View>;
}
