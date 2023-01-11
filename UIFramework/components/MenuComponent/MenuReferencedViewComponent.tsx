import {FlatList} from 'react-native';
import React from 'react';

const DATA = [
  {
    id: '__main',
  },
];

export type MenuReferencedViewProps = {
  id: string;
  title: string;
  icon: object;
  iconSelected: object;
  handler: Function;
  view: any;
};

export type MenuReferencedViewComponent = {
  items: Array<MenuReferencedViewProps>;
  headerView?: React.ComponentType<any> | React.ReactElement | null | undefined;
  selected: number;
  delegate: any;
};

const MenuReferencedViewComponent: React.FC<MenuReferencedViewComponent> = ({
  items,
  selected = 0,
  headerView,
}) => {
  const renderItem = ({item}) => {
    const InnerRenderWrapper = items[selected].view;
    return <InnerRenderWrapper {...item} />;
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={headerView}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default MenuReferencedViewComponent;
