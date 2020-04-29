import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,Dimensions,TextInput, Alert,TouchableOpacity,Image } from 'react-native';
import { Constants } from 'expo';
export default class LoginScreen extends Component {
  
    constructor(props) {
      super(props);
      var {height, width} = Dimensions.get('window');
         this.state = {screenHeight: height, screenWidth: width,
                      staffId : '',
                      password: '',};
    }

    onClickListener = viewId => {
        Alert.alert("Alert", "Login Button pressed " + viewId);
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
        <TouchableOpacity style={styles.submitButtonText} onPress={() => this.onClickListener('login')}>
     <Text style={styles.loginText}>Login</Text>
   </TouchableOpacity>
   <View>
       <Text>Not yet Registered?<TouchableOpacity style={styles.navigateButton} onPress={()=>this.props.navigation.navigate('SignUp')}>
         <Text style={styles.signUpText}>Sign Up</Text></TouchableOpacity></Text>
   </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#99ffcc"
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
     backgroundColor: '#004d2e',
     width:250,
     height:45,
     borderRadius:10,
     justifyContent: 'center',
     alignItems: 'center'
   },
   loginText:{
     color: '#FFFFFF',
     alignItems: 'center'
   },
   navigateButton:{
     backgroundColor:'#99ffcc',
     marginTop: 10,
  },
  signUpText:{
    color: '#000000',
    // textDecorationLine:'underline',
    fontWeight:'bold',
    alignItems: 'center',
    margin:10,
  },
  })