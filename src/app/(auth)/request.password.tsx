import ShareButton from "@/components/share/share.button"
import ShareInput from "@/components/share/share.input"

import { APP_COLOR } from "@/utils/constants"
import { RequestPasswordSchema } from "@/utils/validate.schema"
import { router } from "expo-router"
import { Formik } from "formik"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const RequestPassword = () => {

    // const handleRequestChangePassword = async (email: string) => {
    //     const res = await requestChangePasswordAPI(email)
    //     if (res && res.data) {
    //         router.replace({
    //             pathname: '/(auth)/forgot.password',
    //             params: {
    //                 email
    //             }
    //         })
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

    const handleRequestChangePassword = (phone: string) => {
        router.navigate('/(auth)/forgot.password')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 28, fontWeight: '600' }}>Quên mật khẩu</Text>
                <Text style={{ fontSize: 18, color: 'grey' }}>Vui lòng điền vào số điện thoại của bạn để thực hiện yêu cầu thay đổi mật khẩu</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Formik
                    onSubmit={values => handleRequestChangePassword(values.phone)}
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
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        marginHorizontal: 10,
        paddingTop: 30
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

export default RequestPassword