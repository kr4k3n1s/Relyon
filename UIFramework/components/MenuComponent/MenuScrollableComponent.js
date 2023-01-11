/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {assets, COLORS} from '../../constants';
import {GUIDELINES} from '../../constants';

const MenuItemComponent = ({icon, title, focused, onPress}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={onPress}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={{width: 30, height: 30}}>
            <Image
              source={icon}
              style={{
                width: '100%',
                height: '100%',
                flex: 1,
                tintColor: focused ? COLORS.tertiary : 'lightgrey',
              }}
            />
          </View>
          <Text
            style={{
              color: focused ? COLORS.tertiary : 'lightgrey',
              fontWeight: '600',
              fontSize: 11,
              paddingTop: 5,
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const MenuScrollableComponent = ({referencedComponent, callback, style}) => {
  const renderItem = ({item, index}) => {
    return (
      <MenuItemComponent
        icon={
          item.id ===
          referencedComponent().props.items[
            referencedComponent().props.selected
          ].id
            ? item.iconSelected
            : item.icon
        }
        title={item.title}
        focused={
          item.id ===
          referencedComponent().props.items[
            referencedComponent().props.selected
          ].id
        }
        onPress={() => {
          callback(index);
        }}
      />
    );
  };

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
        ...style,
      }}>
      <FlatList
        horizontal
        data={referencedComponent().props.items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        extraData={
          referencedComponent().props.items[
            referencedComponent().props.selected
          ].id
        }
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 15,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        style={{width: '100%'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MenuScrollableComponent;
