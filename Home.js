import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Stories from './Stories'
import HomeFeed from './HomeFeed'

const Home = () => (
<ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
<Stories item={item.stories}/>
<HomeFeed item={item.home_feed}/>
</ScrollView>
)

export default Home;

const styles = StyleSheet.create({
    
});