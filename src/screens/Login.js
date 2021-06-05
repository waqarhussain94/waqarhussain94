import React, {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';

import styles from '../styleSheet/Style';
import Button from '../components/Button';
import TextInput from '../components/InputField';

const Login = props => {
  let {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../assets/backgrounds/loginbg.png')}
      style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.LogoText}>ezyagent</Text>

        <TextInput setValue={setEmail} placeholderText="Email address" />

        <TextInput setValue={setPassword} placeholderText="Your password" />

        <Button name="SIGN IN" func={() => navigation.navigate('home')} />
        <View style={styles.lineRow}>
          <View style={styles.line} />
          <Text style={styles.text}>OR</Text>
          <View style={styles.line} />
        </View>
        <Text style={styles.forgotText}>FORGOT DETAILS?</Text>
      </View>
    </ImageBackground>
  );
};

export default Login;
