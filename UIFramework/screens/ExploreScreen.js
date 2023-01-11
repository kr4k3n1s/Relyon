/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Text, SafeAreaView, FlatList, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  HeaderView,
  MenuScrollableComponent,
  SimpleContentCard,
  MenuReferencedViewComponent,
} from '../components';
import {GUIDELINES, SAMPLE} from '../constants';
import {assets, COLORS} from '../constants';
import {ScreenPROPS} from '../constants';

const screens = [
  {
    id: '1',
    title: 'Search',
    icon: assets.search,
    iconSelected: assets.search,
    handler: undefined,
    data: SAMPLE,
    view: () => <ExploreListComponent data={SAMPLE} title={'Seach'} />,
  },
  {
    id: '2',
    title: 'Explore',
    icon: assets.explore,
    iconSelected: assets.exploreSelected,
    handler: undefined,
    data: SAMPLE,
    view: () => <ExploreListComponent data={SAMPLE} title={'Explore'} />,
  },
  {
    id: '3',
    title: 'Groceries',
    icon: assets.groceries,
    iconSelected: assets.groceriesSelected,
    handler: undefined,
    data: SAMPLE,
    view: () => <ExploreListComponent data={SAMPLE} title={'Groceries'} />,
  },
  {
    id: '4',
    title: 'Recipes',
    icon: assets.recipes,
    iconSelected: assets.recipesSelected,
    handler: undefined,
    data: SAMPLE,
    view: () => <ExploreListComponent data={SAMPLE} title={'Recipes'} />,
  },
  {
    id: '5',
    title: 'Shopping list',
    icon: assets.shoplist,
    iconSelected: assets.shoplistSelected,
    handler: undefined,
    data: SAMPLE,
    view: () => (
      <ExploreListComponent data={SAMPLE} title={'Your shopping lists'} />
    ),
  },
  {
    id: '6',
    title: 'Planner',
    icon: assets.planner,
    iconSelected: assets.plannerSelected,
    handler: undefined,
    data: SAMPLE,
    view: () => <ExploreListComponent data={SAMPLE} title={'Meal Planner'} />,
  },
];

const styles = StyleSheet.create({
  sectionTitle: {
    paddingTop: 10,
    paddingBottom: 2,
    paddingLeft: 25,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 18,
  },
  sectionList: {
    padding: 10,
    overflow: 'visible',
  },
});

const renderItem = ({item}) => (
  <SimpleContentCard
    title={item.title}
    tag={item.tags[0].text}
    image={item.image}
  />
);

const ExploreListComponent = ({data, title}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        style={styles.sectionList}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const ExploreScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  function callback(index) {
    setSelectedIndex(index);
  }

  const MenuWrapper = () => (
    <MenuReferencedViewComponent
      items={screens}
      selected={selectedIndex}
      headerView={HeaderViewPortion}
    />
  );

  const HeaderViewPortion = () => {
    return (
      <View style={{paddingBottom: 10}}>
        <HeaderView
          imageSource={
            ScreenPROPS.ExploreScreenPROPS.headerViewProperties.image
          }
          title={ScreenPROPS.ExploreScreenPROPS.headerViewProperties.title}
          subTitle={
            ScreenPROPS.ExploreScreenPROPS.headerViewProperties.subTitle
          }
          styles={ScreenPROPS.ExploreScreenPROPS.headerViewProperties.style}
          tags={ScreenPROPS.ExploreScreenPROPS.headerViewProperties.tags}
        />
        <View style={{marginTop: -30}}>
          <MenuScrollableComponent
            referencedComponent={MenuWrapper}
            callback={callback}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      stickyHeaderIndices={[0]}
      style={{flex: 1, overflow: 'scroll'}}>
      <MenuWrapper />
    </SafeAreaView>
  );
};

export default ExploreScreen;
