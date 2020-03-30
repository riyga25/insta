import React, {memo, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ListItem = memo(({item: {symbol, description}, onPress}) => {
  const pressItem = useCallback(() => {
    onPress(symbol, description);
  }, [onPress, symbol, description]);

  return (
    <TouchableOpacity onPress={pressItem} style={styles.item}>
      <Text>{symbol}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  item: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default ListItem;
