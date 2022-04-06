import { SafeAreaView,StyleSheet, ActivityIndicator,View } from 'react-native'
import React , { useEffect, useState }from 'react'
import { useRoute, useTheme } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar'
import NewsList from '../../components/NewsList'
import { getNewsService } from '../../api/GetNewsService'
import { useNavigation } from '@react-navigation/native'
import Routes from '../../navigation/Routes'
import ErrorView from '../../components/ErrorView'
import EmptyView from '../../components/EmptyView'
import { strings } from '../../locale/strings';
import { searchInArray } from '../../utils/utils';
import { News } from '../../models/News';


const HomeScreen = () => {
  const { colors } = useTheme();
  const {navigate} = useNavigation();
  const route = useRoute();
 
  
  const [filteredNewsData, setFilteredNewsData] = useState(null)
  const [newsData, setNewsData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const search = (query:string)=>{
      let filterdData = searchInArray (query , newsData)
      setFilteredNewsData(filterdData)
  }

  const loadData = (isFromRefreshList:boolean)=>{
    isFromRefreshList?  setRefreshing(true):setIsLoading(true);
   getNewsService('general')
        .then(data => {
          setNewsData(data);
          setFilteredNewsData(data);
          setError(null);  
          //goToDetailedScreenBYDeepLink(data) 
          
                
        })
        .catch(error => {
          setError(error);
          console.log(error);
        })
        .finally(()=>{
          isFromRefreshList?  setRefreshing(false):setIsLoading(false);
        })
  }

  const onRefresh =()=>{
    loadData(true) 
  }
  const goToDetailedScreenBYDeepLink=(data:News[])=>{
    console.log(route);
    
    if(route?.params?.articalId && (data.length > route?.params?.articalId && route?.params?.articalId >0)){
      navigate(Routes.DetailedScreen,{
        paramKey:data[route?.params?.articalId],
      });
    }  
  }

  useEffect(() => {
    console.log( "call useEffect");
    loadData(false)
  }, [])  
  useEffect(() => {
    console.log( "call useEffect");
    goToDetailedScreenBYDeepLink(newsData)
  }, [newsData,route?.params])  

  return (
    <SafeAreaView style = {[styles.root, {backgroundColor: colors.background} ]}>
      {filteredNewsData?
        <SearchBar searchPlaceHolder ={strings.placeholder} onSearch ={search} />
        : null} 
    
    {filteredNewsData?.length > 0 ?
     (<NewsList 
        title= {strings.newsListTitle}
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
        <ActivityIndicator size="large" color= {colors.loadingColor} />
      </View>
    ): null
  }

   {error?
      (<ErrorView 
          errorViewText={strings.errorViewText} 
          errorViewBtnText ={strings.errorViewBtn}
          onRetry={()=>{loadData(false)}}/>
    ): null
  }

{filteredNewsData?.length === 0 ?
      (<EmptyView emptyViewText={strings.emptyViewText}/>
    ): null
  }
    </SafeAreaView>
  )
}


const styles = StyleSheet.create(
  {
      root: {
          flex:1,
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