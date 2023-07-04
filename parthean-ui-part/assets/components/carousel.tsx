import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { useState } from 'react';
import { SafeAreaView, View, Dimensions, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

interface tierFeatures {
    title: string;
    price_monthly: Double;
    price_yearly_month: Double;
    price_yearly: Double;
    perks: perkFeature[]
}

interface perkFeature {
    name: String;
    description: String;
    photo_src: ImageSourcePropType
}

const tiers: tierFeatures[] = [
    {
      title: "Parthean Pro",
      price_monthly: 9.99,
      price_yearly_month: 5.83,
      price_yearly: 69.99,
      perks: [
        {
            name: "Unlimited Accounts",
            description: "Connect all of your accounts (limit on free tier is 3)",
            photo_src: require("../tier_icons/money.png")
        },
        {
            name: "Proactive tips",
            description: "Get proactive financial insights from Parthean AI",
            photo_src: require("../tier_icons/bulb.png")
        },
        {
            name: "New AI Tools",
            description: "You'll get early access to our most powerful AI tools",
            photo_src: require("../tier_icons/shuttle.png")
        },
      ]
    },
    {
        title: "Parthean Pro + Coaching",
        price_monthly: 79.99,
        price_yearly_month: 66.67,
        price_yearly: 879.99,
        perks: [
          {
              name: "Human Coaching",
              description: "Unlimited calls and chats with your very personal finance coach",
              photo_src: require("../tier_icons/user.png")
          },
          {
              name: "All Pro Features",
              description: "Unlimited accounts, proactive financial tips from Parthean AI, and our new, most powerful AI tools",
              photo_src: require("../tier_icons/shuttle.png")
          },
        ]
      },
];

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

export default function CustomCarousel({isMonthly}: {isMonthly: boolean}) {
        const [currIndex, setIndex] = useState(0);

        const renderItem = ({item}: {item: tierFeatures}) => {
            const perks = item.perks.map((currPerk, i) => renderPerk(currPerk, i));
            const price_monthly = `$${item.price_monthly}/month`;
            const price_annually_monthly = `$${item.price_yearly_month}/month`;
            const annualPrice = <Text style={styles.price_annually}>{`(${item.price_yearly}/year)`}</Text>;
            return (
                <View style={{
                    backgroundColor:'#1D1D1D',
                    borderRadius: 10,
                    height: Dimensions.get('window').height,
                    padding: 20,
                }}>
                    <Text style={styles.tier_name}>{item.title}</Text>
                    <Text style={styles.price_monthly}>{isMonthly ? price_monthly : price_annually_monthly} {!isMonthly && annualPrice}</Text>
                    <View>
                        {perks}
                    </View>
                </View>
            )
        }

        return (
            <SafeAreaView style={{flex: 1}}>
                <Carousel
                layout={'default'}
                data={tiers}
                vertical={false}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                renderItem={renderItem}
                onSnapToItem={(index) => setIndex(index)}
                />
                { pagination(tiers, currIndex) }
            </SafeAreaView>
        );
}

function renderPerk(perk: perkFeature, index: number){
    return (
        <View style={styles.perk_container} key={index}>
            <Image style={[{flex: 1}, styles.tinyLogo]} source={perk.photo_src}></Image>
            <View style={{flex: 2}}>
                <Text style={styles.perk_name}>{perk.name}</Text>
                <Text style={styles.perk_descrip}>{perk.description}</Text>
            </View>
        </View>
    )
}

function pagination(entries: tierFeatures[], index: number) {
    return (
        <Pagination
            dotsLength={entries.length}
            activeDotIndex={index}
            containerStyle={styles.dots_container}
            dotStyle={styles.dots}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
        />
    )    
}


const styles = StyleSheet.create({
    tier_name: {
        color: '#1FCB64',
        fontSize: 18
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
