import { Image, StyleSheet, Text, View } from "react-native"
import appIcon from '@/assets/icons/app-icon.png'
import { APP_COLOR } from "@/utils/constants"

const SearchHome = () => {
    return (
        <View style={styles.container}>
            <Image source={appIcon} style={{ height: 40, width: 40 }} />
            <Text style={styles.text}>E-Nursing</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: 'rgb(168, 255, 255)'
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        color: APP_COLOR.BLUE
    }
})

export default SearchHome