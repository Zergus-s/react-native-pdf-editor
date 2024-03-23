import {StyleSheet} from 'react-native';
import {PALETTE} from '../../assets/styles';
import {FontFamily} from '../../constants/fonts';
import {heightPixel, widthPixel} from '../../lib/normalize';

export const styles = StyleSheet.create({
  textInputWrap: {
    height: heightPixel(48),
    backgroundColor: 'transparent',
    paddingHorizontal: widthPixel(20),
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textMultilineInputWrap: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    width: '100%',
    minHeight: heightPixel(96),
    maxHeight: heightPixel(200),
    flexShrink: 1,
  },
  inputBorder: {
    borderColor: PALETTE.border,
  },
  inputBorderError: {
    borderColor: PALETTE.orange,
  },
  input: {
    flex: 1,
    fontFamily: FontFamily.jakarta400,
    color: PALETTE.midGray,
    fontSize: heightPixel(14),
    height: heightPixel(24),
    paddingBottom: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
  },
  multiline: {
    borderRadius: 8,
    height: '100%',
    marginHorizontal: widthPixel(12),
    marginVertical: heightPixel(16),
  },
  errorText: {
    color: PALETTE.orange,
    textAlign: 'left',
    fontFamily: FontFamily.jakarta400,
    fontStyle: 'italic',
    lineHeight: heightPixel(16),
    fontSize: heightPixel(12),
  },
  infoText: {
    color: PALETTE.midGray,
    opacity: 0.7,
    lineHeight: heightPixel(16),
    fontSize: heightPixel(12),
    textAlign: 'left',
    fontFamily: FontFamily.jakarta400,
    fontStyle: 'italic',
  },

  rightComponent: {
    alignSelf: 'center',
    position: 'absolute',
    right: 0,
    paddingHorizontal: widthPixel(16),
    paddingVertical: heightPixel(10),
  },
  calendarIcon: {
    position: 'absolute',
    right: widthPixel(-8),
  },
  placeholder: {
    fontFamily: FontFamily.jakarta400,
    color: PALETTE.midGray,
    fontSize: heightPixel(14),
    lineHeight: heightPixel(14),
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
    height: heightPixel(14),
  },
  label: {
    fontFamily: FontFamily.jakarta600,
    color: PALETTE.midGray,
    fontSize: heightPixel(14),
    lineHeight: heightPixel(20),
    textAlign: 'left',
  },
  labelContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: heightPixel(4),
  },
});
