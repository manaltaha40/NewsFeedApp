import { SafeAreaView,StyleSheet, ActivityIndicator,View ,Text  } from 'react-native'
import React , { useEffect, useState }from 'react'
import { useTheme } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar'
import NewsList from '../../components/NewsList'
import { getNewsService } from '../../api/GetNewsService'
import { useNavigation } from '@react-navigation/native'
import Routes from '../../navigation/Routes'
import ErrorView from '../../components/ErrorView'
import EmptyView from '../../components/EmptyView'
import { strings } from '../../locale/strings';
import { searchInArray } from '../../utils/utils';


const HomeScreen = () => {
  const { colors } = useTheme();
  const {navigate} = useNavigation();
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
          console.log("enter faunction then");
          
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

  useEffect(() => {
    loadData(false)
}, [])  

  return (
    <SafeAreaView style = {[styles.root, {backgroundColor: colors.background} ]}>
      {filteredNewsData?.length > 0 ?
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