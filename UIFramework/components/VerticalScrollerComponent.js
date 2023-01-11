/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {GUIDELINES} from '../constants';
import React from 'react';

const styles = StyleSheet.create({
  sectionTitle: {
    paddingTop: 10,
    paddingBottom: 2,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 18,
  },
  sectionList: {
    marginLeft: GUIDELINES.border / 2,
    marginRight: GUIDELINES.border,
    marginBottom: GUIDELINES.border / 2,
    paddingTop: 7,
    overflow: 'visible',
  },
});

const VerticalScrollerComponent = ({
  data,
  renderItem,
  title,
  button,
  wrapperStyle,
  textStyle,
  style,
}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        ...wrapperStyle,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: GUIDELINES.border / 2,
        }}>
        <Text
          style={{
            ...styles.sectionTitle,
            ...textStyle,
          }}>
          {title}
        </Text>
        {button}
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{height: 15}} />}
        style={{
          ...styles.sectionList,
          ...style,
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default VerticalScrollerComponent;
