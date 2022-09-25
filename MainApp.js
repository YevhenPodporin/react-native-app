import { SafeAreaView, ScrollView } from "react-native";
import Miniature from "./components/Miniatures";
import { getDataOfImages } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from "react";
import { styles } from "./styles/Styles";

export default function MainApp({navigation }) {
	const dispatch = useDispatch();
	const data = useSelector(value => value.dataOfImages.data);

	const imagesData = useMemo(() => data, [data]);

	useEffect(() => {
		dispatch(getDataOfImages());
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView >
				<Miniature data={imagesData} navigation={navigation} />
			</ScrollView>
		</SafeAreaView >
	)
}