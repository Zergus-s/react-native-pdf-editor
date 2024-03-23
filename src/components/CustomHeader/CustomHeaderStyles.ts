import {StyleSheet} from 'react-native';
import {PALETTE} from '../../assets/styles';
import {heightPixel} from '../../lib/normalize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: PALETTE.gray,
  },
  wrap: {
    padding: heightPixel(16),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    height: heightPixel(32),
    width: heightPixel(32),
    borderRadius: 100,
    backgroundColor: PALETTE.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: -1,
    flex: 1,
  },
  rightWrap: {
    height: heightPixel(32),
    width: heightPixel(32),
    borderRadius: 100,
    backgroundColor: PALETTE.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightEmpty: {
    height: heightPixel(32),
    width: heightPixel(32),
  },
});
