import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Switch, useTheme } from 'react-native-paper';

const about = () => {
   const [isSwitchOn, setIsSwitchOn] = useState(false);
    const { colors } = useTheme();

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
   
  return (
    
    <View style={Styles.container}>
        <Appbar.Header style={Styles.appBar}>
    <Appbar.BackAction onPress={() => {}} color='white'/>
    <Appbar.Content title="" />
    <Appbar.Action icon="calendar" onPress={() => {}} color='white' />
    <Appbar.Action icon="magnify" onPress={() => {}} color='white'/>
  </Appbar.Header>
      <View style={Styles.topContainer}>
        <Text style={Styles.headerTitle}>courses app</Text>
        
      </View>
         <View style={Styles.card}>
          <Text style={Styles.cardData}>Notification</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
            <Text style={{ marginRight: 10,color:"white" }}>
                {isSwitchOn ? 'Switch is ON' : 'Switch is OFF'}
            </Text>
            <Switch
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
                color={colors.primary}
            />
        </View>
         </View>
         <View style={Styles.card1}>
          <Text style={Styles.cardData1}>App Version</Text>
          <Text style={Styles.cardDataVersion}>1.0.0.1</Text>
         </View>
         <View>
          <Link href={"/(login)"}style={Styles.cardLogIn}>LogIn</Link>
         </View>
    </View>
    
  );
};

export default about;

const Styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: "#272C35",
      paddingBottom:10,
  },
  appBar:{
    backgroundColor:"#1A1F25",
    
  },
  topContainer:{
        backgroundColor: "#1A1F25",
        paddingTop: 80,
        padding: 80,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        gap: 20,
    },
    headerTitle:{
        textAlign: "center",
        color: "white",
        fontSize: 35,
        fontWeight: "bold",

  },
  card:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    padding:15,
    marginBottom:15,
    
  },
  cardData:{
    color:"white",
    fontSize:20,
    
  },
  card1:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:15,
    alignItems:"center",

  },
  cardData1:{
    color:"white",
    fontSize:20,
  },
  cardDataVersion:{
    color:"white",
    fontSize:20,
  },
  cardLogIn:{
    color:"white",
    fontSize:20,
    padding:15,
  },
  
  
});