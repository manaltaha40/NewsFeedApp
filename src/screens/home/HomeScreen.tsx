import { SafeAreaView,StyleSheet, ActivityIndicator,View ,Text  } from 'react-native'
import React , { useEffect, useState }from 'react'
import SearchBar from '../../components/SearchBar'
import NewsList from '../../components/NewsList'
import { getNewsService } from '../../api/GetNewsService'
import Colors from '../../utils/Colors'
import { useNavigation } from '@react-navigation/native'
import Routes from '../../navigation/Routes'
import { News } from '../../data/Interfaces'
import ErrorView from '../../components/ErrorView'
import EmptyView from '../../components/EmptyView'


const HomeScreen = () => {
  const placeholder:string = 'Search here ..'
  const newsListTitle:string = 'Global News :'
  const emptyViewText:string = 'There is no articals'
  const errorViewText:string = 'Error fetching data\n Check your network connection!\nthen try again'
  const errorViewBtn:string = 'try again'

  const [filteredNewsData, setFilteredNewsData] = useState(null)
  const [newsData, setNewsData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const search = (query:string)=>{
    let searchKey = query.toLowerCase().trim()
    if(searchKey.length > 0){
      let filterdData = newsData.filter((atrical:News) => 
        atrical.title.toLowerCase().trim().includes(searchKey))
      setFilteredNewsData(filterdData)
    }
    else
      setFilteredNewsData(newsData)
  }
  const loadData = (isFromRefreshList:boolean)=>{
    isFromRefreshList?  setRefreshing(true):setIsLoading(true);
   getNewsService('general')
        .then(data => {
          setNewsData(data);
          setFilteredNewsData(data);
          setError(null);
          console.log("enter faunction then");
          
        })
        .catch(error => {
          setError(error);
          console.log("enter faunction catch");
        })
        .finally(()=>{
          isFromRefreshList?  setRefreshing(false):setIsLoading(false);
        })
  }
  const onRefresh =()=>{
    loadData(true) 
  }

  const {navigate} = useNavigation();
  useEffect(() => {
    loadData(false)
}, [])  

  return (
    <SafeAreaView style = {styles.root}>
      {filteredNewsData?.length > 0 ?
        <SearchBar searchPlaceHolder ={placeholder} onSearch ={search} />
        : null} 
    
    {filteredNewsData?.length > 0 ?
     (<NewsList 
        title= {newsListTitle}
        data={filteredNewsData} 
        onPress={(item) => {
         navigate(Routes.DetailedScreen,{
          paramKey: item,
        });
        }}
        refreshing = {refreshing}
        onRefresh ={onRefresh}
    /> ) : null}
     {isLoading?
      (<View style={styles.loadingView}>
        <ActivityIndicator size="large" color= {Colors.loadingColor} />
      </View>
    ): null
  }

   {error?
      (<ErrorView 
          errorViewText={errorViewText} 
          errorViewBtnText ={errorViewBtn}
          onRetry={()=>{loadData(false)}}/>
    ): null
  }

{filteredNewsData?.length === 0 ?
      (<EmptyView emptyViewText={emptyViewText}/>
    ): null
  }
    </SafeAreaView>
  )
}


const styles = StyleSheet.create(
  {
      root: {
          flex:1,
          backgroundColor: Colors.appBackground,
          paddingStart:8,
          paddingEnd:8
      },
      loadingView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      
}
  
)


export default HomeScreen