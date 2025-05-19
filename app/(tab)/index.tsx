import { Link } from 'expo-router';
import * as React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';


const index = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View style={Styles.container}>
       <Text style={Styles.headerTitle}>Courses</Text>
       <Searchbar style={Styles.searchBar}
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
       <FlatList
       data={listData}
       renderItem={({ item,index}) => {
       return (
       <View style={Styles.card1}>
        <Text style={Styles.cardindex}>{index + 1}</Text>
        <Image
          source={{
            uri: item?.imageUrl,
        }}
          style={Styles.cardImage1}
          resizeMode="cover"
        />
        <Text style={Styles.cardText1}>{item?.info}</Text>
        <Link href={"/(button)"}style={Styles.cardButton}>Readmore</Link>
       </View>
       )
      }}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: "#272C35",
      paddingBottom:10,
      paddingInline:10,
      gap:10,
      
  },
  headerTitle:{
      color: "white",
      fontSize: 30,
      fontWeight: "bold",
      paddingTop:20,
      paddingLeft:10,
      
  },
  searchBar:{
    margin:5,
  },
  card1:{
        backgroundColor: "#1A1F25",
        paddingTop: 20,
        paddingRight: 10,
        padding: 20,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        gap: 20,
        alignItems:"center",
        justifyContent:"center",
        paddingInline:10,
        marginBottom:20,
        
        
  },
  cardindex :{
    color:"white",
    
  },
  cardImage1:{
    width:240,
    height:140,
    gap:10,
  },
  cardText1:{
    color:"white",
    paddingLeft:10,
    paddingRight:10,
  },
  cardButton:{
    color:"orange",
  },
});
export default index;

const listData =[
  {
    imageUrl:"https://dac.digital/wp-content/uploads/2023/04/backend-java-optimized.png",
    info:"Java is a versatile, high-level, object-oriented programming language widely used for developing diverse applications, from web and mobile apps to enterprise software. It's known for its platform independence, meaning Java code can run on any device that supports the Java Virtual Machine (JVM).",
  },
  {
    imageUrl:"https://1000logos.net/wp-content/uploads/2020/08/Python-Logo.png",
    info:"Python is a high-level, interpreted, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability through the use of significant indentation. It supports multiple programming paradigms, including object-oriented, procedural, and functional programming. ",
  },
  {
    imageUrl:"https://e7.pngegg.com/pngimages/220/595/png-clipart-javascript-logo-product-design-brand-angularjs-dashboard-templates-angle-text-thumbnail.png",
    info:"JavaScript is a dynamic, interpreted programming language primarily used for web development to add interactivity and functionality to web pages. It allows developers to create dynamic content, handle events, manipulate the DOM (Document Object Model), and manage interactions with users without requiring a page reload. ",
  },
  {
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHB1_-Ghe-QWTn6_v5ZmbqxdrBV7S5mn0Yw&s",
    info:"React Native is a JavaScript framework used for building native mobile applications for Android and iOS. It leverages the React library for building user interfaces, but instead of targeting web browsers, it targets native mobile platforms. This allows developers to write code once and use it across both iOS and Android, reducing development time and effort.",
  }
];