import { store } from './redux/rootReducer';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import MainApp from './MainApp';
import FullScreen from './components/FullScreen';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						options={{ title: 'Miniatures' }}
						name="Main"
						component={MainApp} />
					<Stack.Screen
						name="FullScreen"
						component={FullScreen}
						options={{ title: 'FullScreenImage' }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default App;