import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

//setting mapbox access token to access Mapbox API
MapboxGL.setAccessToken("pk.eyJ1Ijoic2hvYWliMjgiLCJhIjoiY2twd21wNm52MDJhcTJ3bG9yc2F4ZXcxdCJ9.r4beCFtIfexphmyAXtjDdg");

//adding styles for Map and setting dimensions
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 700,
    width: 400,
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});

export default class Map extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

//Displaying map on screen using Mapbox provided component - MapboxGL
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} /> 
        </View>
      </View>
    );
  }
}
