/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import {DefaultTheme} from '@react-navigation/native';

import {GUIDELINES} from '../constants';
import {PillCollectionComponent} from '../components';

const HeaderView = ({imageSource, title, subTitle, styles, tags}) => {
  return (
    <View style={{paddingTop: 20, width: '100%'}}>
      <View
        style={{
          alignSelf: 'center',
          overflow: 'hidden',
          paddingTop: 10,
          width: '100%',
          // height: 220,
        }}>
        <View style={{paddingBottom: tags !== undefined ? 15 : 120}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <View
            style={{
              display: tags !== undefined ? 'flex' : 'none',
              paddingTop: 5,
              ...styles.tags,
            }}>
            <PillCollectionComponent dataSource={tags} />
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            zIndex: -1,
            paddingTop: 20,
          }}>
          <Image style={styles.image} source={imageSource} />
        </View>
      </View>
    </View>
  );
};

export default HeaderView;
