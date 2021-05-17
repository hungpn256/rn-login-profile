import React, {useCallback, useMemo, useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageCompoent from '../components/Image.js';
const mockImages = [
  {
    id: 1,
    url: 'https://randomwordgenerator.com/img/picture-generator/53e9d1454a54b10ff3d8992cc12c30771037dbf85254784a70287ed39345_640.jpg',
  },
  {
    id: 2,
    url: 'https://randomwordgenerator.com/img/picture-generator/53e9d1454a54b10ff3d8992cc12c30771037dbf85254784a70287ed39345_640.jpg',
  },
  {
    id: 3,
    url: 'https://randomwordgenerator.com/img/picture-generator/55e7dd454256a914f1dc8460962e33791c3ad6e04e50744172297bd5914ac6_640.jpg',
  },
  {
    id: 4,
    url: 'https://randomwordgenerator.com/img/picture-generator/55e1d2404e53a514f1dc8460962e33791c3ad6e04e507440762879dd9548c7_640.jpg',
  },
  {
    id: 5,
    url: 'https://randomwordgenerator.com/img/picture-generator/55e4d74b495bb10ff3d8992cc12c30771037dbf85254794e72267add944a_640.jpg',
  },
  {
    id: 6,
    url: 'https://randomwordgenerator.com/img/picture-generator/53e9d1454a54b10ff3d8992cc12c30771037dbf85254784a70287ed39345_640.jpg',
  },
  {
    id: 7,
    url: 'https://randomwordgenerator.com/img/picture-generator/55e7dd454256a914f1dc8460962e33791c3ad6e04e50744172297bd5914ac6_640.jpg',
  },
  {
    id: 8,
    url: 'https://randomwordgenerator.com/img/picture-generator/55e1d2404e53a514f1dc8460962e33791c3ad6e04e507440762879dd9548c7_640.jpg',
  },
  {
    id: 9,
    url: 'https://randomwordgenerator.com/img/picture-generator/55e1d2404e53a514f1dc8460962e33791c3ad6e04e507440762879dd9548c7_640.jpg',
  },
];
const Profile = ({navigation}) => {
  const [imageModal, setImageModal] = useState(null);
  const [images, setImages] = useState(mockImages);
  const lengthPosts = useMemo(() => {
    console.log('abc');
    return images.length;
  }, [images.length]);
  const handleDelete = useCallback(
    id => {
      let index = -1;
      const imagesClone = [...images];
      imagesClone.forEach((item, ind) => {
        if (item.id === id) {
          index = ind;
          return;
        }
      });
      imagesClone.splice(index, 1);
      console.log(imagesClone);
      setImages(imagesClone);
    },
    [images.length],
  );
  return (
    <ScrollView style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Profile</Text>
        <TouchableOpacity
          style={styles.signInBtn}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{...styles.textHeader, color: '#fff'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.image}>
          <Image
            style={styles.cover}
            source={{
              uri: 'https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/s960x960/133854021_1823631001138062_4807573368620165003_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_ohc=UMXfqOYqYpwAX9pPAtd&_nc_ht=scontent-xsp1-3.xx&tp=7&oh=2caa49a66dddbd2659604498c910de03&oe=60C1EE0D',
            }}
          />
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/p160x160/69198146_1346843938816773_7149406761399615488_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_ohc=T2HIPc3q7xIAX_ZdU2e&_nc_ht=scontent.fhan4-1.fna&tp=6&oh=1d695792abaf91545e01681f2983b0f6&oe=60C319FF',
            }}
          />
        </View>
        <Text style={styles.name}>Phạm Năng Hưng</Text>
        <View style={styles.infor}>
          <View style={styles.inforItem}>
            <Text style={styles.inforItemTitle}>Posts</Text>
            <Text style={styles.inforItemNumber}>{lengthPosts}</Text>
          </View>
          <View style={styles.inforItem}>
            <Text style={styles.inforItemTitle}>Followers</Text>
            <Text style={styles.inforItemNumber}>124</Text>
          </View>
          <View style={styles.inforItem}>
            <Text style={styles.inforItemTitle}>Following</Text>
            <Text style={styles.inforItemNumber}>125</Text>
          </View>
        </View>

        <View>
          <Text style={[styles.textHeader, {padding: 10}]}>Photos</Text>
        </View>
        <View style={styles.photosImages}>
          {images &&
            images.map((item, index) => (
              <ImageCompoent
                key={index}
                setImageModal={setImageModal}
                item={item}
                index={index}
                handleDelete={handleDelete}
              />
            ))}
        </View>
        <Modal
          style={styles.modalImage}
          animationType="fade"
          visible={imageModal === 0 || !!imageModal}
          onRequestClose={() => {
            setImageModal(null);
          }}>
          <Image
            style={styles.imageInModal}
            source={{
              uri: images[imageModal]?.url,
            }}
          />
        </Modal>
      </View>
    </ScrollView>
  );
};
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    borderBottomColor: 'rgba(0,0,0,0.4)',
    borderBottomWidth: 1,
  },
  textHeader: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
  },
  signInBtn: {
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    position: 'relative',
    height: 230,
  },
  cover: {
    height: 200,
    width: '100%',
  },
  avatar: {
    height: 160,
    width: 160,
    position: 'absolute',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 5,
    left: '50%',
    bottom: 0,
    transform: [{translateX: -80}],
  },
  name: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  infor: {
    flexDirection: 'row',

    borderBottomColor: 'rgba(0,0,0,0.4)',
    borderBottomWidth: 1,
  },
  inforItem: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 10,
  },
  inforItemTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#777',
    marginTop: 20,
  },
  inforItemNumber: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 20,
  },
  photosImages: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
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
  modalImage: {
    flex: 1,
  },
  imageInModal: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default Profile;
