import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

export let strings = new LocalizedStrings({
 
 en:{
    homeScreenTitle : "the News",
   detailedScreenTitle:"News Detailes",
   placeholder :"Search here ..",
   newsListTitle  : "Global News :",
   emptyViewText : "There is no articals",
    errorViewText : "Error fetching data",
    errorViewBtn: "try again",
   articalLinkText: "For more information visit the original link : ",
   AuthorName:"Author Name:",
   sourceNameText:"Published in : ",
   openLinkError : "can't open this URL: "

 },
 ar:{
    homeScreenTitle : "الآخبار",
    detailedScreenTitle:"تفاصيل الخبر",
    placeholder :"بحث..",
    newsListTitle  : "الآخبار العامة",
    emptyViewText : "لا توجد اخبار ",
     errorViewText : "خطآ",
     errorViewBtn: "حاول مرة اخري",
    articalLinkText: "لمزيد من التفاصيل ،زور الموقع الاصلي ",
    AuthorName:"صاحب الخبر :",
    sourceNameText: "نُشر في ",
    openLinkError : "لا يمكن فتح هذا الرابط"
  }
});