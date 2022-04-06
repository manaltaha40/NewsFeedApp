
const config = {
    screens: {
        Home: {
            screens: {
               MainScreen:"details/:articalId",
               Settings: "settings",
               }
        }
    }
  };
  
  const linking = {
    prefixes: ["voisNews://news"],
    config,
  };

  //deepLinks supported : 'voisNews://news/details/4' ,'voisNews://news/settings'
  
  export default linking;