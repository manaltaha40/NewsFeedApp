import { View, TextInput ,StyleSheet,Text} from 'react-native'
import React from 'react'

type SearchBarProps ={
    searchPlaceHolder:string
}

const SearchBar: React.FC<SearchBarProps> = ({searchPlaceHolder}) => {
  return (
    <View style = {styles.container}>
        <TextInput style ={styles.searchInput}
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
        },
        searchInput:{
            padding: 8,
        }

    }
);
export default SearchBar 