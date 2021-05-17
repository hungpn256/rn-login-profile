import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: this.props.data,
    };
  }
  render() {
    const {data, renderItem, windowWidth, ...props} = this.props;
    return (
      <SafeAreaView {...props}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={windowWidth}
            itemWidth={windowWidth - 40}
            renderItem={renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
            loop={true}
          />
        </View>
      </SafeAreaView>
    );
  }
}
