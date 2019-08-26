import { createStackNavigator } from "react-navigation";

import Main from './Main';
import Ayat from './layouts/Ayat';

const AppNavigator = createStackNavigator({
	Main,
	Ayat,
},
{
	initialRouteName: 'Main',
	headerMode: 'none',
}
);

export default AppNavigator;