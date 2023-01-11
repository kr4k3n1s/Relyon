/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList} from 'react-native';
import {FlatList as FlatListHorizontal} from 'react-native-gesture-handler';
import React from 'react';

import {COLORS, assets, GUIDELINES} from '../constants';

// import {GUIDELINES} from 'UIFramework/constants';

const PillComponent = ({text, color}) => (
  <View
    style={{
      alignSelf: 'center',
      backgroundColor: color ? color : COLORS.primary,
      margin: 4,
      marginLeft: 3,
      marginRight: 3,
      borderRadius: 100,
    }}>
    <Text
      style={{
        color: 'white',
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 11,
      }}
      adjustsFontSizeToFit={true}>
      {text}
    </Text>
  </View>
);

const renderItem = ({item}) => (
  <PillComponent text={item.text} color={item.color} />
);

const PillCollectionComponent = ({dataSource, style}) => {
  return (
    <View style={{width: '100%'}}>
      <FlatListHorizontal
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{
          padding: 10,
          paddingLeft: 7,
          paddingRight: 5,
          overflow: 'hidden',
          ...style,
        }}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
        nestedScrollEnabled={false}
        scrollEnabled={false}
        contentContainerStyle={{
          alignSelf: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          // marginBottom: -40,
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        // columnWrapperStyle={2}
      />
    </View>
  );
};

export {PillCollectionComponent, PillComponent};
