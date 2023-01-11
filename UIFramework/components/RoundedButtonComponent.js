import {View, Text, TouchableOpacity} from 'react-native';
import COLORS from '../constants';
import React from 'react';

const RoundedButtonComponent = ({
  title,
  icon,
  onTouch,
  color,
  textStyle,
  style,
}) => {
  return (
    <TouchableOpacity onTouch={onTouch}>
      <View
        style={{
          alignSelf: 'center',
          backgroundColor: color ? color : COLORS.primary,
          padding: 8,
          paddingLeft: 12,
          paddingRight: 12,
          borderRadius: 100,
          ...style,
        }}>
        <Text
          style={{
            color: 'white',
            ...textStyle,
          }}
          adjustsFontSizeToFit={true}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundedButtonComponent;
