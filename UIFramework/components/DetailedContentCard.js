/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import React from 'react';

import {PillCollectionComponent} from '../components';
import {COLORS} from '../constants';
import {DefaultTheme} from '@react-navigation/native';

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width * 0.6,
    aspectRatio: 0.65,
    backgroundColor: 'white',
    shadowOpacity: 0.12,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    borderRadius: 30,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  subTitle: {
    paddingTop: 25,
    marginLeft: 10,
    marginRight: 10,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    color: COLORS.primary,
  },
  title: {
    paddingTop: 5,
    marginLeft: 10,
    marginRight: 10,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 26,
    color: DefaultTheme.colors.text,
    width: '80%',
  },
});

const DetailedContentCard = ({title, subTitle, image, tags}) => {
  return (
    <View style={styles.card}>
      <View>
        <View style={{width: '100%', aspectRatio: 1.5, overflow: 'hidden'}}>
          <Image source={image} style={styles.image} />
        </View>
        <View
          style={{
            // width: '100%',
            // aspectRatio: 1.3,
            overflow: 'hidden',
          }}>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text
            style={styles.title}
            // adjustsFontSizeToFit={true}
            numberOfLines={2}>
            {title}
          </Text>
          <View style={{overflow: 'hidden', height: 70}}>
            <PillCollectionComponent dataSource={tags} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailedContentCard;
