import {Alert, Linking} from 'react-native';

const onDeniedPerms = (err: string) => {
  if (err === 'Error: User did not grant library permission.') {
    Alert.alert(
      'You have denied access to your photo library. ',
      'Would you like to go to settings to allow access to photos?',
      [
        {text: 'No', onPress: () => {}},
        {
          text: 'Yes',
          onPress: Linking.openSettings,
        },
      ],
    );
  }
};

export default onDeniedPerms;
