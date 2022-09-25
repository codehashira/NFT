import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import NFTDataContainer from '../../components/NFTDataContainer';
import {NFT_ITEM_DATA} from '../../utils/generateRandomNFTData';
import {TransparentButton} from '../../components/Button';
import RadialGradient from 'react-native-radial-gradient';
import COLORS from '../../theme/colors';
import {scale, width, height} from '../../theme/scaling';
const StatsRanking = () => {
  const [selected, setSelected] = useState('All Categories');

  const handleAllCategories = () => {
    if (selected === 'All Categories') {
      setSelected('');
    } else {
      setSelected('All Categories');
    }
  };

  const handleAllChains = () => {
    if (selected == 'All Chains') {
      setSelected('');
    } else {
      setSelected('All Chains');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        borderTopWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
      }}>
      <RadialGradient
        style={{flex: 1}}
        colors={['#1A3960', COLORS.BACKGROUND_ONE]}
        stops={[0.3, 1]}
        center={[scale(width * 0.6), scale(height * 0.26)]}
        radius={150}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TransparentButton
            onPress={handleAllCategories}
            active={selected === 'All Categories'}>
            All Categories
          </TransparentButton>
          <TransparentButton
            onPress={handleAllChains}
            active={selected === 'All Chains'}>
            All Chains
          </TransparentButton>
        </View>
        <NFTDataContainer
          data={NFT_ITEM_DATA.filter((item, index) => {
            if (selected === 'All Categories') {
              return index < 5;
            } else if (selected === 'All Chains') {
              return index < 8;
            }
            return true;
          })}
        />
      </RadialGradient>
    </View>
  );
};

export default StatsRanking;
