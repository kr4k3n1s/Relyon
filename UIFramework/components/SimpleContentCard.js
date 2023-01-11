import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {assets, GUIDELINES} from '../constants';
import {DefaultTheme} from '@react-navigation/native';
import {PillComponent} from '.';
import {LinearGradient} from 'expo-linear-gradient';

const styles = StyleSheet.create({
  bgView: {
    width: '45%',
    aspectRatio: 1,
    // height: 100,
    marginLeft: GUIDELINES.border / 2,
    marginRight: GUIDELINES.border / 2,
    backgroundColor: 'white',
    shadowOpacity: 0.12,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    borderRadius: 20,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  title: {
    paddingTop: 2,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 24,
    color: DefaultTheme.colors.text,
  },
});

const SimpleContentCard = ({title, tag, image}) => {
  return (
    <View style={styles.bgView}>
      <View style={styles.wrapper}>
        <View style={{width: '100%', height: '100%', position: 'absolute'}}>
          <ImageBackground
            source={image}
            style={{
              flex: 1,
              width: undefined,
              height: undefined,
            }}>
            <LinearGradient
              colors={['#FFFFF000', '#FFFFFF']}
              style={{height: '100%', width: '100%'}}
              end={{x: 0.5, y: 0.9}}
              start={{x: 0.5, y: -0.3}}
            />
          </ImageBackground>
        </View>
        <View
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
          }}>
          <View style={{paddingLeft: 10}}>
            <PillComponent text={tag ? tag : 'Category'} />
          </View>
          <Text style={styles.title} numberOfLines={3}>
            {title ? title : 'This is the title'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SimpleContentCard;
