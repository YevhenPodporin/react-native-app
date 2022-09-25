import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 35,
	},
	scrollStyle: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	contentBlock: {
		width: 160,
		borderWidth: 1,
		borderBottomWidth: 0,
		borderRadius: 5,
		paddingVertical: 10,
		marginVertical: 10,
	},
	imageBlock: {
		width: '100%',
		height: 150,
	},
	imageBlockFull: {
		flex:1
	},
	image: {
		resizeMode: 'cover',
		width: '100%',
		height: '100%'
	},
	description: {
		marginVertical: 5,
		textAlign: 'center',
	}
});
