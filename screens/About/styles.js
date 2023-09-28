import { StyleSheet } from "react-native";
export default styles = new StyleSheet.create({
  persons:{
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    flexDirection: "row"
  },
  personWrapper:{
    height: 150,
    width:150,
  },
    personImage:{
        height: 100,
        width: 100,
        alignItems: "center",
        alignSelf:"center"
    },
    personName:{
      fontSize: 18
    },
    personJob:{
      fontSize: 18
    },
    container: {
        flex: 1,
        backgroundColor: "#044e8f",
        justifyContent: "center",
        alignItems: "center",
      },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItens: 'center',
        alignSelf: "center",
      },
      image:{
        justifyContent: "center",
        width:'50%',
        height: '30%',
      },
});
