/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import React from 'react';

import {PillCollectionComponent} from '.';
import {COLORS, GUIDELINES} from '../constants';
import {DefaultTheme} from '@react-navigation/native';

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width - GUIDELINES.border,
    // aspectRatio: 1.7,
    backgroundColor: 'white',
    shadowOpacity: 0.12,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    borderRadius: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  subTitle: {
    marginLeft: 5,
    marginRight: 10,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    color: COLORS.primary,
  },
  title: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 25,
    color: DefaultTheme.colors.text,
    // flexWrap: 'wrap',
    // width: '80%',
  },
});

const HorizontalDetailedContentCard = ({title, subTitle, image, tags}) => {
  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, overflow: 'hidden'}}>
          <Image source={image} style={styles.image} />
        </View>
        <View
          style={{
            overflow: 'hidden',
            flex: 1.5,
            padding: 10,
            paddingTop: 12,
            paddingBottom: 12,
          }}>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text style={styles.title} numberOfLines={3}>
            {title}
          </Text>
          <View style={{overflow: 'hidden', height: 70}}>
            <PillCollectionComponent
              dataSource={tags}
              style={{paddingLeft: 2}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HorizontalDetailedContentCard;
