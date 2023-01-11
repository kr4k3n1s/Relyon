import {assets} from '../index';
import {StyleSheet, Dimensions} from 'react-native';
import {GUIDELINES} from '../index';

const HomeScreenPROPS = {
  headerViewProperties: {
    title: 'Hello Samuel!',
    subTitle: 'Explore life without restrictions!',
    image: assets.avatar01,
    style: StyleSheet.create({
      image: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        height: 210,
        zIndex: -1,
      },
      title: {
        marginLeft: GUIDELINES.border,
        marginRight: GUIDELINES.border,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 38,
        lineHeight: 40,
        color: '#74C1E6',
      },
      subTitle: {
        marginLeft: GUIDELINES.border,
        marginRight: GUIDELINES.border,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 23,
        lineHeight: 30,
        paddingTop: 5,
        width: '70%',
      },
    }),
    tags: undefined,
  },
};

const CommunityScreenPROPS = {
  headerViewProperties: {
    title: 'Any questions?',
    subTitle: 'Ask anything you are wondering!',
    image: assets.avatar04,
    style: StyleSheet.create({
      image: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        height: 210,
        zIndex: -1,
        marginTop: -12,
      },
      title: {
        marginLeft: GUIDELINES.border,
        marginRight: GUIDELINES.border,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 38,
        lineHeight: 40,
        color: '#74C1E6',
      },
      subTitle: {
        marginLeft: GUIDELINES.border,
        marginRight: GUIDELINES.border,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 23,
        lineHeight: 30,
        paddingTop: 5,
        width: '70%',
      },
      tags: {
        marginLeft: GUIDELINES.border / 2,
        marginRight: GUIDELINES.border,
        paddingBottom: 20,
        width: '70%',
      },
    }),
    tags: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        text: '#Community',
        icon: undefined,
      },
      {
        id: 'bd7a2bea-c1b1-46c2-aed5-3ad53abb28ba',
        text: '#Answers',
        icon: undefined,
      },
      {
        id: 'bd7a3bea-c1b1-46c2-aed5-3ad53abb28ba',
        text: '#Questions',
        icon: undefined,
      },
      {
        id: 'bd7a4bea-c1b1-46c2-aed5-3ad53abb28ba',
        text: '#Shared knowledge',
        icon: undefined,
      },
    ],
  },
};

const ExploreScreenPROPS = {
  headerViewProperties: {
    title: 'What to eat?',
    subTitle: 'Let us help you with food you will enjoy!',
    image: assets.avatar02,
    style: StyleSheet.create({
      image: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        height: 220,
        zIndex: -1,
      },
      title: {
        marginLeft: GUIDELINES.border,
        marginRight: GUIDELINES.border,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 38,
        lineHeight: 40,
        color: '#74C1E6',
      },
      subTitle: {
        marginLeft: GUIDELINES.border,
        marginRight: GUIDELINES.border,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 23,
        lineHeight: 30,
        paddingTop: 5,
        width: '65%',
      },
      tags: {
        marginLeft: GUIDELINES.border / 2,
        marginRight: GUIDELINES.border,
        paddingBottom: 20,
        width: '60%',
      },
    }),
    tags: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        text: '#Recipes',
        icon: undefined,
      },
      {
        id: 'bd7a2bea-c1b1-46c2-aed5-3ad53abb28ba',
        text: '#Meal Planner',
        icon: undefined,
      },
      {
        id: 'bd7a3bea-c1b1-46c2-aed5-3ad53abb28ba',
        text: '#Nutrition Info',
        icon: undefined,
      },
      {
        id: 'bd7a4bea-c1b1-46c2-aed5-3ad53abb28ba',
        text: '#Composition',
        icon: undefined,
      },
    ],
  },
  menuComponent: {
    defaultItemId: 'explore',
    items: [
      {
        id: 'search',
        title: 'Search',
        icon: assets.search,
        iconSelected: assets.search,
        handler: undefined,
      },
      {
        id: 'explore',
        title: 'Explore',
        icon: assets.explore,
        iconSelected: assets.exploreSelected,
        handler: undefined,
      },
      {
        id: 'groceries',
        title: 'Groceries',
        icon: assets.groceries,
        iconSelected: assets.groceriesSelected,
        handler: undefined,
      },
      {
        id: 'recipes',
        title: 'Recipes',
        icon: assets.recipes,
        iconSelected: assets.recipesSelected,
        handler: undefined,
      },
      {
        id: 'shopping',
        title: 'Shopping list',
        icon: assets.shoplist,
        iconSelected: assets.shoplistSelected,
        handler: undefined,
      },
      {
        id: 'planner',
        title: 'Planner',
        icon: assets.planner,
        iconSelected: assets.plannerSelected,
        handler: undefined,
      },
    ],
  },
};

export default {HomeScreenPROPS, ExploreScreenPROPS, CommunityScreenPROPS};
