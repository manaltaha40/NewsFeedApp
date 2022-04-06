//import liraries
import React, { LegacyRef, Ref, RefObject } from 'react';
import { Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { News } from '../models/News';
import NewsCard from './NewsCard';
import { useTheme } from '@react-navigation/native';

type NewsListProps = {
    title:string
    data:[News]
    onPress:(item:News)=>void
    refreshing:boolean
    onRefresh:()=>void,
    refContainer:LegacyRef<FlatList>
}
const NewsList:React.FC<NewsListProps> = ({title,data,onPress,refreshing,onRefresh, refContainer}) => {
    const { colors } = useTheme();
    return (
        <>
            <Text style ={[styles.title,{color:colors.textCoror}]}>
               {title}
            </Text>
            <FlatList 
                data={data}
                keyExtractor={(item)=> item.id}
                showsVerticalScrollIndicator= {false}
                renderItem = {(row)=> <NewsCard  item ={row.item} onPress ={()=>{
                    onPress(row.item)
                }}/>}
                refreshControl = {<RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}/>}> 
                
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
