import {View, Text} from 'react-native';
import React from 'react';
import NFTDataContainer from '../../components/NFTDataContainer';
import {NFT_ITEM_DATA} from '../../utils/generateRandomNFTData';

const StatsActivity = () => {
  return (
    <View
      style={{
        flex: 1,
        borderTopWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
      }}>
      <NFTDataContainer data={NFT_ITEM_DATA} />
    </View>
  );
};

export default StatsActivity;
