import { useLogin } from '../src/Auth/viewmodels/use-login';
import { useRouter } from 'expo-router';
import { StyleSheet ,Text, View, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Feather } from "@expo/vector-icons";

export default function LoginScreen() {

  const router = useRouter();
  const {
    email,
    password,
    setEmail,
    setPassword,
    isLoading,
    errorMessage,
    isPasswordVisible,
    togglePasswordVisibility,
    handleLogin
  } = useLogin();

  return(
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.LogoContainer}>
            <Feather name="shopping-bag" size={25} color="black" />
          </View>
          <Text style={styles.appNameLabel}>ShopEase</Text>
          <Text style={styles.welcomeLabel}>Welcome Back! Please enter your credentials.</Text>
        </View>
        <View style={styles.card}>
          {errorMessage &&(
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{errorMessage}</Text>
            </View>
          )}
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputContainer}>
            <Feather name="mail" size={20} color="gray" />
            <TextInput style={styles.inputText} value={email} onChangeText={setEmail} autoCapitalize="none" placeholder="Enter your email address" keyboardType='email-address'/>
          </View>
          <View style={styles.passwordRow}>
            <Text style={styles.label}>Password</Text>
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
          </View>
            <View style={styles.inputContainer}>
              <Feather name="lock" size={20} color="gray" />
              <TextInput style={styles.inputPass} value={password} onChangeText={setPassword} autoCapitalize="none" placeholder="***********" secureTextEntry={!isPasswordVisible ?true:false}/>
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Feather name={isPasswordVisible ? "eye-off" : "eye"} size={20} color="gray" onPress={togglePasswordVisibility}/>
              </TouchableOpacity>
            </View>
          {isLoading ?(
            <ActivityIndicator size="large" color="#006C47"/>
              ): (
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log in</Text>
              </TouchableOpacity>
            )}
        </View>
        <View style={styles.signUpRow}>
          <Text style={styles.signUpText}>Does not have account? </Text>
          <TouchableOpacity onPress={() => router.push('/register')}>
            <Text style={styles.signUpLink}>Sign up for free</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24
  },

  header: {
    alignItems: 'center',
  },

  LogoContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  appNameLabel: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  welcomeLabel: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },

  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 24,
    borderColor: 'gray',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  label: {
    fontSize: 14,
    color: 'black',
    marginBottom: 8,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 16
  },
    
  inputText: {
    flex: 1,
    height: '100%',
    marginLeft: 8,
    fontSize: 14,
    color: 'gray',
  },

  inputPass: {
    flex: 1,
    height: '100%',
    marginLeft: 8,
    fontSize: 14,
    color: 'gray',
  },

  forgotPassword: {
    color: 'green',
    fontSize: 14,
    fontWeight: 'bold',
  },

  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  loginButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },

  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  signUpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },

  signUpText: {
    color: 'gray',
    fontSize: 14,
  },

  signUpLink: {
    color: 'green',
    fontSize: 14,
    fontWeight: 'bold',
  },

  errorContainer:{
        borderWidth:1,
        padding:12,
        borderRadius:8,
        marginBottom:20,
        backgroundColor:"#FEF2F2",
        borderColor:"#FCA5A5",

    },
    errorText:{
        fontSize:15,
        textAlign:"center",
        color:"#DC2626",
        fontWeight:500
    }
})