import {useNavigation} from '@react-navigation/native';
import {
  useColorScheme,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {types} from 'react-native-document-picker';
import {PALETTE} from '../../assets/styles';
import Container from '../../components/Container';
import CustomButton from '../../components/CustomButton';
import {widthPixel} from '../../lib/normalize';

import useUploadFile from '../../lib/useUploadFile';
import React, {useState} from 'react';

const StartScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {launchFilePicker, uploadedFile} = useUploadFile({fileType: types.pdf});
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  //@ts-ignore
  const navigateToCreate = () => navigation.navigate('PDFCreate');

  const uploadFile = async () => {
    setIsLoading(true);
    await launchFilePicker().then(res => {
      console.log('res', res);
      console.log('uploadedFile', uploadedFile);
      // if (uploadedFile) {
      setIsLoading(false);
      //@ts-ignore
      navigation.navigate('PDFEditor', {pdfFile: res});
    });
  };

  return (
    <Container>
      <View
        style={[
          styles.sectionContainer,
          {backgroundColor: isDarkMode ? PALETTE.black : PALETTE.white},
        ]}>
        {isLoading ? (
          <ActivityIndicator size="large" color={PALETTE.black} />
        ) : (
          <>
            <CustomButton style={styles.button} action={navigateToCreate}>
              Create a New PDF
            </CustomButton>
            <CustomButton style={styles.button} action={uploadFile}>
              Pick from device
            </CustomButton>
          </>
        )}
      </View>
    </Container>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: widthPixel(20),
    paddingHorizontal: widthPixel(40),
  },
  button: {
    width: '100%',
    paddingHorizontal: widthPixel(20),
    paddingVertical: widthPixel(20),
  },
});
