import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

function ImageComponent({handleDelete, setImageModal, index, item}) {
  console.log('render' + index);
  return (
    <View style={styles.photosItem}>
      {item ? (
        <>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.photosImageItem}
            onPress={() => {
              setImageModal(index);
            }}>
            <Image
              style={styles.photosImageItem}
              source={{
                uri: item.url,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnDeleteImg}
            onPress={() => {
              handleDelete(item.id);
            }}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </TouchableOpacity>
        </>
      ) : (
        <Text>loading...</Text>
      )}
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  photosItem: {
    width: windowWidth / 3 - 2,
    aspectRatio: 1 / 1,
    padding: 5,
    margin: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    position: 'relative',
  },
  btnDeleteImg: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 4,
  },
  photosImageItem: {
    flex: 1,
    aspectRatio: 1 / 1,
  },
});
export default React.memo(ImageComponent);
