import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<Image
    style={styles.feed_image}
    source={{uri: item.feed_image}}
    />
<Text style={styles.like_counts}>{item.like_counts}</Text>
<Text style={styles.about}>{item.about}</Text>
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    'feed_image': {
        'width': '100vw',
        'height': '120vw',
        'marginTop': 5
    },
    'like_counts': {
        'color': '#060505',
        'fontSize': 17,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'about': {
        'color': '#5b5757',
        'fontSize': 17,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});