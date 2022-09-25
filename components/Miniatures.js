import { styles } from '../styles/Styles';
import { Text, View, Image, TouchableOpacity } from 'react-native';


export default function Miniature(props) {
	const showFullPhoto = (id) => {
		props.navigation.navigate('FullScreen', { id })
	}

	return (
		<View style={styles.scrollStyle}>
			{props.data.map(({ user, urls, id }, i) => {
				return (
					<View key={i} style={styles.contentBlock}>
						<TouchableOpacity
							onPress={()=>showFullPhoto(id)}
							style={styles.imageBlock}>
							<Image source={{ uri: urls.small }} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.description}>{`AUTHOR: ${user.name}`}</Text>
						<Text style={styles.description}>{`DESCRIPTION: ${user.bio || 'Here can be your description'}`}</Text>
					</View>
				)
			})}
		</View>
	)
}