import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import OverViewStore from '../../components/OverViewStore';
import OptionMore from './components/OptionMore';
import OptionMoreList from './components/OptionMoreList';

export default function index() {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <OverViewStore
        style={{justifyContent: 'space-between', paddingHorizontal: 0}}>
        <View style={styles.wrappperAmount}>
          <TouchableOpacity activeOpacity={0.7} style={styles.icon}>
            <FontAwesomeIcon icon={faPlus} />
          </TouchableOpacity>
          <Text style={{marginHorizontal: 10}}>2</Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.icon}>
            <FontAwesomeIcon icon={faMinus} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.btnAddToCard}>
          <Text style={{color: '#fff', fontWeight: '700'}}>Add to Card</Text>
        </TouchableOpacity>
      </OverViewStore>
      <View style={styles.wrapperText}>
        <Text style={styles.text}>
          Muộn rồi mà sao còn nhìn lên trần nhà rồi quay ra lại quay vào Nằm
          trằn trọc vậy đến sáng mai, ôm tương tư nụ cười của ai đó Làm con tim
          ngô nghê như muốn khóc oà Vắt tay lên trên trán mơ mộng được đứng bên
          em trong nắng xuân hồng
        </Text>
      </View>
      <View style={{marginBottom: 50}}>
        <OptionMoreList />
        <OptionMoreList />
        <OptionMoreList />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  wrappperAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAddToCard: {
    width: '60%',
    height: '100%',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  wrapperText: {
    paddingHorizontal: 35,
  },
  text: {
    color: '#777',
    lineHeight: 25,
    fontSize: 16,
  },
  textHeaderOption: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 30,
    marginBottom: 20,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
