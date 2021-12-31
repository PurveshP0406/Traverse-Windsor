
import * as React from 'react';
import {
  ScrollView,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  Platform,
  View,
} from 'react-native';
import { BottomNavigation,  Button, Snackbar, FAB, Portal, Provider,  DefaultTheme,  } from 'react-native-paper';
import Camera from './screens/Camera';
import Map from './screens/Map';
import Trending_Places from './screens/Trending_Places';
import {SafeAreaView} from 'react-native';

const HomeRoute = () =>
  <View style={styles.appContainer}>
  <View style ={styles.buttonView}>
  <Button color='#78a834' mode="contained"  onPress={() => console.log('Pressed')}>
  About Us
  </Button>
  <Button  align='center' icon='help' color='#78a834' mode='contained'  onPress={() => console.log('Pressed')}>
  Help
  </Button>
  </View>
<View style={styles.sectionContainer}>
  <Text style={styles.sectionTitle}>
    Traverse
  </Text>
  <Text style={styles.sectionTitle}>
    Windsor
  </Text>
  <Image
style={{width: 350, height: 350}}
source={require('./assets/logo_gif.gif')} />
</View>
</View>;

const ExploreWindsorRoute = () =>{
return(<><Camera/></>);};

const MapsRoute = () => {
  return(
    <Map/>
  );
};

const TrendingPlaceRoute = () => {
return(<><Trending_Places/></>);};

const EventsRoute = () => {

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const theme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
    ...DefaultTheme.colors,
    primary: '#0097a7',
    accent: '#71797E',
    backdrop: '#E5E4E2',
    background: '#E5E4E2',
    }
  };

  const { open } =  state;
  return(
    <Provider theme ={theme} >
      <Portal theme ={theme} >
          <FAB.Group
            open={open}
            icon={open ? 'close' : 'plus'}
            actions={[
              {
              icon: 'plus',
              label: 'Add New',
              onPress: () => console.log('Pressed add new') },
              {
                icon: 'calendar-today',
                label: 'View All',
                onPress: () => console.log('Pressed all events'),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
              }
            }}
          />
          </Portal>
    </Provider>
  );
};

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title:'Home Page', icon:'home'},
    { key: 'explore', title: 'Explore Windsor', icon: 'camera'},
    { key: 'trends', title: 'Trending Places', icon: 'map'},
    { key: 'events', title: 'Events', icon: 'calendar'},
    { key: 'map', title: 'Map', icon: 'map'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    explore: ExploreWindsorRoute,
    trends: TrendingPlaceRoute,
    events: EventsRoute,
    map: MapsRoute,
  });

  return (

          <BottomNavigation barStyle={{ backgroundColor: '#b7dfdb'}}
          navigationState={{ index, routes }}
          inactiveColor = '#9aa6b7'
          activeColor = '#71797E'
          onIndexChange={setIndex}
          renderScene={renderScene}
          />


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#0097a7',
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
  appContainer: {
    backgroundColor: '#0097a7',
    flex:1,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: '#71797E',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 40
  },
  sectionUC: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#71797E',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 40
  },
  buttonView:{
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:10,
    marginRight:10,
  },

});

export default App;
