// import {View, Text} from 'react-native';
// import React, {useState} from 'react';
// import {
//   MenuReferencedViewComponent,
//   MenuScrollableComponent,
// } from './MenuReferencedViewComponent';

// const _MenuNavigator = MenuNavigator;

// function createMenuNavigator(screens, defaultSelected, headerView) {
//   this._MenuNavigator = () => {
//     <MenuNavigator
//       screens={screens}
//       defaultSelected={defaultSelected}
//       headerView={headerView}
//     />;
//   };
//   return this._MenuNavigator;
// }

// const MenuReferencedView = ({screens, selectedIndex, headerView}) => (
//   <MenuReferencedViewComponent
//     items={screens}
//     selected={selectedIndex}
//     headerView={headerView}
//   />
// );

// const MenuScrollable = ({callback}) => (
//   <MenuScrollableComponent
//     referencedComponent={MenuReferencedView}
//     callback={_MenuNavigator.}
//   />
// );

// const MenuNavigator = ({screens, defaultSelected, headerView, props}) => {
//   const [selectedIndex, setSelectedIndex] = useState(defaultSelected);

//   function callback(index) {
//     setSelectedIndex(index);
//   }

//   return <MenuReferencedView />;
// };

// export {MenuNavigator, createMenuNavigator};
