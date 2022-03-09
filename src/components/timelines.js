/* eslint-disable react-native/no-inline-styles */
/*
status=Attained
status2=Progress
*/

import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors, wp, hp, Fontsize, Images} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import TimeLineCard from './timeline-card';

const data = [
  {
    id: 1,
    labelId1: 1,
    label1: 'Basic stretching',
    label1status: 'Attained',
    labelId2: 2,
    label2: `Walking along  ${'\n'} balancing beam`,
    label2status: 'Attained',
    labelId3: 3,
    label3: 'Shoulder Stand',
    label3status: 'Attained',
    status: true,
    mark: true,
  },
  {
    id: 2,
    labelId1: 1,
    label1: 'Basic stretching',
    label1status: 'Attained',
    labelId2: 2,
    label2: `Walking along ${'\n'} balancing beam`,
    label2status: 'In Progress',
    labelId3: 3,
    label3: 'Shoulder Stand',
    label3status: 'In Progress',
    status: false,
    status2: true,
  },
  {
    id: 3,
    labelId1: 1,
    label1: 'Back-In, Full-Out',
    label1status: 'Upcoming',
    status: false,
    status2: false,
  },
  {
    id: 5,
    labelId1: 1,
    label1: 'Layout Position',
    label1status: 'Upcoming',
    status: false,
    status2: false,
  },
  {
    id: 6,
    labelId1: 1,
    label1: 'Layout Position',
    label1status: 'Upcoming',
    status: false,
    status2: false,
  },
];

const Timelines = props => {
  return (
    <ScrollView style={{height: hp('70%')}}>
      {/* <FlatList
        data={data}
        style={{height: hp('70%')}}
        keyExtractor={item => item.id}
        renderItem={item => {
          return <TimeLineCard cardData={item} {...props} />;
        }}
      /> */}
      {data.map((item, index) => {
        return <TimeLineCard cardData={item} {...props} key={index} />;
      })}
    </ScrollView>
  );
};

export default Timelines;
