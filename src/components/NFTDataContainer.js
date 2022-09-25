import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../theme/colors';
import Text from '../components/Text';
import {height, scale} from '../theme/scaling';
import {MARGIN} from '../theme/spacing';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {prismIcon} from '../utils/getAssetsData';

const ImageIcon = ({source, style}) => {
  return (
    <Image
      source={source}
      style={[{width: 24, height: 24}, style]}
      resizeMode="cover"
    />
  );
};

const _renderNftDataItem = ({item}) => {
  return <NFTDataItem {...item} />;
};

const NFTDataItem = ({srno, image, name, amount, percent}) => {
  return (
    <View
      style={{
        height: scale(height * 0.1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
      }}>
      <Text mode="labelMedium" style={{flex: 0.1, color: 'white'}}>
        {srno ?? 1}
      </Text>
      <Image
        source={image ?? imagesList[8]}
        style={{
          flex: 0.2,
          height: '100%',
          resizeMode: 'contain',
        }}
      />
      {/* Divider */}
      <View style={{margin: 5}}></View>
      {/* Divider */}
      <View style={{flex: 0.75}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text mode="titleMedium">{name ?? 'Azumi'}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <ImageIcon
              source={prismIcon}
              style={{height: 15, width: 7, marginRight: 10}}
            />
            <Text mode={'titleSmall'}>{amount ?? 2000055.02}</Text>
          </View>
        </View>
        {/* Divider */}
        <View style={{margin: 5}}></View>
        {/* Divider */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity activeOpacity={0.6}>
            <Text mode="bodySmall">view info</Text>
          </TouchableOpacity>
          <Text
            mode="labelMedium"
            style={
              'profit' === 'loss' ? {color: COLORS.RED} : {color: COLORS.GREEN}
            }>
            {percent ?? '3.99%'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NFTDataContainer = ({data}) => {
  return (
    <View
      style={{
        flex: 1,
        margin: MARGIN.RG,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.2)',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 30,
        paddingVertical: 10,
      }}>
      <BottomSheetFlatList
        data={data}
        initialNumToRender={8}
        renderItem={_renderNftDataItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
