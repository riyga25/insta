import React, {memo, useCallback} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Search = memo(({onChangeText, value = ''}) => (
  <TextInput
    onChangeText={onChangeText}
    style={styles.input}
    value={value}
    placeholder="Search"
  />
));

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderColor: '#999999',
    borderRadius: 3,
  },
});

export default Search;
