import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

export interface ItemProps {
    title: string;
    text: string;
}
const entries: {title: string; text: string}[] = [
    {
      title: "test 1",
      text: "this is one perk level"
    },
    {
      title: "test 2",
      text: "this is another perk level"
    },
  ]
export default function CustomCarousel() {
        let [currIndex, setIndex] = useState(0);
        const [carouselItems, setCarouselItems] = useState<ItemProps[]>(entries);
        let renderItem = ({ item, index }: { item: ItemProps; index: number }) => {
            return (
                <View style={{
                    backgroundColor:'floralwhite',
                    borderRadius: 5,
                    height: 250,
                    padding: 50,
                    marginLeft: 25,
                    marginRight: 25, }}>
                  <Text style={{fontSize: 30}}>{item.title}</Text>
                  <Text>{item.text}</Text>
                </View>
        
              )
        };

        return (
            <View style={{flex: 1}}>
                <Carousel
                  data={carouselItems}
                  vertical={false}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={renderItem}
                  onSnapToItem={(index) => setIndex(index) }
                />
                { pagination(entries, currIndex) }
            </View>
        );
}

function pagination(entries: ItemProps[], index: number) {
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

