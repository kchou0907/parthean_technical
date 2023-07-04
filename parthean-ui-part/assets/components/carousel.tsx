import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { useState } from 'react';
import { SafeAreaView, View, Dimensions, Text } from 'react-native';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

const tiers: {title: string, price_monthly: Double, price_yearly_month: Double, price_yearly: Double, perks:{name: String, description: String, photo_src: String}[]}[] = [
    {
      title: "Parthean Pro",
      price_monthly: 9.99,
      price_yearly_month: 5.83,
      price_yearly: 69.99,
      perks: [
        {
            name: "Unlimited Accounts",
            description: "Connect all of your accounts (limit on free tier is 3)",
            photo_src: "test"
        },
        {
            name: "Proactive tips",
            description: "Get proactive financial insights from Parthean AI",
            photo_src: "test"
        },
        {
            name: "New AI Tools",
            description: "You'll get early access to our most powerful AI tools",
            photo_src: "test"
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
              photo_src: "test"
          },
          {
              name: "All Pro Features",
              description: "Unlimited accounts, proactive financial tips from Parthean AI, and our new, most powerful AI tools",
              photo_src: "test"
          },
        ]
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

function renderItem({ item }: { item: {title: string, price_monthly: Double, price_yearly_month: Double, price_yearly: Double, perks:{name: String, description: String, photo_src: String}[]}}){
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

function pagination(entries: {title: string, price_monthly: Double, price_yearly_month: Double, price_yearly: Double, perks:{name: String, description: String, photo_src: String}[]}[], index: number) {
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

