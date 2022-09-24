import React, {useCallback, useMemo, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import GorhomBottomSheet from '@gorhom/bottom-sheet';
import COLORS from '../theme/colors';
import {scale, width} from '../theme/scaling';

const BottomSheet = ({children}) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['70%', '70%', '100%'], []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GorhomBottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={{backgroundColor: COLORS.BACKGROUND_ONE}}
      handleIndicatorStyle={{
        backgroundColor: COLORS.BOTTOMSHEET_HANDLER_INDICATOR,
        width: scale(width * 0.5),
      }}>
      <View style={styles.contentContainer}>{children}</View>
    </GorhomBottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});

export default BottomSheet;
