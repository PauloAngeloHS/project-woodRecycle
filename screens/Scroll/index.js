import { View, Text, Image ,Pressable, StyleSheet} from "react-native";
import styles from "./styles"
function Slide(props){
  return (<View style={[slidesStyle,slideStyles[props.index]]}>
    <Text>{props.title}</Text>
    <Image source={props.image}/>
    <Text>{props.children}</Text>
  </View>)

}
function FinishButton(){
  return (<Pressable>
    
  </Pressable>)
}
function Indexes(props){
  // props slides
  let initialArr = new Array(props.amount)
  
  function Index(props) {
    return <Pressable onPress={()=>{
      slideStyles.forEach(element => {
        element.value = {
          display: "none"
        } 
      });
      slideStyles[props.id] = {
        display: "block"
      }
    }}>

    </Pressable>
  }
  let Indexes  = initialArr.map( props , key => {
    return (<Index id={key} key={key}/>)
  })
  return Indexes;
}
export default function Scroll({ navigation }) {
  let slidesStyle
  let slideStyles = new Array(10)
  return (
    <View style={styles.container}>
      <View>

      </View>
     <View>
      <Indexes slides={0}/>
      
     </View>
    </View>
  );
}
