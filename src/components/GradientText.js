import React, {useEffect, useState} from 'react';
import Text from './Text';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {Platform} from 'react-native';

const GradientText = ({...props}) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (Platform.OS === 'android') {
      setTimeout(() => {
        setKey(prev => prev + 1);
      }, 0);
    }
  }, []);

  return (
    <MaskedView key={key} maskElement={<Text {...props} />}>
      <LinearGradient
        colors={props.colors}
        useAngle
        angle={260}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0}}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
