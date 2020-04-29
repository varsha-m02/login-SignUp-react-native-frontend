import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar} from 'react-native';

export default class SignUp extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName:"",
      staffId:"",
      password: "",
      confirmPassword: ""
    };
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {/* <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/male-user/ultraviolet/50/3498db"
            }}
          /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Enter First Name"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={fullName => this.setState({ firstName:firstName })}
          />
        </View>
        
        <View style={styles.inputContainer}>
          {/* <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/male-user/ultraviolet/50/3498db"
            }}
          /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Enter Last Name"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={fullName => this.setState({ lastName:lastName })}
          />
        </View>
        <View style={styles.inputContainer}>
          {/* <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/male-user/ultraviolet/50/3498db"
            }}
          /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Enter Staff Id"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={fullName => this.setState({ staffId:staffId })}
          />
        </View>

        <View style={styles.inputContainer}>
          {/* <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
            }}
          /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Enter Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password:password })}
          />
        </View>

        <View style={styles.inputContainer}>
          {/* <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
            }}
          /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Confirm Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ confirmPassword : confirmPassword})}
          />
        </View>

        <TouchableOpacity style={styles.submitButtonText} onPress={() => this.onClickListener('sign_up')}>
     <Text style={styles.signUpText}>Sign up</Text>
   </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DFEBF3"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  

  submitButton: {
   backgroundColor: '#7a42f4',
   padding: 10,
   margin: 15,
   height: 60,
 },
 submitButtonText:{
   color: '#FFFFFF',
   backgroundColor: '#7a42f4',
   width:250,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center'
 },
 signUpText:{
   color: '#FFFFFF',
   alignItems: 'center'
 }
})