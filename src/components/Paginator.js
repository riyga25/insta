import React, {memo} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Paginator = memo(({amount = 0, action}) => {
  return (
    <View style={styles.container}>
      <Button color="red" onPress={action(-1)} title="Prev" />
      <Text>{`10 of ${amount}`}</Text>
      <Button color="red" onPress={action(1)} title="Next" />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Paginator;
