import { useEffect, useState } from "react";
import { app } from '../firebaseConfig.js';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Swal from 'sweetalert2';
import { Link, router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const auth = getAuth(app);
    const minPassword = 6;

    const signUp = async() => {
        if (password.length < minPassword) {
            
            return (Swal.fire({
                icon: 'error',
                title: 'Error',
                text: "Password must contain at least 6 characters"
            }));
            
        }
        if (password != confirmPassword) {

            return(Swal.fire({
                icon: 'error',
                title: 'Error',
                text: "Passwords doesn't match!"
            }));
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Account created!'
            })

            return router.navigate('/login');
        }
        catch(e) {
            return(Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email already in use!'
            }))
        }
    }


    return (
        <View style={styles.screen}>
            <View style={styles.content}>
                <Text style={styles.title}>Create Account</Text>
                <TextInput style={styles.inputbar} placeholder="Username" onChangeText={(value) => setEmail(value)}/>
                <TextInput style={styles.inputbar} placeholder="Password" secureTextEntry= {true} onChangeText={(value) => setPassword(value)}/>
                <TextInput style={styles.inputbar} placeholder="Confirm your password" secureTextEntry= {true} onChangeText={(value) => setConfirmPassword(value)}/>
                <TouchableOpacity style={styles.button} onPress={() => signUp()}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "white"}}>Register</Text>
                </View>
                </TouchableOpacity>
                <View style={styles.bottom}>
                    <Text style={{fontSize: 12}}>Already have an account?</Text>
                    <TouchableOpacity>
                        <Link href={'/login'} style={{fontSize: 12, color: '#C596A6'}}>Sign In</Link>
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
    },

    bottom: {
        display: 'flex', 
        flexDirection: 'row',
        gap: 10, 
        justifyContent: 'center', 
        marginTop: 10
    }

    })