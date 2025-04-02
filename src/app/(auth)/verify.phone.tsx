import ShareButton from "@/components/share/share.button"
import ShareInput from "@/components/share/share.input"
import { APP_COLOR } from "@/utils/constants"
import { RequestPasswordSchema } from "@/utils/validate.schema"
import { router, useLocalSearchParams } from "expo-router"
import { Formik } from "formik"
import { StyleSheet, View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


const VerifyPhone = () => {

    const { email } = useLocalSearchParams()

    // const handleForgotPassword = async (code: string, password: string) => {
    //     const res = await forgotPasswordAPI(code, email as string, password)

    //     if (res && res.data) {
    //         Toast.show('Thay đổi mật khẩu thành công',
    //             {
    //                 duration: Toast.durations.LONG,
    //                 backgroundColor: APP_COLOR.BLUE,
    //                 textColor: APP_COLOR.WHITE,
    //                 opacity: 0.8
    //             }
    //         )
    //         router.replace('/(auth)/login')
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

    const handleForgotPassword = async (phone: string) => {
        router.navigate({
            pathname: '/(auth)/verify',
            params: { phone: phone }
        })
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{
                fontSize: 28,
                fontWeight: '600',
            }}>
                Xác thực tài khoản
            </Text>
            <Formik
                onSubmit={values => handleForgotPassword(values.phone)}
                initialValues={{
                    phone: '',
                }}
                validationSchema={RequestPasswordSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, touched, values, errors }) => (
                    <View style={styles.inputContainer}>
                        <ShareInput
                            label="Số điện thoại"
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            value={values.phone}
                            error={errors.phone}
                            touched={touched.phone}
                        />
                        <ShareButton
                            title="Xác nhận"
                            onPress={handleSubmit}
                            textStyle={{ color: APP_COLOR.WHITE, fontSize: 16, textTransform: 'uppercase' }}
                            btnStyle={{
                                paddingHorizontal: 80,
                                backgroundColor: APP_COLOR.BLUE,
                                borderRadius: 30,
                            }}
                            pressStyle={{ alignSelf: 'center' }}
                        />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        marginHorizontal: 15,
        paddingTop: 30,
        gap: 30
    },
    header: {
        paddingHorizontal: 15,
        gap: 15
    },
    inputContainer: {
        flex: 1,
        gap: 20,
    }
})
export default VerifyPhone