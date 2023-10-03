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
                    <View style={{display:"flex",flexDirection:"row", justifyContent: "center"}}>
                    <Image
                        style={{height: 100, width: 100, justifyContent: "center", alignSelf: "center"}}
                        source={fotoarame}
                        contentFit="cover"
                    />
                    </View>
                    <Text style={styles.texto}>Primeiramente juntamos os pregadores, desmontamos eles e fizemos modificações nos arames, os esticando.</Text>
                    <View style={{display:"flex",flexDirection:"row", justifyContent: "center"}}>
                    <Image
                        style={{height: 100, width: 100, justifyContent: "center", alignSelf: "center" }}
                        source={fotocolando1}
                        contentFit="cover"
                    />
                    <Image
                        style={{height: 100, width: 100, justifyContent: "center", alignSelf: "center" }}
                        source={fotocolando2}
                        contentFit="cover"
                    />
                    <Image
                        style={{height: 100, width: 100, justifyContent: "center", alignSelf: "center" }}
                        source={fotocolando3}
                        contentFit="cover"
                    />
                    <Image
                        style={{height: 100, width: 100, justifyContent: "center", alignSelf: "center" }}
                        source={fotocolado}
                        contentFit="cover"
                    />
                    </View>
                    <Text style={styles.texto}>Após isso colamos um lado ao outro do pregador e colocando o arame modificado no meio, esse arame se tornará o que segurará os enfeites na árvore.</Text>
                    <View style={{display:"flex",flexDirection:"row", justifyContent: "center"}}> 
                    <Image
                        style={{height: 100, width: 100, justifyContent: "center", alignSelf: "center" }}
                        source={fotopintando}
                        contentFit="cover"
                    />
                    </View>
                    <Text style={styles.texto}>Depois só pintamos e está pronto.</Text>
                    <View style={{display:"flex",flexDirection:"row", justifyContent: "center"}}>
                    <Image
                        style={{height: 100, width: 100, justifyContent: "center", alignSelf: "center" }}
                        source={fotocompleto1}
                        contentFit="cover"
                    />
                    <Image
                        style={{height: 100, width: 100, justifyContent: "center", alignSelf: "center" }}
                        source={fotocompleto2}
                        contentFit="cover"
                    />
                    </View>
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