import { Keyboard, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useRef, useState } from 'react';
import OTPTextView from 'react-native-otp-textinput';
import { APP_COLOR } from "@/utils/constants";
import LoadingOverlay from "@/components/loading/overlay";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const VerifyPage = () => {

    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const [code, setCode] = useState<string>("")

    const { phone, isLogin } = useLocalSearchParams()

    const OTPCode = useRef<OTPTextView>(null)

    useEffect(() => {
        if (code && code.length === 6) {
            Keyboard.dismiss()
            setIsSubmit(true)
            setTimeout(() => {
                verifyCode(code)
                setIsSubmit(false)
            }, 2000)
        }
    }, [code])

    // const verifyCode = async (value: string) => {

    //     let res = await verifyCodeAPI(email as string, value)

    //     if (res && res.data?.isActive) {
    //         OTPCode.current?.clear()
    //         Toast.show("Kích hoạt tài khoản thành công",
    //             {
    //                 duration: Toast.durations.LONG,
    //                 backgroundColor: APP_COLOR.BLUE,
    //                 textColor: APP_COLOR.WHITE,
    //                 opacity: 0.8
    //             }
    //         )

    //         if (isLogin) {
    //             router.replace('/')
    //         }
    //         else {
    //             router.replace('/login')
    //         }

    //     }
    //     else {
    //         Toast.show(res.message as string,
    //             {
    //                 duration: Toast.durations.LONG,
    //                 backgroundColor: APP_COLOR.ORANGE,
    //                 textColor: APP_COLOR.WHITE,
    //                 opacity: 0.8
    //             }
    //         )
    //     }
    // }

    // const resendCode = async () => {
    //     OTPCode.current?.clear();
    //     let res = await resendCodeAPI(email as string)
    //     if (res.data) {
    //         Toast.show("Gửi lại mã xác nhận thành công",
    //             {
    //                 duration: Toast.durations.LONG,
    //                 backgroundColor: APP_COLOR.BLUE,
    //                 textColor: APP_COLOR.WHITE,
    //                 opacity: 0.8
    //             }
    //         )
    //     }
    //     else {
    //         Toast.show(res.message as string,
    //             {
    //                 duration: Toast.durations.LONG,
    //                 backgroundColor: APP_COLOR.ORANGE,
    //                 textColor: APP_COLOR.WHITE,
    //                 opacity: 0.8
    //             }
    //         )
    //     }
    // }

    const verifyCode = (value: string) => { }
    const resendCode = () => { }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <View style={styles.title}>
                    <Text style={{ fontSize: 30, fontWeight: '700' }}>Xác thực tài khoản</Text>
                    <Text style={{ lineHeight: 25, color: 'rgb(64, 71, 91)', fontSize: 18 }}>Nhập mã xác thực được gửi đến {'\n'}{phone}</Text>
                </View>

                <OTPTextView
                    ref={OTPCode}
                    containerStyle={styles.textInputContainer}
                    textInputStyle={styles.roundedTextInput}
                    inputCount={6}
                    inputCellLength={1}
                    tintColor={APP_COLOR.ORANGE}
                    offTintColor={APP_COLOR.GREY}
                    autoFocus
                    handleTextChange={setCode}
                />
                <View style={styles.footer}>
                    <Text style={{ fontSize: 18 }}>Không nhận được mã?</Text>
                    <Text
                        onPress={resendCode}
                        style={{ fontSize: 18, color: APP_COLOR.ORANGE, textDecorationLine: "underline" }}>
                        Gửi lại
                    </Text>
                </View>


            </View>
            {isSubmit && <LoadingOverlay />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        gap: 50,
        paddingVertical: 50

    },
    title: {
        justifyContent: "flex-start",
        paddingHorizontal: 30,
        gap: 20
    },
    textInputContainer: {
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderBottomWidth: 1.5,
        borderColor: APP_COLOR.ORANGE,
        color: APP_COLOR.ORANGE,
        fontSize: 28,
        height: '100%',
        width: '12%'
    },
    footer: {
        justifyContent: "center",
        flexDirection: "row",
        gap: 10
    }
});

export default VerifyPage