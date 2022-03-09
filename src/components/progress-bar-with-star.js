/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import Slider from 'react-native-slider';
import {Images, wp} from '../constants';

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

export default function ProgressBarWithStar(props) {
  const [value, setValue] = React.useState(1);

  useEffect(() => {
    let count = 0;
    data.forEach(item => {
      if (item.label2status) {
        item.label2status === 'Attained' ? count++ : null;
      }
    });
    setValue(count / data.length);
  }, []);

  return (
    <Slider
      value={value}
      //   onValueChange={value => setValue(value)}
      disabled={true}
      thumbImage={Images.star}
      thumbStyle={{
        height: 25,
        width: 35,
        alignItems: 'flex-end',
      }}
      //thumbTintColor="#ffffff"
      thumbTintColor={0}
      trackStyle={{
        height: 8,
        borderRadius: 4.5,
        backgroundColor: 'rgb(242,242,242)',
      }}
      minimumTrackTintColor={'rgb(255,163,0)'}
      maximumTrackTintColor={'rgb(255,126,0)'}
    />
  );
}
