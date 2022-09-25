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
import NFTCard from '../components/NFTCard';
import CategoryCard from '../components/CategoryCard';
import RadialGradient from 'react-native-radial-gradient';

const genre_02 = require('../assets/images/genre_02.png');
const genre_01 = require('../assets/images/genre_01.png');
const blurbg = require('../assets/images/blurbg.png');

const HomeHeaderAvatar = require('../assets/images/avatar.png');

const DATA = [
  {
    id: 0,
    image: genre_02,
    title: 'Music',
  },
  {
    id: 1,
    image: genre_01,
    title: 'Virtual Worlds',
  },
  {
    id: 2,
    image: genre_02,
    title: 'Virtual Worlds',
  },
];

const NFTDATA = getRandomNFTData();

const Home = ({navigation, route}) => {
  const _renderItem = ({item}) => {
    return <CategoryCard {...item} onPress={navigation.navigate} />;
  };

  const _renderNftItem = ({item}) => {
    return <NFTCard {...item} onPress={navigation.navigate} />;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.BACKGROUND_ONE,
      }}>
      <RadialGradient
        style={{flex: 1}}
        colors={['#1A3960', COLORS.BACKGROUND_ONE]}
        stops={[0.3, 1]}
        center={[scale(width * 0.6), scale(height * 0.26)]}
        radius={150}>
        <Header
          style={{flex: 0.1}}
          title="NFT Marketplace"
          shouldShowIcon={true}
          onBackPress={navigation.goBack}
          headerIcon={
            <Image source={HomeHeaderAvatar} style={{height: 39, width: 39}} />
          }
        />
        <FlatList
          style={{
            flex: 0.9,
            marginVertical: MARGIN.SM - 10,
            paddingHorizontal: PADDING.RG,
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
      </RadialGradient>
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
