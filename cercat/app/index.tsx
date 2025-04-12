import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Home() {
    return (
        <View style={styles.container}>
            <WebView source={{ uri: 'https://cercat.vercel.app' }} style={styles.webview} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
    },
});
