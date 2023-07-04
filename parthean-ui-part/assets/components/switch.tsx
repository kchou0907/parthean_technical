import React from "react";
import { View, Pressable, StyleSheet, Text, Dimensions } from "react-native";

export default function CustomSwitch({isMonthly, setIsMonthly}:{isMonthly: boolean; setIsMonthly: Function}) {

    return (
        <View style={styles.wrapper}>
            <View style={[styles.btn, isMonthly ? styles.btn_active : styles.btn_not_active]}>
                <Pressable onPress={() => setIsMonthly(true)}>
                    <Text style={isMonthly ? styles.p_active : styles.p}>Monthly</Text>
                </Pressable>
            </View>
            <View style={[styles.btn, isMonthly ? styles.btn_not_active : styles.btn_active]}>
                <Pressable onPress={() => setIsMonthly(false)}>
                    <Text style={isMonthly ? styles.p : styles.p_active}>Annually</Text>
                </Pressable>
            </View>
        </View>
        
      );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row", 
        maxWidth: Dimensions.get('window').width * 0.4,
        borderRadius: 60,
        backgroundColor: '#1D1D1D',
        marginTop: 20,
        marginBottom: 20
    },
    btn: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderRadius: 60
    },
    btn_active: {
        backgroundColor: '#1FCB64',
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
    }
  });