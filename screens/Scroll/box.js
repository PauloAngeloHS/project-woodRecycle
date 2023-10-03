import { View, Text, Image, ImageBackground ,Pressable } from "react-native";
import styles from "./styles"

import background from "../../assets/images/backgroundMadeira.jpeg"
import reciclagem from "../../assets/images/simboloRecicladem.png"
import fotolixando1 from "../../assets/images/trabalhoBox/fotoLixando1.jpeg"
import fotolixando2 from "../../assets/images/trabalhoBox/fotoLixando2.jpeg"
import fotocpintando1 from "../../assets/images/trabalhoBox/fotoPitando1.jpeg"
import fotocpintando2 from "../../assets/images/trabalhoBox/fotoPintando2.jpeg"





export default function Snowman({ navigation }){
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={background} 
                resizeMode="cover" 
                style={{width: '100%', height: "100%"}}
            >
                <View style={styles.content}>
                    <Text style={styles.titulo}>Caixas para Armazenar Itens</Text>
                    <View style={{display:"flex",flexDirection:"row", justifyContent: "center"}}>
                    <Image
                        style={{height: 100, width: 100, justifyContent: "center", alignSelf: "center"}}
                        source={fotolixando1}
                        contentFit="cover"
                    />
                    <Image
                        style={{height: 100, width: 100, justifyContent: "center", alignSelf: "center" }}
                        source={fotolixando2}
                        contentFit="cover"
                    />
                    </View>
                    <Text style={styles.texto}>Primeiramente lixamos as caixas, para deixá-las lisas.</Text>
                    <View style={{display:"flex",flexDirection:"row", justifyContent: "center"}}>  
                    <Image
                        style={{height: 100, width: 100, justifyContent: "center", alignSelf: "center" }}
                        source={fotocpintando1}
                        contentFit="cover"
                    />
                    <Image
                        style={{height: 100, width: 100, justifyContent: "center", alignSelf: "center" }}
                        source={fotocpintando2}
                        contentFit="cover"
                    />
                    </View>
                    <Text style={styles.texto}>Após isso pintamos as caixas.</Text>
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
                            Voltar
                        </Text>
                        </Pressable>
                    </View>
                </View>  
            </ImageBackground>    
        </View>
      );
}