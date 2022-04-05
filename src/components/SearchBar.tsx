import { View, TextInput ,StyleSheet} from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';

type SearchBarProps ={
    searchPlaceHolder:string
    onSearch:(query:string)=>void
}

const SearchBar: React.FC<SearchBarProps> = ({searchPlaceHolder , onSearch}) => {
   const { colors } = useTheme();
  return (
    <View style = {[styles.container,{backgroundColor:colors.searchBarBg}]}>
        <TextInput style ={[styles.searchInput,{color:colors.textColor}]}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={queryText => onSearch(queryText)}
            placeholder = {searchPlaceHolder}
        />
    </View>
  )
}
const styles = StyleSheet.create(
    {
        container:{
            height:50,
            justifyContent: 'center',
            borderRadius:8,
            marginTop:8
        },
        searchInput:{
            padding: 8,
        }

    }
);
export default SearchBar 