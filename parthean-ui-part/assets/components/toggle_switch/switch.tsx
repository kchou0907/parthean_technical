import React from "react";
import { View, Pressable, Text, Dimensions, StyleProp } from "react-native";
import styles from "./style";

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
        <View style={styles.value_wrapper}>
                <Text style={[styles.p, styles.value_text]}>Best Value</Text>
            </View>
    );
}

