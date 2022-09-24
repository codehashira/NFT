import {
  View,
  ImageBackground,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import COLORS from '../theme/colors';
import BlurSurface from '../components/BlurSurface';
import Text from '../components/Text';
import {FONT_FAMILY} from '../theme/textStyles';
import LinearGradient from 'react-native-linear-gradient';
import {MARGIN, PADDING} from '../theme/spacing';
import Header from '../components/Header';
import {height, scale, width} from '../theme/scaling';
import {getRandomNFTData} from '../utils/generateRandomNFTData';

const genre_02 = require('../assets/images/genre_02.png');
const genre_01 = require('../assets/images/genre_01.png');
const blurbg = require('../assets/images/blurbg.png');

const DATA = [
  {
    id: 0,
    image: genre_02,
    title: 'Music',
  },
  {
    id: 1,
    image: genre_01,
    title: 'Art',
  },
  {
    id: 2,
    image: genre_02,
    title: 'Virtual Worlds',
  },
];

const NFTDATA = getRandomNFTData();

// const NFTDATA = [
//   {
//     id: 0,
//     nftCategory: 'Top seller',
//     nftData: [
//       {
//         id: 0,
//         image: genre_01,
//         name: 'Wave',
//         nftId: 'wav2 #5672',
//         value: 0.018,
//       },
//       {
//         id: 1,
//         image: genre_02,
//         name: 'Wave',
//         nftId: 'wav2 #5672',
//         value: 0.018,
//       },
//       {
//         id: 2,
//         image: genre_01,
//         name: 'Wave',
//         nftId: 'wav2 #5672',
//         value: 0.018,
//       },
//     ],
//   },
//   {
//     id: 0,
//     nftCategory: 'Trending collections',
//     nftData: [
//       {
//         id: 0,
//         image: genre_01,
//         name: 'Wave',
//         nftId: 'wav2 #5672',
//         value: 0.018,
//       },
//       {
//         id: 1,
//         image: genre_02,
//         name: 'Wave',
//         nftId: 'wav2 #5672',
//         value: 0.018,
//       },
//       {
//         id: 2,
//         image: genre_01,
//         name: 'Wave',
//         nftId: 'wav2 #5672',
//         value: 0.018,
//       },
//     ],
//   },
// ];

const CategoryCard = props => {
  const {image, title} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{flex: 1, width: scale(width * 0.65), marginRight: MARGIN.SM}}>
      <ImageBackground
        source={image}
        style={{width: '100%', height: '100%'}}
        borderRadius={30}>
        <Text
          mode={'titleLarge'}
          style={{
            textAlign: 'center',
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
            color: 'white',
          }}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

import OctiIcon from 'react-native-vector-icons/Octicons';
import IconButton from '../components/IconButton';

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

const _renderItem = ({item}) => {
  return <CategoryCard image={item.image} title={item.title} />;
};

const _renderNftItem = ({item}) => {
  return <NFTCard {...item} />;
};

const Home = () => {
  useEffect(() => {
    StatusBar.setTranslucent(false);
    StatusBar.setBackgroundColor(COLORS.BACKGROUND_ONE);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.BACKGROUND_ONE,
        padding: PADDING.RG,
      }}>
      <Header style={{flex: 0.1}} title="NFT Marketplace" />
      <FlatList
        style={{
          flex: 0.9,
          marginVertical: MARGIN.SM - 10,
        }}
        data={[]}
        ListHeaderComponent={() => {
          return (
            <View>
              <FlatList
                style={{height: scale(height * 0.2), flex: 1}}
                data={DATA}
                renderItem={_renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
              />
            </View>
          );
        }}
        ListHeaderComponentStyle={{}}
        ListFooterComponent={() => {
          return (
            <View>
              {NFTDATA.map(item => {
                return (
                  <View key={item.id}>
                    <Text
                      mode="titleLarge"
                      style={{
                        marginVertical: MARGIN.SM,
                        color: COLORS.TITLE_GRAY,
                        fontSize: 20,
                      }}>
                      {item.nftCategory}
                    </Text>
                    <FlatList
                      style={{flex: 1}}
                      data={item.nftData}
                      renderItem={_renderNftItem}
                      keyExtractor={item => item.id}
                      horizontal={true}
                    />
                  </View>
                );
              })}
            </View>
          );
        }}
        ListFooterComponentStyle={{
          paddingBottom: scale(70), //the tab navigator height is 70
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  linearGradient: {
    height: '25%',
    width: '100%',
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 30,
    borderWidth: 1,
  },
});
