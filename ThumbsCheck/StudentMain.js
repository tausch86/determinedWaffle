'use strict'

var React = require('react-native');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  image: {
    width:100,
    height:100,
  },
  button: {
    marginTop: 10,
    marginBottom: 10
  }
});

//response.child(123456ID.child= {123456ID: 'up'})

class StudentMain extends Component{


//Need to incorporate voting
  vote(user, thumb) {
    var thumb = "up"
    var user = "github126";
    var obj = {};
    obj[user] =thumb;

  //Update url based on angularfire/config.js
    var url = "https://popping-torch-1564.firebaseio.com/responses/" + user + ".json";
    console.log(url);
    return fetch(url  , {
    method: 'put',
    body: JSON.stringify(obj)
  }).then((res) => res.json());

  },

  _onPressButton(){
    console.log('pressed');

    //Need to split out types of votes (thumb direction)
    this.vote();
  }

  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.description}>
          Thumbs on your understanding of React Native!
        </Text>

        <TouchableHighlight onPress={this._onPressButton} underlayColor='green' activeOpacity='1' style={styles.button}>
          <Image source={require('image!ThumbsUp')} style={styles.image}/>
        </TouchableHighlight>
        
        <TouchableHighlight onPress={this._onPressButton} underlayColor='gray' activeOpacity='1' style={styles.button}>
          <Image source={require('image!ThumbsMiddle')} style={styles.image}/>
        </TouchableHighlight>


        <TouchableHighlight onPress={this._onPressButton} underlayColor='red' activeOpacity='1' style={styles.button}>
          <Image source={require('image!ThumbsDown')} style={styles.image}/>
        </TouchableHighlight>


        <Text style = {styles.description}>
          Pick a thumb.
        </Text>
      </View>
    );
  }
}

module.exports = StudentMain;
