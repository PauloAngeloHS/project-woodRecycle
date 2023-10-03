import { View, Text, Image, ImageBackground ,Pressable } from "react-native";
import styles from "./styles"

import background from "../../assets/images/backgroundMadeira.jpeg"
import reciclagem from "../../assets/images/simboloRecicladem.png"


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={background} 
        resizeMode="cover" 
        style={{width: '100%', height: "100%"}}
      >
        <View style={styles.content}>
        <Image
        style={{height: 250, width: 250, justifyContent: "center", alignSelf: "center" }}
        source={reciclagem}
        contentFit="cover"
      />
      <Text style={styles.titulo}>Madeira</Text>
      <View style={styles.botoesCentro}>
        <Pressable
            style={{
              backgroundColor: '#000',
              width: 140,
              height: 55,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate('Snow')}>
            <Text
              style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
              Trabalho
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#000',
              width: 140,
              height: 55,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}
            onPress={() => navigation.navigate('About')}>
            <Text
              style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
              Sobre
            </Text>
          </Pressable>
          </View>
        </View>  
      </ImageBackground>    
    </View>
  );
}
