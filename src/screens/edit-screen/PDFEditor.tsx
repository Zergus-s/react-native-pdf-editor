import {Dimensions, StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import {PALETTE} from '../../assets/styles';
import Pdf from 'react-native-pdf';
import CustomHeader from '../../components/CustomHeader';
import Container from '../../components/Container';

type Props = {
  route: {
    params: {pdfFile: any};
  };
};

const PDFEditor = ({
  route: {
    params: {pdfFile},
  },
}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Container
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDarkMode ? PALETTE.black : PALETTE.white,
      }}>
      <CustomHeader title={'Preview PDF'} />
      <Pdf
        trustAllCerts={false}
        source={{uri: pdfFile.uri, cache: true}}
        onLoadComplete={numberOfPages => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={page => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </Container>
  );
};

export default PDFEditor;

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
