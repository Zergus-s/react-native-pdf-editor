import {useState} from 'react';
import {Alert} from 'react-native';
import DocumentPicker, {
  isCancel,
  isInProgress,
  types,
} from 'react-native-document-picker';

const handleError = (err: unknown) => {
  if (isCancel(err)) {
    console.warn('cancelled');
    // User cancelled the picker, exit any dialogs or menus and move on
  } else if (isInProgress(err)) {
    console.warn(
      'multiple pickers were opened, only the last will be considered',
    );
  } else {
    throw err;
  }
};

const useUploadFile = ({
  fileType,
}: {
  fileType: typeof types.pdf | typeof types.images;
}) => {
  const [uploadedFile, setUploaded] = useState<any>(null);
  const defaulTypes = [fileType];

  const launchFilePicker = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
        type: defaulTypes,
      });

      if (!pickerResult) {
        Alert.alert('No file selected');
        return;
      }

      if (pickerResult.uri) {
        setUploaded(pickerResult);
      }

      return pickerResult;
    } catch (e) {
      handleError(e);
    }
  };

  return {launchFilePicker, uploadedFile};
};

export default useUploadFile;
