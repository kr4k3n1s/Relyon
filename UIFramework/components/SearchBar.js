import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';

import {GUIDELINES} from '../constants';
import {DefaultTheme} from '@react-navigation/native';

import {assets} from '../constants';

const SearchBar = () => {
  return (
    <View
      style={{
        marginLeft: GUIDELINES.border / 2,
        marginRight: GUIDELINES.border / 2,
        backgroundColor: 'white',
        shadowOpacity: 0.12,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 0},
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{paddingLeft: 13}}>
        <Image source={assets.search} style={{height: 30, width: 30}} />
      </View>

      <TextInput
        style={{
          padding: 19,
          fontStyle: 'normal',
          placeholder: '#CCCCCC',
          fontSize: 18,
        }}
        onTouchStart={text => {}}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchBar;
