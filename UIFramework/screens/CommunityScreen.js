/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import {
  HeaderView,
  SearchBar,
  HorizontalDetailedContentCard,
  MenuReferencedViewComponent,
  MenuScrollableComponent,
  VerticalScrollerComponent,
  RoundedButtonComponent,
} from '../components';
import {
  ScreenPROPS,
  SAMPLE,
  GUIDELINES,
  assets,
  COLORS,
  COMMUNITY,
} from '../constants';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DefaultTheme} from '@react-navigation/native';

const screens = [
  {
    id: '1',
    title: 'Search',
    icon: assets.search,
    iconSelected: assets.search,
    handler: undefined,
    data: COMMUNITY,
    view: () => (
      <VerticalScrollerComponent
        data={COMMUNITY}
        renderItem={renderItem}
        title={'Search'}
        button={
          <RoundedButtonComponent
            title={'Create'}
            color={COLORS.primary}
            style={{
              marginRight: GUIDELINES.border / 2,
              backgroundColor: 'transparent',
            }}
            textStyle={{
              color: COLORS.primary,
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 18,
            }}
          />
        }
        textStyle={{
            paddingLeft: 5,
        }}
      />
    ),
  },
  {
    id: '2',
    title: 'Create',
    icon: assets.add,
    iconSelected: assets.add,
    handler: undefined,
    data: SAMPLE,
    view: () => (
      <VerticalScrollerComponent
        data={SAMPLE}
        renderItem={renderItem}
        title={'Create'}
      />
    ),
  },
  {
    id: '3',
    title: 'Explore',
    icon: assets.explore2,
    iconSelected: assets.exploreSelected2,
    handler: undefined,
    data: SAMPLE,
    view: () => (
      <VerticalScrollerComponent
        data={SAMPLE}
        renderItem={renderItem}
        title={'Articles and Knowledge'}
        button={
          <RoundedButtonComponent
            title={'Search'}
            color={COLORS.primary}
            style={{
              marginRight: GUIDELINES.border / 2,
              backgroundColor: 'transparent',
            }}
            textStyle={{
              color: COLORS.primary,
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 18,
            }}
          />
        }
      />
    ),
  },
  {
    id: '4',
    title: 'Articles',
    icon: assets.articles,
    iconSelected: assets.articlesSelected,
    handler: undefined,
    data: SAMPLE,
    view: () => (
      <VerticalScrollerComponent
        data={SAMPLE}
        renderItem={renderItem}
        title={'Search'}
      />
    ),
  },
  {
    id: '5',
    title: 'Knowledge',
    icon: assets.knowledge,
    iconSelected: assets.knowledgeSelected,
    handler: undefined,
    data: SAMPLE,
    view: () => (
      <VerticalScrollerComponent
        data={SAMPLE}
        renderItem={renderItem}
        title={'Search'}
      />
    ),
  },
  {
    id: '6',
    title: 'Questions',
    icon: assets.questions,
    iconSelected: assets.questionsSelected,
    handler: undefined,
    data: SAMPLE,
    view: () => (
      <VerticalScrollerComponent
        data={SAMPLE}
        renderItem={renderItem}
        title={'Search'}
      />
    ),
  },
];

const QUEST = [
  {
    id: 'quest1',
    title: 'What type of legumes should I avoid?',
    question: 'Hello everyone, I have histamine intolerance...',
  },
  {
    id: 'quest2',
    title: 'What type of legumes should I avoid?',
    question: 'Hello everyone, I have histamine intolerance...',
  },
  {
    id: 'quest3',
    title: 'What type of legumes should I avoid?',
    question: 'Hello everyone, I have histamine intolerance...',
  },
];

const questionRenderItem = ({item}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 3,
          paddingRight: 10,
        }}>
        <View>
          <Text
            style={{
              fontStyle: 'normal',
              fontWeight: '800',
              fontSize: 16,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontStyle: 'normal',
              fontSize: 14,
              color: 'grey',
            }}>
            {item.question}
          </Text>
        </View>
        <View
          style={{
            height: 15,
            width: 15,
          }}>
          <Image source={assets.arrow} style={GUIDELINES.sizeToFit} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ListViewComponent = () => {
  return (
    <View>
      <View
        style={{
          margin: GUIDELINES.border / 2,
          marginBottom: 3,
          padding: 10,
          ...GUIDELINES.shadowing,
          borderRadius: 20,
          backgroundColor: 'white',
        }}>
        <FlatList
          data={QUEST}
          renderItem={questionRenderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          style={{
            padding: 5,
            paddingTop: 5,
            paddingBottom: 5,
            overflow: 'hidden',
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const renderItem = ({item}) => {
  return (
    <HorizontalDetailedContentCard
      title={item.title}
      subTitle={item.subTitle}
      image={item.image}
      tags={item.tags}
    />
  );
};

const CommunityScreen = () => {
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
            ScreenPROPS.CommunityScreenPROPS.headerViewProperties.image
          }
          title={ScreenPROPS.CommunityScreenPROPS.headerViewProperties.title}
          subTitle={
            ScreenPROPS.CommunityScreenPROPS.headerViewProperties.subTitle
          }
          styles={ScreenPROPS.CommunityScreenPROPS.headerViewProperties.style}
          tags={ScreenPROPS.CommunityScreenPROPS.headerViewProperties.tags}
        />
        <View style={{marginTop: -30}}>
          <ListViewComponent />
          <MenuScrollableComponent
            referencedComponent={MenuWrapper}
            callback={callback}
            style={{
              backgroundColor: 'transparent',
              marginLeft: 0,
              marginRight: 0,
              shadowColor: 'transparent',
            }}
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

export default CommunityScreen;
