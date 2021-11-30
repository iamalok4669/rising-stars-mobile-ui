/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomLayout, StudentCard, ClassCard, Slot} from '../../components';
import {hp, colors} from '../../constants';

export default function ChangeClass() {
  return (
    <CustomLayout
      names={'Change Class'}
      Customchildren={
        <StudentCard
          name={'Ayman Mongal'}
          id={'KKBK1211'}
          activityrequired
          activity={'Pre-school gymnastics(Age1-3)'}
          subactivity={'Childhood Joy Classes'}
          clubid={'PDPS4212'}
          style={{backgroundColor: colors.orange}}
        />
      }>
      <Text style={{fontFamily: 'Nunito-SemiBold'}}>Current Class/Session</Text>
      <ClassCard
        className={'Pre-school gymnastics(Age 1-3)'}
        // subtitle={"Childhood Joy Classes"}
        button
        title={'Change Class'}
        button2
        day={'Monday'}
        time="9:30 am - 11:30 am"
        facility={'Gym Hall'}
        coach={'Henry Itondo'}
      />
      <Text style={{fontFamily: 'Nunito-SemiBold', marginVertical: hp('1%')}}>
        Available Session
      </Text>
      <Slot
        radio
        selected={'checked'}
        day={'Monday'}
        time="9:30 am - 11:30 am"
        facility={'Gym Hall'}
        coach={'Henry Itondo'}
      />
      <View style={{height: hp('1%')}} />
      <Slot
        radio
        day={'Wednesday'}
        time={'9:30 am - 11:30 am'}
        facility={'Gym Hall'}
        coach={'Tua Manera'}
      />
      <View style={{height: hp('1%')}} />
      <Slot
        radio
        day={'Friday'}
        time={'9:30 am - 11:30 am'}
        facility={'Gym Hall'}
        coach={'Sampson Totton'}
      />
    </CustomLayout>
  );
}
