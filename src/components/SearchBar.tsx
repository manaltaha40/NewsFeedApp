import { View, TextInput ,StyleSheet,Text} from 'react-native'
import React from 'react'

type SearchBarProps ={
    searchPlaceHolder:string
    onSearch:(query:string)=>void
}

const SearchBar: React.FC<SearchBarProps> = ({searchPlaceHolder , onSearch}) => {
  return (
    <View style = {styles.container}>
        <TextInput style ={styles.searchInput}
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
            backgroundColor:'white',
            borderRadius:8,
            marginTop:8
        },
        searchInput:{
            padding: 8,
        }

    }
);
export default SearchBar 