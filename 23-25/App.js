/*
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
*/
import BotomTab from "./src/navigation/tab";
import {NavigationContainer} from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer>
      <BotomTab />
    </NavigationContainer>
  );
};

/*
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "first app"
    }
  }
);
*/

export default App;
