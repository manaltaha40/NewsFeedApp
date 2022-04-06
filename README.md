# NewsFeedApp
News feed application using React Native

## Installing / Getting started
- switch to master branch
- install node_modules
```shell
npm install
```
- install ios pods
```shell
cd  ios 
```
```shell
pod install
```
- run the server
```shell
cd ../
```
```shell
npm start
```
- run the app on the ios or on the android device
```shell
npx react-native run-ios   
```
```shell
npx react-native run-android   
```
## App guide
 the app have a main screen that shows a list of News article headings + picture
• Clicking on a heading should open a detailed screen with the whole news meta data
On top of main screen, there should be a “Search” field, that will dynamically
filter the news by the typed word

• The main screen should have a “Pull to Refresh” functionality that updates the
news on screen

• support dark mode support

• support: English and Arabic

• support for deep linking
    deepLinks supported :
      'voisNews://news/details/{articalId}' -> navigate to  artical detailed screen
      'voisNews://news/settings'-> navigate to settings screen




