import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import appIcon from '@/assets/icons/app-icon.png'
import { APP_COLOR } from "@/utils/constants"

const SearchHome = () => {
    return (
        <Pressable>
            <View style={styles.container}>
                <Image source={appIcon} style={{ height: 40, width: 40 }} />
                <Text style={styles.text}>E-Nursing</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        height: 40,
        margin: 5,
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        color: APP_COLOR.BLUE
    }
})

export default SearchHome