import { createStackNavigator } from "react-navigation";

import Main from './Main';
import Ayat from './layouts/Ayat';
import About from './layouts/About';
import Utama from './layouts/Utama';
import Doa from './layouts/Doa';

const AppNavigator = createStackNavigator({
	About,
	Utama,
	Doa,
},
{
	initialRouteName: 'Utama',
	headerMode: 'none',
}
);

export default AppNavigator;