import ShareButton from "@/components/share/share.button"
import ShareInput from "@/components/share/share.input"
import { APP_COLOR } from "@/utils/constants"
import { ForgotPasswordSchema } from "@/utils/validate.schema"
import { router, useLocalSearchParams } from "expo-router"
import { Formik } from "formik"
import { StyleSheet, View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


const ForgotPassword = () => {

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

    const handleForgotPassword = async (code: string, password: string) => {
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{
                fontSize: 28,
                fontWeight: '600',
            }}>
                Thay đổi mật khẩu
            </Text>
            <Formik
                onSubmit={values => handleForgotPassword(values.verify_code, values.newPassword)}
                initialValues={{
                    verify_code: '',
                    newPassword: '',
                    confirmPassword: '',
                }}
                validationSchema={ForgotPasswordSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, touched, values, errors }) => (
                    <View style={styles.inputContainer}>
                        <ShareInput
                            label="Mã xác nhận"
                            onChangeText={handleChange('verify_code')}
                            onBlur={handleBlur('verify_code')}
                            value={values.verify_code}
                            error={errors.verify_code}
                            touched={touched.verify_code}
                        />
                        <ShareInput
                            label="Mật khẩu mới"
                            onChangeText={handleChange('newPassword')}
                            onBlur={handleBlur('newPassword')}
                            value={values.newPassword}
                            error={errors.newPassword}
                            touched={touched.newPassword}
                            secureTextEntry={true}
                        />
                        <ShareInput
                            label="Xác nhận mật khẩu mới"
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            error={errors.confirmPassword}
                            touched={touched.confirmPassword}
                            secureTextEntry={true}
                        />
                        <ShareButton
                            title="Đặt lại mật khẩu"
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
export default ForgotPassword