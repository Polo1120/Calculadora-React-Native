import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
      flex: 1,
      backgroundColor: "black",
      paddingHorizontal: 20,
    },
    calculadoraConatiner:{
      flex: 1,
      justifyContent: "flex-end",
    },
    resultados: {
      color: "white",
      fontSize: 60,
      textAlign: "right",
      marginBottom: 10,
    },
    resultadopequeno:{
      color: "rgba(255,255,255,0.2)",
      fontSize:30,
      textAlign: "right",
    },
    fila:{
      flexDirection: "row",
      justifyContent: "center",
      marginBottom:18,
      paddingHorizontal:10,

    },
});