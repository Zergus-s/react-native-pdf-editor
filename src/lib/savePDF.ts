import {Platform} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';

export const savePDF = async ({
  name,
  html,
  onSuccess,
}: {
  name?: string;
  html?: string;
  onSuccess: () => void;
}) => {
  try {
    let PDFOptions = {
      html: html ? html : '<h1>11111 Generate PDF!</h1>',
      directory: Platform.OS === 'android' ? 'Downloads' : 'Documents',
    };
    let file = await RNHTMLtoPDF.convert(PDFOptions);

    const destinationPath =
      Platform.OS === 'android'
        ? RNFS.DownloadDirectoryPath
        : RNFS.DocumentDirectoryPath;
    const FileName = `${
      name ? name + new Date().getTime() : 'pdf_document' + new Date().getTime()
    }.pdf`;
    const destinationFile = `${destinationPath}/${FileName}`;

    const writeNewFile = async () =>
      await RNFS.moveFile(file.filePath!, destinationFile).then(() =>
        onSuccess(),
      );

    if (file.filePath) {
      writeNewFile();
    }
  } catch (error: any) {
    console.log('Failed to generate pdf', error.message);
  }
};
