import {ImageSourcePropType} from 'react-native';

export interface News {
    id:string
    author:string
    imageUrl:string
    title:string
    description:string
    content:string
    publishedAt:string
    sourceName:string
    articalLink:string
};
export interface ArticleApiResponse{
    source :{
        id:string
        name:string
    }
    author:string
    title:string
    description:string
    url:string
    urlToImage:string
    content:string
    publishedAt:string
}
