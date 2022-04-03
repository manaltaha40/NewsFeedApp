import { ArticleApiResponse, News } from '../data/Interfaces';
import { API_KEY, endpoint, country } from './Constants'

export async function getNewsService(category = 'general') {
    let articles = await fetch(`${endpoint}?country=${country}&category=${category}`, {
        headers: {
            'X-API-KEY': API_KEY
        }
    });

    let result = await articles.json();
    let id = 0
    let news = result.articles.map((artical:ArticleApiResponse):News=>{
        return {
            id :String(id++) ,
            imageUrl : artical.urlToImage,
            title:artical.title,
            description:artical.description,
            publishedAt:artical.publishedAt,
            author:artical.author,
            content:artical.content
        }
    })
    return news;
}