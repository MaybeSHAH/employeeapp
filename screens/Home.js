import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Card} from 'react-native-paper';

const Home=()=>{
    return (
        <View>
        <Card style={styles.mycard}>
            <View style={styles.cardView}>
            <Image 
            style={{width:60,height:60,borderRadius:30}}
            source={{uri:"https://images.unsplash.com/photo-1599825804135-f3157102dd96?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbWVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}
            />
        <Text style={styles.text}>Hello from Home! </Text>
        </View>
        </Card>
        </View>
    )

}
const styles = StyleSheet.create({
    mycard:{
        margin: 5
    },
    cardView:{
        flexDirection:"row",
        padding: 6
    },
    text:{
        fontSize:20,
        marginLeft:10
    }

})
export default Home