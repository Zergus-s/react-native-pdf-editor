import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {PALETTE} from '../../assets/styles';

const SIZE = 7;
const MARGIN = 5;
const BG = PALETTE.white;
const ACTIVE_BG = PALETTE.orange;
const dots = [1, 2, 3];
const INTERVAL = 300;
const ANIMATION_DURATION = 400;
const ANIMATION_SCALE = 1.4;
export default class ThreeDotsLoader extends React.Component<{
  activeBackground?: string;
  background?: string;
}> {
  state = {
    active: 1,
  };

  componentDidMount() {
    //@ts-ignore
    this.interval = setInterval(() => {
      const active = this.state.active;
      this.setState({active: active > 2 ? 1 : active + 1});
    }, INTERVAL);
  }

  componentWillUnmount() {
    //@ts-ignore
    clearInterval(this.interval);
  }

  render() {
    const active = this.state.active;
    return (
      <View style={styles.main}>
        {dots.map(i => (
          //@ts-ignore
          <Dot key={i?.toString()} {...this.props} active={i === active} />
        ))}
      </View>
    );
  }
}

class Dot extends React.Component<{
  activeBackground?: string;
  background?: string;
  size?: number;
  dotMargin?: number;
  animationDuration?: number;
  animationScale?: number;
  active: number;
}> {
  static defaultProps = {
    size: SIZE,
    background: BG,
    activeBackground: ACTIVE_BG,
    dotMargin: MARGIN,
    animationDuration: ANIMATION_DURATION,
    animationScale: ANIMATION_SCALE,
  };
  //@ts-ignore

  constructor(props) {
    super(props);
    //@ts-ignore
    this.scale = new Animated.Value(1);
  }

  componentDidMount() {
    //@ts-ignore
    if (this.props.active) {
      this.scaleUp();
    }
  }
  //@ts-ignore

  componentDidUpdate(prevProps) {
    //@ts-ignore
    if (prevProps.active && !this.props.active) {
      this.scaleDown();
    }
    //@ts-ignore
    if (!prevProps.active && this.props.active) {
      this.scaleUp();
    }
  }

  scaleDown = () => {
    //@ts-ignore
    Animated.timing(this.scale, {
      toValue: 1,
      //@ts-ignore
      duration: this.props.animationDuration,
      useNativeDriver: true,
    }).start();
  };

  scaleUp = () => {
    //@ts-ignore
    Animated.timing(this.scale, {
      //@ts-ignore
      toValue: this.props.animationScale,
      //@ts-ignore
      duration: this.props.animationDuration,
      useNativeDriver: true,
    }).start();
  };

  render() {
    //@ts-ignore
    const {active, size, background, activeBackground, dotMargin} = this.props;

    const style = {
      height: size,
      width: size,
      borderRadius: size! / 2,
      marginHorizontal: dotMargin,
      backgroundColor: active ? activeBackground : background,
    };
    return (
      //@ts-ignore
      <Animated.View style={[style, {transform: [{scale: this.scale}]}]} />
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
