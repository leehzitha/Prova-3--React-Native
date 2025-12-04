import { app } from "@/firebaseConfig";
import { Link, router } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Swal from "sweetalert2";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth(app);

    const signIn = async() => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.navigate('/')
        }  
        catch(e) {
            console.log('invalido');
            return (Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Invalid Email / Password'
            })
            )
        }
        
    }
    
 return (
        <View style={styles.screen}>
            <View style={styles.content}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.inputbar} placeholder="Username" onChangeText={(value) => setEmail(value)}/>
                <TextInput style={styles.inputbar} placeholder="Password" secureTextEntry= {true} onChangeText={(value) => setPassword(value)}/>
                <TouchableOpacity style={styles.button} onPress={() => signIn()}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "white"}}>Sign In</Text>
                </View>
                </TouchableOpacity>
                <View style={{display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center', marginTop: 10}}>
                    <Text style={{fontSize: 12}}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Link href={'/cadastro'} style={{fontSize: 12, color: '#C596A6'}}>Sign Up</Link>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
  
    title: {
    color: '#C596A6',
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: "10%"
    },


    inputbar: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    color: 'gray',
    width: '100%'

    },

    password: {
    color: 'orange',
    fontSize: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: "8%"

    },

    button: {
    color: 'white',
    backgroundColor: '#C596A6',
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
    width: '100%',
    fontSize: 20,
    marginTop: "10%"
    },

    screen: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#F1E6EA'
    },

    content: {
        width: '80%',
        padding: 20, 
        boxShadow: '0px 6px 100px rgba(164, 91, 117, 0.45)', 
        borderRadius: 20, 
        display: 'flex', 
        gap: 10
    }

    })
