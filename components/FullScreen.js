import { styles } from '../styles/Styles';
import {  View, Image} from 'react-native';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export default function FullScreen({ route }) {
	const data = useSelector(value => value.dataOfImages.data);
	const imageData = useMemo(() => data.find(value => value.id === route.params.id), [data]);

	return (
		<View style={styles.scrollStyle}>
			<View style={styles.imageBlockFull}>
				<Image source={{ uri: imageData.urls.full }} style={styles.image} />
			</View>
		</View>
	)
}
