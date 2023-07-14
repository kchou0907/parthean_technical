import { StyleSheet, Dimensions } from "react-native";
import { GREEN } from "../../../shared/constants";

const styles = StyleSheet.create({
    switch_wrapper: {
        flexDirection: "row", 
        maxWidth: Dimensions.get('window').width * 0.4,
        borderRadius: 60,
        backgroundColor: '#1D1D1D',
        marginTop: 20,
        marginBottom: 20,
    },
    btn: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderRadius: 60
    },
    btn_active: {
        backgroundColor: GREEN,
    },
    btn_not_active: {
        backgroundColor: '#1D1D1D',
    },
    p: {
        textAlign: 'center',
        color: '#FFFFFF',

        fontSize: 12,
        lineHeight: 15,
      },
    p_active: {
        textAlign: 'center',
        color: 'black',

        fontSize: 12,
        lineHeight: 15,
    },
    value_wrapper: {
      position: 'absolute', 
      right: 30, 
      paddingLeft: 10, 
      paddingRight: 10, 
      backgroundColor: '#3D4043', 
      borderRadius: 20
    },
    value_text: {
      color: GREEN,
      fontSize: 10
    }
  });

export default styles