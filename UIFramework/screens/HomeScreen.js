/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

import {assets, GUIDELINES, SAMPLE} from '../constants';
import {SearchBar, DetailedContentCard, HeaderView} from '../components';
import {ScreenPROPS} from '../constants';

const CONTENT = [
  {
    id: 'content1',
    title: 'Recommended meals',
    data: SAMPLE,
  },
  {
    id: 'content2',
    title: 'Second Header',
    data: SAMPLE,
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
    padding: GUIDELINES.border / 2,
    marginRight: GUIDELINES.border,
    overflow: 'visible',
  },
});

const HeaderViewPortion = () => {
  return (
    <View style={{paddingBottom: 10}}>
      <HeaderView
        imageSource={ScreenPROPS.HomeScreenPROPS.headerViewProperties.image}
        title={ScreenPROPS.HomeScreenPROPS.headerViewProperties.title}
        subTitle={ScreenPROPS.HomeScreenPROPS.headerViewProperties.subTitle}
        styles={ScreenPROPS.HomeScreenPROPS.headerViewProperties.style}
      />
      <View style={{marginTop: -30}}>
        <SearchBar />
      </View>
    </View>
  );
};

const renderItem = ({item}) => (
  <DetailedContentCard
    title={item.title}
    subTitle={item.subTitle}
    image={item.image}
    tags={item.tags}
  />
);

const TitledViewComponent = ({data, title}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        style={styles.sectionList}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView
      stickyHeaderIndices={[0]}
      style={{flex: 1, overflow: 'scroll'}}>
      <FlatList
        data={CONTENT}
        renderItem={({item}) => (
          <TitledViewComponent data={item.data} title={item.title} />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={HeaderViewPortion}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
