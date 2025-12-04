import { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={{color: '#C596A6'}}>=</Text>
                <View style={styles.headerText}>
                    <Text style={{color: '#C596A6'}}>Studying</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
                    <View style={styles.headerButton1}>
                        <Text>✦</Text>
                    </View>
                    <View style={styles.headerButton2}>
                        <Text>♥</Text>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={{fontWeight: 700, fontSize: 20}}>Timer Mode</Text>
                <Image source={{uri:'https://super.abril.com.br/wp-content/uploads/2021/08/SI_430_Lo-fi_Linha-do-tempo_04.png?quality=70&w=1024&crop=1' }} style={styles.image}></Image>
                <Text style={styles.timer}>01:00:00</Text>
                <View style={styles.timebar}>
                    <View style={styles.bar1}></View>
                    <View style={styles.bar2}></View>
                </View>
                <View style={styles.buttonszone}>
                    <View style={styles.smallButton}>
                        <Text style={{fontSize: 30, color: 'white'}}>♡</Text>
                    </View>
                    <View style={styles.bigButton}>
                        <Text style={{color: 'white', fontWeight: 600}}>FOCUS</Text>
                    </View>
                    <View style={styles.smallButton}>
                        <Text style={{fontSize: 30, color: 'white'}}>☆</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F1E6EA',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '8%'
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },

    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        gap: '3%'
    },

    timer: {
        fontFamily: 'monospace',
        fontSize: 50 
    },

    timebar: {
        width: '90%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row'
    },

    buttonszone: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
    },

    smallButton: {
        backgroundColor: '#D9BAC5',
        paddingHorizontal: 18,
        height: '60%',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 30
    },

    bigButton: {
        backgroundColor: '#E38DAF',
        paddingHorizontal: 30,
        padding: 42,
        borderRadius: 80
    },

    headerText: {
        borderColor: '#C596A6', 
        borderWidth: 2, 
        borderRadius: 20, 
        padding: 5, 
        marginLeft: '20%',
        paddingHorizontal: 35
    },

    bar1: {
        width: '60%', 
        height: '3%', 
        backgroundColor: '#E38DAF'
    },

    bar2: {
        width: '40%', 
        height: '3%', 
        backgroundColor: '#D9BAC5'
    },

    headerButton1: {
        backgroundColor: '#C596A6', 
        paddingHorizontal: 12, 
        borderRadius: 20, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'    
    },

    headerButton2: {
        backgroundColor: '#A45B74', 
        paddingHorizontal: 12, 
        borderRadius: 20, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },

    image: {
        width: 200, 
        height: 200, 
        borderRadius: 15
    }

});

