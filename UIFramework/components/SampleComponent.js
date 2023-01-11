import {Text, View} from 'react-native';
import React, {Component, useState} from 'react';

export class SampleComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({value: nextProps.value});
    }
  }

  onSelectChange({selectedIndex, props}) {
    setSelectedIndex(selectedId);
    items[selectedId].handler(...props);
    return items[selectedIndex].id;
  };

  render() {
    const [selectedIndex, setSelectedIndex] = useState(selected);
    
    const renderItem = ({item}) => {
        const InnerRenderWrapper = items[selectedIndex].view;
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
  }
};

export default SampleComponent;
