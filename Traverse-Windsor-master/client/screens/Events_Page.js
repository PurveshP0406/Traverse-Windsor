//Events Page

//Importing necessary components from libraries
import React from 'react';
import { Card, Appbar, Title, Paragraph, Button, IconButton, Colors} from 'react-native-paper';
import { StyleSheet, Text, TouchableHighlight, View,SafeAreaView, Alert, Image, padding, Platform, FlatList, ScrollView} from 'react-native';
import { color } from 'jimp';

//Actions for buttons at the top of the page when clicked
const Events_Page = () => {
        const _goBack = () => console.log('Went back');
      
        const _handleSearch = () => console.log('Searching');
      
        const _handleMore = () => console.log('Shown more');
  return (
//View having styles of page as created at the end
   <View style={styles.page}>
    {/* Header for the page */}
    <Appbar.Header style={styles.topNavigation}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Events" style={styles.written} />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
{/* Scroll View for the cards of events */}
  <ScrollView>
    {/* 
    Start of one card of an event
    */}
{/* Card having style with margin 10 */}
  <Card style={{margin:10}}>
{/* Card Action which contains the Title and date of the event */}
  <Card.Actions>
    {/* Title of the Event */}
  <Title>Holi Festival</Title>
  <Title>{" - "}</Title>
  {/* Date of the event  */}
  <Title>29th July 2021</Title>
  </Card.Actions>
  {/* Description of the event */}
  <Paragraph style={styles.para}>Enjoy festival of colours!!</Paragraph>
  {/* Image of the event */}
    <Card.Cover source={require('../assets/holi.jpg')} />
    {/* ALl the card actions */}
    <Card.Actions>
      {/* Calendar Button */}
    <IconButton icon="calendar" color={Colors.grey900} size={20} onPress={() => console.log('Pressed') } />
    {/* Number of people going to the event */}
    <Paragraph style={styles.para}>98 going</Paragraph>
    {/* Directions button to be used in future */}
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    {/* <Paragraph>56 check-ins</Paragraph> */}
    </Card.Content>
    {/* Like Button */}
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    {/* Number of Likes */}
    <Paragraph style={styles.para}>51 likes</Paragraph>
    {/* RSVP Button */}
    <Button icon="send" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>RSVP</Button>
    </Card.Actions>
  </Card>
{/* 
End of the card of an event
*/}
{/* Similar format is used below for other cards as well */}
  <Card style={{margin:10}}>
  <Card.Actions>
  <Title>Music Festival</Title>
  <Title>{" - "}</Title>
  <Title>25th August 2021</Title>
  </Card.Actions>
  <Paragraph style={styles.para}>Dance to the tunes of heaven!!</Paragraph>
    <Card.Cover source={require('../assets/music.jpg')} />
    <Card.Actions>
    <IconButton icon="calendar" color={Colors.grey900} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>34 going</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    {/* <Paragraph>56 check-ins</Paragraph> */}
    </Card.Content>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>14 likes</Paragraph>
    <Button icon="send" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>RSVP</Button>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
  <Card.Actions>
  <Title>Halloween Party</Title>
  <Title>{" - "}</Title>
  <Title>31st October 2021</Title>
  </Card.Actions>
  <Paragraph style={styles.para}>Figure out your spooky side!!</Paragraph>
    <Card.Cover source={require('../assets/halloween.jpg')} />
    <Card.Actions>
    <IconButton icon="calendar" color={Colors.grey900} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>43 going</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    {/* <Paragraph>56 check-ins</Paragraph> */}
    </Card.Content>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>42 likes</Paragraph>
    <Button icon="send" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>RSVP</Button>
    </Card.Actions>
  </Card>
  <Card style={{margin:10}}>
  <Card.Actions>
  <Title>Christmas Party</Title>
  <Title>{" - "}</Title>
  <Title>25th December 2021</Title>
  </Card.Actions>
  <Paragraph style={styles.para}>Perfect spot for Holiday Party!!</Paragraph>
    <Card.Cover source={require('../assets/christmas.jpg')} />
    <Card.Actions>
    <IconButton icon="calendar" color={Colors.grey900} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>61 going</Paragraph>
    {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
    <Card.Content>
    {/* <Paragraph>56 check-ins</Paragraph> */}
    </Card.Content>
    <IconButton icon="heart" color={Colors.red500} size={20} onPress={() => console.log('Pressed') } />
    <Paragraph style={styles.para}>38 likes</Paragraph>
    <Button icon="send" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>RSVP</Button>
    </Card.Actions>
  </Card>
  </ScrollView>
  </View>
 
  );
}
//Stylesheets to be used by the components of this page
const styles = StyleSheet.create({
  //Style for the written part
  written:
  {
    color: '#fff',
    alignItems: 'center',
  },
//Style for the top navigation
  topNavigation:
  {
    backgroundColor: '#0097a7',
  },
  //Style for the page
  page:
  {
    backgroundColor: '#b7dfdb',
    flex:1,
  },
  //Style for the button
  button:
  {
    color: 'red',
    backgroundColor: '#5c8b2b',
  },
  //Style for para
  para:
  {
    // textAlign:'right',
    paddingLeft: 10,
    paddingRight: 10,
  }
});
//Exporting Events Page
export default Events_Page;


