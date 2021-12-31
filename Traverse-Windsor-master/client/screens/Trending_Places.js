//Trending Places Page

//Importing necessary components from libraries
import React, {useEffect, useState} from 'react';
import {
  Card,
  Appbar,
  Title,
  Paragraph,
  Button,
  IconButton,
  Colors,
} from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {color} from 'jimp';

//Actions for loading data and setting the state
const Trending_Places = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //Fetch the JSON data from AWS Dynamo DB Server
  useEffect(() => {
    let mounted = true;
    fetch('http://10.0.2.2:8080/fetch_trending_places', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => setData(json.scanned_response.Items)
      //json.data.scanned_response.Items
      )
      .catch(error => console.error(error))
      .finally(() => {
        return setLoading(false);
      });

    return function cleanup() {
      mounted = false;
    };
  }, []);

  //Actions for buttons at the top of the page when clicked
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    //View having styles of page as created at the end
    <View style={styles.page}>
      {/* Header for the page */}
      <Appbar.Header style={styles.topNavigation}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Trending Places" style={styles.written} />
        {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <ScrollView>
        {/* Scroll View for the cards of Trending Places */}
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          //Creating an object el to map the data from the AWS Dynamo DB table
          data.map(el => {
            //Start of the Card
            return <Card style={{margin: 10}}>
              <Card.Content>
                {/* Name of the Trending Places */}
                <Title>{el.place_name}</Title>
              </Card.Content>
              {/* Image of the Trending Places */}
              <Card.Cover
                source={{uri:el.image_url}}
              />
              <Card.Actions>
                {/* Like Button */}
                <IconButton
                  id="like"
                  icon="heart"
                  color={Colors.red500}
                  size={20}
                  onPress={() => console.log('Pressed')}
                />
                {/* <Text>{el.place_id}</Text> */}
                {/* Number of Likes of the Trending Places */}
                <Paragraph style={styles.para}>{el.likes} likes</Paragraph>
                {/* Directions button to be used in future */}
                {/* <Button icon="car" mode="contained" onPress={() => console.log('Pressed')} style={styles.button}>DIRECTIONS</Button> */}
                <Card.Content>
                  {/* Number of checkins to the Place */}
                  <Paragraph>{el.check_in} check-ins</Paragraph>
                </Card.Content>
              </Card.Actions>
            </Card>
            // End of the card
          })
        )}
      </ScrollView>
    </View>
  );
};
//Stylesheets to be used by the components of this page
const styles = StyleSheet.create({
//Style for the written part
  written: {
    color: '#fff',
    alignItems: 'center',
  },
//Style for the top navigation
  topNavigation: {
    backgroundColor: '#0097a7',
  },
  //Style for the page
  page: {
    backgroundColor: '#b7dfdb',
    flex: 1,
  },
  //Style for the button
  button: {
    color: 'red',
    //backgroundColor: '#78a834',
  },
  //Style for the para
  para: {
    textAlign: 'right',
  },
  //Add comment
});
//Exporting Trending Places Page
export default Trending_Places;
