import { StyleSheet } from "react-native";
export default styles = new StyleSheet.create({
  persons:{
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 60,
  },
  personWrapper:{
    height: 150,
    width:150,
  },
    personImage:{
        height: 100,
        width: 100,
        alignItems: "center",
        alignSelf:"center",
        backgroundColor: "#fff",
        borderRadius: 300,
    },
    personName:{
      fontSize: 18,
      color: "#fff",
    },
    personJob:{
      fontSize: 10,
      textAlign: "justify",
      color: "#fff",
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
      buttonWrapper:{
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        height: 50,
        backgroundColor: "#000",
        width: 90,
        marginTop: 30
      },
      buttonText:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
      },
      espaco:{
        marginBottom: 20,
      },
});
