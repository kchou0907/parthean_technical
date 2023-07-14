import { StyleSheet, Dimensions } from "react-native";
import { GREEN } from "../../../shared/constants";

const styles = StyleSheet.create({
    tier_name: {
        color: GREEN,
        fontSize: 18
    },
    tier_text: {
        backgroundColor:'#1D1D1D',
        borderRadius: 10,
        height: Dimensions.get('window').height * 0.5,
        padding: 20,
    },
    price_monthly: {
        fontSize: 16, 
        color: '#FFFFFF'
    },
    price_annually: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.4)',
        opacity: 0
    },
    perks_wrapper: {
        flexDirection: 'column', 
        flex: 1, 
        justifyContent: 'space-evenly'
    },
    perk_container: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20
    },
    perk_name: {
        fontSize: 18,
        color: '#FFFFFF'
    },
    perk_descrip: {
        fontSize: 16,
        color: '#FFFFFF',
        opacity: 0.75
    },
    tinyLogo: {
        flex: 1,
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    dots: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.92)'
    },
    dots_container: { 
        backgroundColor: 'rgba(0, 0, 0, 0.75)' 
    }
  });

  export default styles