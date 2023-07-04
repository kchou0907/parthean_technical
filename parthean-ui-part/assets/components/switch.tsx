import React from "react";
import { View, Pressable, StyleSheet, Text, Dimensions } from "react-native";

export default function CustomSwitch({isMonthly, setIsMonthly}:{isMonthly: boolean; setIsMonthly: Function}) {

    return (
        <View style={styles.wrapper}>
            <View style={[styles.btn, isMonthly ? styles.btn_active : styles.btn_not_active]}>
                <Pressable onPress={() => setIsMonthly(true)}>
                    <Text style={styles.p}>Monthly</Text>
                </Pressable>
            </View>
            <View style={[styles.btn, isMonthly ? styles.btn_not_active : styles.btn_active]}>
                <Pressable onPress={() => setIsMonthly(false)}>
                    <Text style={styles.p}>Annually</Text>
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
        backgroundColor: 'red',
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
        backgroundColor: 'red',
    },
    p: {
        textAlign: 'center',
        color: '#FFFFFF',

        fontSize: 12,
        lineHeight: 15,
      },
  });