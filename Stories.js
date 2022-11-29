import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const storiesItem = ({ item }) => (
<View style={styles.stories_item}>
<Image
    style={styles.story_image}
    source={{uri: item.story_image}}
    />
<Text style={styles.story_owner}>{item.story_owner}</Text>
</View>
  );

const Stories = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.stories}
    data={item}
    renderItem={storiesItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default Stories;

const styles = StyleSheet.create({
    'story_image': {
        'width': '22vw',
        'height': '22vw',
        'marginTop': 5,
        'borderRadius': 50,
        'borderColor': '#f5220a',
        'borderWidth': 2,
        'padding': 10,
        'margin': 5
    },
    'story_owner': {
        'color': '#030303',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'alignSelf': 'center',
        'marginTop': 2
    }
});