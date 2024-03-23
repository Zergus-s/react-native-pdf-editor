import React, {useState} from 'react';
import {savePDF} from '../../lib/savePDF';
import CustomHeader from '../../components/CustomHeader';
import SaveIcon from '../../assets/SaveIcon';
import Container from '../../components/Container';
import {Alert, FlatList, StyleSheet, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {widthPixel} from '../../lib/normalize';
import {Node} from './Node';
import {ItemsModel} from './types';
import StickyWrap from '../../components/StickyWrap';
import ImagePicker, {Image, Options} from 'react-native-image-crop-picker';
import onDeniedPerms from '../../lib/getDeniedPerms';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const ListFooter = ({
  addNode,
}: {
  addNode: (type: 'image' | 'text') => () => void;
}) => (
  <View style={styles.buttonContainer}>
    <CustomButton style={styles.button} action={addNode('image')}>
      Add image
    </CustomButton>
    <CustomButton style={styles.button} action={addNode('text')}>
      Add text
    </CustomButton>
  </View>
);

const PDFCreate = () => {
  const {bottom} = useSafeAreaInsets();
  const [items, setItems] = useState<ItemsModel>([
    {value: '', position: 0, type: 'text'},
  ]);
  const navigation = useNavigation();
  const html = `
  <div style="display:flex;flex-direction:column;gap:20px">
   ${items
     .map(item =>
       item.type === 'text'
         ? `<p style="font-size:20px">${item.value}</p>`
         : `<img style="width:100%;object-fit:contain" src="${
             (item.value as Image).path
           }"/>`,
     )
     .join('')}
 </div>
 `;
  console.log('html', html);
  const pickerConfig: Options = {
    cropping: false,
    cropperCircleOverlay: false,
    mediaType: 'photo',
    forceJpg: true,
  };

  const changeNode = (value: string, position: number) => {
    setItems(nodes =>
      nodes.map(node => {
        if (node.position === position) {
          return {...node, value};
        }
        return node;
      }),
    );
  };
  const successSave = () => {
    navigation.goBack();
    Alert.alert('PDF saved successfully');
  };
  const deleteNode = (position: number) => () => {
    console.log(position);
    setItems(nodes => nodes.filter(node => node.position !== position));
  };
  function savePdf() {
    savePDF({name: 'new-pdf', html, onSuccess: successSave});
  }

  const addNode = (type: 'image' | 'text') => () => {
    if (type === 'image') {
      ImagePicker.openPicker(pickerConfig)
        .then(image => {
          if (image.path) {
            setItems(nodes => [
              ...nodes,
              {value: image, position: items.length, type: 'image'},
            ]);
          }
        })
        .catch(err => {
          onDeniedPerms(err.toString());
        });
    } else {
      setItems(nodes => [
        ...nodes,
        {value: '', position: items.length, type: 'text'},
      ]);
    }
  };

  return (
    <Container>
      <CustomHeader
        title={'Create PDF'}
        rightComponent={{icon: <SaveIcon />, onPress: savePdf}}
      />
      <StickyWrap isHeader>
        <FlatList
          ListFooterComponent={() => <ListFooter addNode={addNode} />}
          bounces={false}
          style={[styles.sectionContainer, {paddingBottom: bottom}]}
          data={items}
          renderItem={({item}) => (
            <View style={{position: 'relative', marginTop: 10}}>
              <Node
                onChange={changeNode}
                item={item}
                position={item.position}
              />
              <CustomButton
                style={styles.deleteButton}
                action={deleteNode(item.position)}>
                Delete
              </CustomButton>
            </View>
          )}
        />
      </StickyWrap>
    </Container>
  );
};

export default PDFCreate;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  button: {
    width: 150,
    alignSelf: 'center',
    marginVertical: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: widthPixel(10),
    justifyContent: 'center',
  },
  deleteButton: {
    right: 0,
    top: -2,
    position: 'absolute',
    backgroundColor: 'red',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
