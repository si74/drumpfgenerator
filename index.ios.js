/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
  //Image
} from 'react-native';

import {
    KDSocialShare
} from 'NativeModules';

class AwesomeProject extends Component {

  constructor() {
    super();
    this._tweet = this._tweet.bind(this);
    this._generate = this._generate.bind(this);
    this.state = {
      quote : "click below",
      photo : "trump1.jpg"
    }
    // TODO(sneha): this is a temp fix for quick pitch purposes. 
    this.opts = [
      {
        quote : "Just arrived in Scotland. Place is going wild over the vote. They took their country back, just like we will take America back. No games! #trumpparodyBS",
        photo: "images/trump2.jpg",
      },
      {
        quote : "B #trumpparodyBS",
        photo: "images/trump3.jpg",
      },
      {
        quote : "C #trumpparodyBS",
        photo: "images/trump4.jpg",
      },
      {
        quote : "C #trumpparodyBS",
        photo: "images/trump5.jpg",
      },
      {
        quote : "D #trumpparodyBS",
        photo: "images/trump6.jpg",
      }
    ]
  }

  _tweet() {
        // TODO(sneha): linking libraries totally broken so this is def not working
        KDSocialShare.tweet({
                           'text':'Global democratized marketplace for art',
                           'link':'https://artboost.com/',
                           'imagelink':'https://artboost.com/apple-touch-icon-144x144.png',
                           //or use image
                           'image': 'artboost-icon',
                           },
                           (results) => {
                           console.log(results);
                           }
                           );
  }

  _generate(){

    val = Math.floor(Math.random() * 5)
    this.setState({"quote":this.opts[val].quote});

  }

    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the drumpf tweet generator!
        </Text>
        <Text>
          {this.state.quote}
        </Text>
        <TouchableHighlight onPress={this._generate}>
          <View style={styles.generate}>
           <Text style={styles.generate2}>#</Text>
        </View>
        //<Image style={styles.icon} source={require('images/trump1.jpg')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={this._tweet}>
          <View style={styles.tweet}>
           <Text style={styles.tweet2}>Share on Twitter</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  generate: {
    alignItems: 'center',
    justifyContent:'center', 
    width: 75,
    height: 50,
    backgroundColor:'#ff6600'
  },
  generate2: {
    color:'#ffffff',
    fontWeight:'800'
  },
  tweet: {
    alignItems: 'center',
    justifyContent:'center', 
    width: 150, 
    height: 50,
    backgroundColor:'#00aced'
  },
  tweet2: {
    color:'#ffffff',
    fontWeight:'800'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
