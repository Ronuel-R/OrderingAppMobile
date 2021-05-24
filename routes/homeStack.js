import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import MCDo from '../screens/mcDo';
import Jollibee from '../screens/jollibee';
import BurgerKing from '../screens/burgerKing';
import Chowking from '../screens/chowking';
import KFC from '../screens/kfc';
import Greenwich from '../screens/greenwich';
import PizzaHut from '../screens/pizzahut';
import Shakeys from '../screens/shakeys';
import CheckOutScreen from '../screens/checkOutScreen';


const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
    return(
    <HomeStack.Navigator>
        <HomeStack.Screen name="Restaurant" component= {HomeScreen} />
        <HomeStack.Screen name="MCDo" component= {MCDo}/>
        <HomeStack.Screen name="Jollibee" component= {Jollibee}/>
        <HomeStack.Screen name="BurgerKing" component= {BurgerKing}/>
        <HomeStack.Screen name="Chowking" component= {Chowking}/>
        <HomeStack.Screen name="KFC" component= {KFC}/>
        <HomeStack.Screen name="Greenwich" component= {Greenwich}/>
        <HomeStack.Screen name="Pizza Hut" component= {PizzaHut}/>
        <HomeStack.Screen name="Shakeys" component= {Shakeys}/>
        <HomeStack.Screen name="CheckOut" component= {CheckOutScreen}/>
    </HomeStack.Navigator>
    )
}
export {HomeStackScreen};


//export default () => (
//<NavigationContainer>
  //  <HomeStackScreen />
//</NavigationContainer>
//);

