import { ActivityIndicator, StyleSheet, Text, View } from "react-native"

const LoadingOverlay = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator size={"large"} />
        </View>
    )
}

const styles = StyleSheet.create({
    loading: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: "center"
    }
})

export default LoadingOverlay