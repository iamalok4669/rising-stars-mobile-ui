import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import CustomLayout from '../../custom/CustomLayout';
import Studentcard from '../../custom/Studentcard';
import ProgressTracker from '../../custom/ProgressTracker';
import {colors, hp, wp} from '../../Constant/Constant';
import {RadioButton} from 'react-native-paper';
import Forwardbutton from '../../custom/Forwardbutton';
import PopUp from '../../custom/PopUp';
import PopUpCard from '../../custom/PopUpCard';

const Additional_Sections = props => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(modalVisible);
  return (
    <CustomLayout
      Customchildren={
        <Studentcard
          name={'Ayman Mongal'}
          id={'KKBK1211'}
          activityrequired
          activity={`Pre-school gymnastics(Age1-3)`}
          subactivity={'Childhood Joy Classes'}
          classname={'Childhood Joy Classes'}
        />
      }
      steps
      start={5}
      end={7}
      header
      headertext={`Additional ${'\n'}Sections`}
      headertextStyle={{
        fontSize: wp('8%'),
        fontFamily: 'Nunito-SemiBold',
      }}
      backbutton={() => props.navigation.goBack()}
      Customchildren2={<ProgressTracker percent={5} />}>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalstyle}>
            <View style={styles.modalView}>
              <Text
                style={{fontFamily: 'Nunito-SemiBold', marginTop: hp('1.5%')}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  justifyContent: 'center',
                  backgroundColor: colors.orange,
                  width: wp('10%'),
                  alignItems: 'center',
                  borderRadius: 10,
                  height: hp('5%'),
                  alignSelf: 'flex-end',
                }}>
                <Text>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <Text style={styles.newsheader}>News, communication and marketing</Text>
      <Text style={{fontFamily: 'Nunito-SemiBold', marginVertical: hp('1.5%')}}>
        I would like to receive{' '}
        <Text
          style={{
            fontFamily: 'Nunito-Regular',
            fontSize: wp('4%'),
            color: '#ff7e00',
          }}>
          Zippy’s
        </Text>{' '}
        newsletter and other communications
      </Text>
      <Select way={'by Email'} />
      <Select way={'by Telephone'} />
      <Select way={'by SMS'} />
      <Text style={styles.newsheader}>Club Rules</Text>
      <Text
        style={{
          fontFamily: 'Nunito-SemiBold',
          marginTop: hp('1.5%'),
          fontSize: wp('4%'),
          paddingRight: wp('4%'),
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since.
      </Text>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.bottom}>Read more about Club Rule</Text>
      </TouchableOpacity>
      <Forwardbutton
        style={{alignSelf: 'flex-end'}}
        onPress={() => props.navigation.navigate('Pay')}
      />
    </CustomLayout>
  );
};

const Select = props => {
  return (
    <View style={styles.container}>
      <RadioButton />
      <Text style={styles.way}>{props.way}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: hp('1%'),
    alignItems: 'center',
  },
  way: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: wp('4%'),
    color: '#7f7f7f',
  },
  bottom: {
    fontFamily: 'Nunito-SemiBold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#ff7e00',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  optional: {
    marginTop: hp('2.5%'),
    marginLeft: hp('5.4%'),
    color: colors.grey,
  },
  newsheader: {
    fontFamily: 'Nunito-SemiBold',
    width: wp('80%'),
    fontSize: hp('2.8%'),
  },
  centeredView: {
    flex: 1,
    height: hp('5%'),
    // borderWidth:1,
    width: wp('30%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22
  },
  // modalstyle: {
  //     flex: 1,
  //     height: hp('5%'),
  //     // borderWidth:1,
  //     width: wp('30%'),
  //     alignItems: 'center',
  //     justifyContent: 'center',
  // },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  // button: {
  //     borderRadius: 20,
  //     padding: 10,
  //     elevation: 2
  // },
  // buttonOpen: {
  //     backgroundColor: "#F194FF",
  // },
  // buttonClose: {
  //     backgroundColor: "#2196F3",
  // },
  // textStyle: {
  //     color: "white",
  //     fontWeight: "bold",
  //     textAlign: "center"
  // },
  // modalText: {
  //     marginBottom: 15,
  //     textAlign: "center"
  // }
});

export default Additional_Sections;
