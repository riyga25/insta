import React, {memo, useCallback} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import {useList} from '../hooks';
import ListItem from '../components/ListItem';
import Search from '../components/Search';
import Paginator from '../components/Paginator';

const List = memo(({navigation}) => {
  const {
    quotes,
    search,
    updateSearch,
    changePagination,
    quotesLength,
    getList,
    isFetching,
  } = useList();

  const openDetail = useCallback(
    (symbol, description) => {
      navigation.navigate('Detail', {symbol, description});
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}) => <ListItem item={item} onPress={openDetail} />,
    [openDetail],
  );

  const renderSeparator = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  const renderEmpty = useCallback(
    () => <Text style={styles.empty}>Nothing found</Text>,
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={quotes}
        onRefresh={getList}
        refreshing={isFetching}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmpty}
        ListHeaderComponent={
          <Search onChangeText={updateSearch} value={search} />
        }
        ListHeaderComponentStyle={styles.header}
        keyExtractor={({symbol}) => symbol}
      />
      <Paginator action={changePagination} amount={quotesLength} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#999999',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: 'white',
  },
  empty: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default List;
