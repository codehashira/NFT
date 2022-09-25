import {View, Image, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Text from './Text';
import COLORS from '../theme/colors';
import {scale} from '../theme/scaling';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {MARGIN, PADDING} from '../theme/spacing';
import GradientText from './GradientText';
import {FONT_FAMILY} from '../theme/textStyles';

const Header = props => {
  const [hideHeaderTitle, setHideHeaderTitle] = useState(false);
  const {
    title,
    style,
    headerIcon,
    shouldShowIcon,
    backIconvisible,
    onBackPress,
  } = props;
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: StatusBar.currentHeight,
          paddingHorizontal: PADDING.MD,
        },
        style,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {backIconvisible && (
          <MIcon
            onPress={() => {
              setHideHeaderTitle(true);
              setTimeout(() => {
                onBackPress();
              }, 0);
            }}
            name="arrow-back"
            size={24}
            color={COLORS.GREY}
            style={{marginRight: 10}}
          />
        )}
        {!hideHeaderTitle &&
          (title === 'NFT Marketplace' ? (
            <GradientText
              colors={['#DAD6DC', '#8D8496']}
              style={{fontFamily: FONT_FAMILY.BLACK, fontSize: 24}}>
              {title}
            </GradientText>
          ) : (
            <GradientText
              colors={['#DAD6DC', '#8D8496']}
              style={{fontFamily: FONT_FAMILY.REGULAR, fontSize: 21}}>
              {title.toUpperCase()}
            </GradientText>
          ))}
      </View>

      {shouldShowIcon && headerIcon}
    </View>
  );
};

export default Header;
