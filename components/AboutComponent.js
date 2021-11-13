import React, { Component } from "react";
import { ScrollView } from "react-native";

export default class AboutComponent extends Component {
  static navigationOptions = {
    title: "About Us",
  };

  render() {
    return <ScrollView></ScrollView>;
  }
}
