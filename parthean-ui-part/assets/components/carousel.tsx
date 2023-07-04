import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { useState } from 'react';
import { SafeAreaView, View, Dimensions, Text } from 'react-native';

const tiers: {title: string, text: string}[] = [
    {
      title: "test 1",
      text: "this is one perk level"
    },
    {
      title: "test 2",
      text: "this is another perk level"
    },
];

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

export default function CustomCarousel() {
        let [currIndex, setIndex] = useState(0);
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

function renderItem({ item, index }: { item: {title: string, text:string}, index: number }){
    return (
        <View style={{
            backgroundColor:'#1D1D1D',
            borderRadius: 5,
            height: 250,
            padding: 50,
            marginLeft: 25,
            marginRight: 25, }}>
          <Text style={{fontSize: 30, color: 'white'}}>{item.title}</Text>
          <Text style={{color: 'white'}}>{item.text}</Text>
        </View>
    )
}

function pagination(entries: {title: string, text:string}[], index: number) {
    return (
        <Pagination
            dotsLength={entries.length}
            activeDotIndex={index}
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)'
            }}
            inactiveDotStyle={{
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
        />
    )    
}

