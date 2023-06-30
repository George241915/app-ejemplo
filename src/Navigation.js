import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Menu from "./components/home/Menu";
import ListComponent from "./components/list/List";
import Nombres from "./components/nombre/Nombre";
import ChatScreen from "./components/chat/Gpt";

const Tab = createBottomTabNavigator();


const Navigation = () => {
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Menu} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => {
                    <MaterialCommunityIcons name="home" color={color} size={size}/>
                }
            }}>
            </Tab.Screen>
            <Tab.Screen name="List" component={ListComponent} options={{
                tabBarLabel: "Listado",
                tabBarIcon: ({color, size}) => {
                    <MaterialCommunityIcons name="clipboard list" color={color} size={size}/>
                }
            }}>
            </Tab.Screen>
            <Tab.Screen name="Nombre" component={Nombres} options={{
                tabBarLabel: "Nombre",
                tabBarIcon: ({color, size}) => {
                    <MaterialCommunityIcons name="apple" color={color} size={size}/>
                }
            }}>
            </Tab.Screen>
            <Tab.Screen name="OpenAi" component={ChatScreen} options={{
                tabBarLabel: "OpenAi",
                tabBarIcon: ({color, size}) => {
                    <MaterialCommunityIcons name="apple" color={color} size={size}/>
                }
            }}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Navigation;