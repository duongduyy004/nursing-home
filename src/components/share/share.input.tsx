import { APP_COLOR } from "@/utils/constants";
import { useState } from "react";
import { Button, KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

interface IProps {
    label?: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    value: string | undefined;
    setValue?: (v: string) => void;
    onChangeText?: any
    onBlur?: any;
    error?: any;
    editable?: boolean;
    touched?: any;
}

const ShareInput = (props: IProps) => {

    const { label, keyboardType, secureTextEntry = false,
        value, onChangeText, onBlur, error, editable = true,
        touched
    } = props
    const [isFocus, setIsFocus] = useState(false)
    const [isShowPassword, setIsShowPassword] = useState(false)


    return (
        <View style={styles.container}>
            {label && <Text style={styles.text}>{label}</Text>}
            <View>
                <TextInput
                    editable={editable}
                    onFocus={() => setIsFocus(true)}
                    onBlur={(event) => {
                        setIsFocus(false)
                        onBlur(event)
                    }}
                    onChangeText={onChangeText}
                    style={[styles.input,
                    { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.BLUE }
                    ]}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry && !isShowPassword}
                    value={value}
                />
                {error && touched && <Text style={{ color: 'red' }}>{error}</Text>}
                {secureTextEntry && <Ionicons
                    style={styles.eye}
                    name={isShowPassword ? 'eye-off-outline' : 'eye-outline'} size={22}
                    color="black"
                    onPress={() => setIsShowPassword(!isShowPassword)}
                />}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 10
    },

    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 25,
        fontSize: 18
    },

    text: {
        fontSize: 18
    },
    eye: {
        position: "absolute",
        right: 20,
        top: 15
    }
})

export default ShareInput