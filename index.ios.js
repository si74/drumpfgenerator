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
} from 'react-native';

import {
    KDSocialShare
} from 'NativeModules';

class AwesomeProject extends Component {

  constructor() {
    super();
    this._tweet = this._tweet.bind(this);
    this._generate = this._generate.bind(this);
  }

  _tweet() {

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

  }

    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the drumpf tweet generator!
        </Text>
        
        <TouchableHighlight onPress={this._generate}>
          <View style={styles.generate}>
           <Text style={styles.generate2}>#</Text>
          </View>
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
