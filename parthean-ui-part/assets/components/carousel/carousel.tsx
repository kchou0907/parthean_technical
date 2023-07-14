import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { useState } from 'react';
import { SafeAreaView, View, Dimensions, Text, Image, ImageSourcePropType } from 'react-native';
import styles from './style'
import tiers from './tierData';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';


export interface tierFeatures {
    title: string;
    price_monthly: Double;
    price_yearly_month: Double;
    price_yearly: Double;
    perks: perkFeature[]
}

export interface perkFeature {
    name: String;
    description: String;
    photo_src: ImageSourcePropType
}


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
                <View style={styles.tier_text}>
                    <Text style={styles.tier_name}>{item.title}</Text>
                    <Text style={styles.price_monthly}>{isMonthly ? price_monthly : price_annually_monthly} {!isMonthly && annualPrice}</Text>
                    <View style={styles.perks_wrapper}>
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
            <Image style={[styles.tinyLogo]} source={perk.photo_src}></Image>
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

