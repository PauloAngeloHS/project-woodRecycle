import { View, Text, Image, ImageBackground ,Pressable } from "react-native";
import styles from "./styles"

import background from "../../assets/images/backgroundMadeira.jpeg"
import reciclagem from "../../assets/images/simboloRecicladem.png"
import fotoarame from "../../assets/images/trabalhoSnow/fotoArame1.jpeg"
import fotocolando1 from "../../assets/images/trabalhoSnow/fotoColando1.jpeg"
import fotocolando2 from "../../assets/images/trabalhoSnow/fotoColando2.jpeg"
import fotocolando3 from "../../assets/images/trabalhoSnow/fotoColando3.jpeg"
import fotocolado from "../../assets/images/trabalhoSnow/fotoColado.jpeg"
import fotopintando from "../../assets/images/trabalhoSnow/fotoPintado.jpeg"
import fotocompleto1 from "../../assets/images/trabalhoSnow/enfeitesCompletos1.jpeg"
import fotocompleto2 from "../../assets/images/trabalhoSnow/enfeitesCompletos2.jpeg"





export default function Snowman({ navigation }){
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={background} 
                resizeMode="cover" 
                style={{width: '100%', height: "100%"}}
            >
                <View style={styles.content}>
                    <Text style={styles.titulo}>Enfeites para Árvore de Natal</Text>
                    <Image
                        style={{height: 250, width: 250, justifyContent: "center", alignSelf: "center" }}
                        source={fotoarame}
                        contentFit="cover"
                    />
                    <Text></Text>
                
                    <View style={styles.botoesCentro}>
                        <Pressable
                            style={{
                                backgroundColor: '#000',
                                width: 140,
                                height: 55,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 30,
                            }}
                            onPress={() => navigation.goBack()}
                        >
                        <Text
                            style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}
                        >
                            Sobre
                        </Text>
                        </Pressable>
                    </View>
                </View>  
            </ImageBackground>    
        </View>
      );
}