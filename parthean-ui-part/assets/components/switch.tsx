import React from "react";
import { View, Pressable, StyleSheet, Text, Dimensions, StyleProp } from "react-native";

export default function CustomSwitch({style, isMonthly, setIsMonthly}:{style?: StyleProp<any> | undefined; isMonthly: boolean; setIsMonthly: Function}) {

    return (
        <View style={[style, {flex: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: Dimensions.get('window').width}]}>
            <View style={[styles.switch_wrapper]}>
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

            {!isMonthly && ValueMarker()}
        </View>
      );
}

/**
 * Create the marker to denote the customer is getting best value
 * @returns a marker denoting best value
 */
function ValueMarker() {
    return(
        <View style={{position: 'absolute', right: 30, paddingLeft: 10, paddingRight: 10, backgroundColor: '#3D4043', borderRadius: 20}}>
                <Text style={[styles.p, {fontSize: 10, color: '#1FCB64'}]}>Best Value</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    switch_wrapper: {
        flexDirection: "row", 
        width: Dimensions.get('window').width * 0.4,
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