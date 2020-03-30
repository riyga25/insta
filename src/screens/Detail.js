import React, {memo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useDetail} from '../hooks';

const Detail = memo(({route}) => {
  const {symbol, description} = route.params;
  const {detail} = useDetail(symbol);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Symbol: {symbol}</Text>
      <Text style={styles.text}>Description: {description}</Text>
      <Text style={styles.text}>Digits: {detail.digits}</Text>
      <Text style={styles.text}>Ask: {detail.ask}</Text>
      <Text style={styles.text}>Bid: {detail.bid}</Text>
      <Text style={styles.text}>Change: {detail.change}</Text>
      <Text style={styles.text}>Change 24h: {detail.change24h}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 32,
  },
});

export default Detail;
