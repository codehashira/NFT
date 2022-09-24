import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {height, scale, width} from '../theme/scaling';
import {PADDING, MARGIN} from '../theme/spacing';
import OctiIcon from 'react-native-vector-icons/Octicons';
import IconButton from '../components/IconButton';
import COLORS from '../theme/colors';

const NFTCard = props => {
  const [loved, setLoved] = useState(false);
  const {image, name, nftId, value} = props;
  return (
    <View
      style={{
        width: scale(width * 0.42),
        height: scale(height * 0.32),
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: PADDING.SM,
        marginRight: MARGIN.SM,
        borderRadius: 30,
      }}>
      <Image
        source={image}
        style={{flex: 1, width: '100%', marginBottom: MARGIN.SM}}
        borderRadius={30}
      />
      <View>
        <Text mode={'titleSmall'} style={{color: COLORS.WHITE}}>
          {name}
        </Text>
        <Text mode={'labelMedium'} style={{color: COLORS.NFT_ID_COLOR}}>
          {nftId}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: MARGIN.SM,
        }}>
        <Text mode={'titleSmall'} style={{color: COLORS.WHITE}}>
          {value}
        </Text>
        <IconButton
          onPress={() => {
            setLoved(!loved);
          }}
          icon={
            <OctiIcon
              name={loved ? 'heart-fill' : 'heart'}
              size={12}
              color={loved ? COLORS.HEART_RED : COLORS.NFT_ID_COLOR}
            />
          }
        />
      </View>
    </View>
  );
};

export default NFTCard;
