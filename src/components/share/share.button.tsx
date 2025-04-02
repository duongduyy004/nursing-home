import { APP_COLOR } from "@/utils/constants";
import { ReactNode } from "react";
import { ActivityIndicator, Pressable, StyleProp, StyleSheet, Text, TextStyle, View } from "react-native"


interface IProps {
    title: string;
    onPress: () => void;
    icons?: ReactNode
    textStyle?: StyleProp<TextStyle>;
    pressStyle?: StyleProp<TextStyle>;
    btnStyle?: StyleProp<TextStyle>;
    loading?: boolean;
    disable?: boolean
}

const ShareButton = (props: IProps) => {

    const { title, onPress, textStyle, pressStyle, btnStyle,
        icons, disable, loading = false
    } = props

    return (
        <Pressable
            style={({ pressed }) => ([{
                opacity: pressed || disable ? 0.5 : 1,
                alignSelf: "stretch",
            }, pressStyle])}
            onPress={onPress}
            disabled={disable}
        >
            <View style={[styles.btnContainer, btnStyle]}>
                {icons}
                {loading && disable && <ActivityIndicator size={"small"} color={'black'} />}
                <Text style={[styles.text, textStyle]}>{title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: APP_COLOR.ORANGE,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    text: {
        textAlignVertical: "center"
    }
})

export default ShareButton