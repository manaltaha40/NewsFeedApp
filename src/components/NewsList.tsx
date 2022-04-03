//import liraries
import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { News } from '../data/Interfaces';
import NewsCard from './NewsCard';

type NewsListProps = {
    title:string
    data:[News]
    onPress:(item:News)=>void
}
const NewsList:React.FC<NewsListProps> = ({title,data,onPress}) => {
    return (
        <>
            <Text style ={styles.title}>
               {title}
            </Text>
            <FlatList 
                data={data}
                keyExtractor={(item)=> item.id}
                showsVerticalScrollIndicator= {false}
                renderItem = {(row)=> <NewsCard  item ={row.item} onPress ={()=>{
                    onPress(row.item)
                }}/>}> 

            </FlatList>
        </>
    );
};


const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:22,
        marginVertical:8

    }
});

export default NewsList
;
