import React from "react";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const twitter = <Icon name="twitter" size={50} color={"black"}></Icon>
const facebook = <Icon name="facebook" size={50} color={"black"}></Icon>
const instagram = <Icon name="instagram" size={50} color={"black"}></Icon>
const linkedin = <Icon name="linkedin" size={50} color={"black"}></Icon>
const tiktok = <Icon name="tiktok" size={50} color={"black"}></Icon>

const ProfileCard = () =>{
    const user = {
        avatar: '../../../assets/avatar.png',
        coverPhoto:"https://images.unsplash.com/photo-1605548109944-9040d0972bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        name: "Jorge Erazo" 
    }
    return(
        <View style= {styles.container }>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style ={styles.avatarContainer}>
            <Image source={require('../../../assets/avatar.png')} style={styles.avatar}/>
            <Text style={styles.name}>
                {user.name}
            </Text>
            </View>
            <View style ={styles.buttonContainer}>
            <Text style={{color: "blue"}} onPress={() => Linking.openURL("https:www.twitter.com") }>
                {twitter}
            </Text>
            <Text style={{color: "blue"}} onPress={() => Linking.openURL("https:www.facebook.com") }>
                {facebook}
            </Text><Text style={{color: "blue"}} onPress={() => Linking.openURL("https:www.instagram.com") }>
                {instagram}
            </Text><Text style={{color: "blue"}} onPress={() => Linking.openURL("https:www.linkedin.com") }>
                {linkedin}
            </Text>
            <Text style={{color: "blue"}} onPress={() => Linking.openURL("https:www.tiktok.com") }>
                {tiktok}
            </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center"
    },coverPhoto: {
        width: "100%",
        height: 200,
        resizeMode: "cover"
    },avatarContainer: {
        alignItems: "center",
        marginTop: -75,
    },avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: "white", 
    }, name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: "bold"
    },buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
        width: "60%",
        justifyContent: "space-between"
    }
  });

  export default ProfileCard;
