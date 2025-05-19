import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const leaderboard = () => {
  return (
    
    <View style={Styles.container}>
        <Appbar.Header style={Styles.appBar}>
            <Appbar.BackAction onPress={() => {}} color='white'/>
            <Appbar.Content title="" />
            <Appbar.Action icon="calendar" onPress={() => {}} color='white' />
            <Appbar.Action icon="magnify" onPress={() => {}} color='white'/>
          </Appbar.Header> 
      <View style={Styles.topContainer}>
    
        <Text style={Styles.headerTitle}>Leader Board</Text>
        <View style={Styles.mainCardContainer}>
        {[3,1,2].map((item, index) => {
            return <View key={index} style={[Styles.maincard,item !== 1 && { marginTop: 20}]}>
                <Image
                source={{uri: "https://images.unsplash.com/photo-1587297415761-a2e2697a1330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJveSUyMHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D"}}
                style={Styles.mainCardImage}
                resizeMode="cover"
                />
                <Text style={Styles.mainCardTitle}>Siddhesh</Text>
                <View style={Styles.mainCardContainer}>
                    <Text style={Styles.mainCardRankContainerText}>{item}</Text>
                </View>
            </View>;
        })}
        </View>
      </View>
      <FlatList  data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
      renderItem={({ item, index }) => {
        return (
        <View style={Styles.card}>
            <View style={Styles.cardDataContainer}>
                <Text style={Styles.cardIndex}>{index + 1}</Text>
                <Image 
                source={{uri:"https://images.unsplash.com/photo-1587297415761-a2e2697a1330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJveSUyMHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D"}}
                style={Styles.cardimage}
                resizeMode="cover"
                />
                <Text style={Styles.cardTitle}>Siddhesh kale</Text>
            </View>
            <View style={Styles.cardRankContainer}>
                <Text style={Styles.cardRankTitle}>23,455</Text>
                <Text style={Styles.cardView}>Views</Text>
            </View>
        </View>
        );
      }}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#272C35"
    },
    appBar:{
        backgroundColor:"#1A1F25",
    },
    topContainer:{
        backgroundColor: "#1A1F25",
        paddingTop: 1,
        padding: 20,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        gap: 20,
    },

    headerTitle:{
        textAlign: "center",
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        paddingTop:1,
    },
    mainCardContainer:{
        flexDirection: "row",
        gap: 10,
       justifyContent: "center",
    },
    maincard:{
        backgroundColor: "#272C35",
        padding: 15,
        alignItems:"center",
        borderRadius: 10,
        gap: 15,
        height: 165,
    },
    mainCardImage:{
        width:70,
        height: 90,
        borderRadius: 20,
    },
    mainCardTitle:{
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
    mainCardRankContainer:{
        backgroundColor: "white",
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:30,
        position:"absolute",
        bottom:-25,
        margin:2,
        },
    mainCardRankContainerText:{
        backgroundColor: "orange",
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:30,
        position:"absolute",
        textAlign:"center",
        alignSelf:"center",
        bottom:-25,
        margin:1,
    },
    card:{
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardDataContainer:{
        flexDirection:"row",
        alignItems:"center",
        gap: 10,
    },
    cardIndex:{
        color: "white",
    },
    cardimage:{
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10,
    },
    cardTitle:{
        color: "white",
    },
    cardRankContainer:{
           flexDirection:"row",
        alignItems:"center",
        gap: 10,
    },
    cardRankTitle:{
        color:"orange",
    },
    cardView:{
        color:"white",
        fontSize: 10,
    },
});

export default leaderboard;