import LoadingOverlay from "@/components/loading/overlay";
import ShareButton from "@/components/share/share.button";
import ShareInput from "@/components/share/share.input";
import { APP_COLOR } from "@/utils/constants";
import { Link, router } from "expo-router";
import { useContext, useState } from "react";
import { Text, View, StyleSheet, Keyboard } from "react-native"
import { Button, TextInput } from 'react-native';
import { Formik, yupToFormErrors } from 'formik';
import { LoginSchema } from "@/utils/validate.schema";
import { useCurrentApp } from "@/context/app.context";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState<number>(1)
    const [isDisable, setIsDisable] = useState<boolean>(false)
    const { setAppState } = useCurrentApp()


    // const handleLogin = async (email: string, password: string) => {

    //     if (!email || !password) {
    //         Toast.show("Chưa nhập Email hoặc mật khẩu",
    //             {
    //                 duration: Toast.durations.LONG,
    //                 backgroundColor: APP_COLOR.ORANGE,
    //                 textColor: APP_COLOR.WHITE,
    //                 opacity: 0.8
    //             }
    //         )
    //         return;
    //     }



    //     try {
    //         setIsDisable(true)
    //         let res = await loginAPI(email, password);
    //         Keyboard.dismiss()

    //         if (res && res.data) {
    //             await AsyncStorage.setItem('access_token', res.data.access_token)
    //             setAppState(res.data)
    //             Toast.show("Đăng nhập thành công",
    //                 {
    //                     duration: Toast.durations.LONG,
    //                     backgroundColor: APP_COLOR.BLUE,
    //                     textColor: APP_COLOR.WHITE,
    //                     opacity: 0.8
    //                 }
    //             )

    //             router.replace("/(tabs)")
    //         } else if (res.statusCode === 401) {
    //             Toast.show(res.message as string,
    //                 {
    //                     duration: Toast.durations.LONG,
    //                     backgroundColor: APP_COLOR.ORANGE,
    //                     textColor: APP_COLOR.WHITE,
    //                     opacity: 0.8
    //                 }
    //             )
    //         }
    //         else if (res.statusCode === 400) {
    //             Toast.show(res.message as string,
    //                 {
    //                     duration: Toast.durations.LONG,
    //                     backgroundColor: APP_COLOR.ORANGE,
    //                     textColor: APP_COLOR.WHITE,
    //                     opacity: 0.8
    //                 }
    //             )
    //             router.navigate({
    //                 pathname: '/verify',
    //                 params: { email, isLogin }
    //             })
    //         }
    //         else {
    //             Toast.show(res.message as string,
    //                 {
    //                     duration: Toast.durations.LONG,
    //                     backgroundColor: APP_COLOR.ORANGE,
    //                     textColor: APP_COLOR.WHITE,
    //                     opacity: 0.8
    //                 }
    //             )
    //         }
    //     } catch (error) {
    //         Toast.show(error as string,
    //             {
    //                 duration: Toast.durations.LONG,
    //                 backgroundColor: APP_COLOR.ORANGE,
    //                 textColor: APP_COLOR.WHITE,
    //                 opacity: 0.8
    //             }
    //         )
    //     } finally {
    //         setIsDisable(false)
    //     }
    // }

    const handleLogin = () => {
        console.log('check login')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Formik
                onSubmit={values => handleLogin()}
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.container}>
                        <Text style={styles.title}>Đăng nhập</Text>

                        <View style={styles.inputGroup}>

                            <ShareInput
                                label="Tài khoản"
                                keyboardType="email-address"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                error={errors.email}
                                touched={touched.email}
                            />
                            <ShareInput
                                label="Mật khẩu"
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                error={errors.password}
                                touched={touched.password}
                            />
                        </View>


                        <ShareButton
                            title="Đăng nhập"
                            textStyle={{
                                color: 'white',
                                textTransform: 'uppercase'
                            }}
                            btnStyle={{
                                justifyContent: "center",
                                borderRadius: 30,
                                paddingHorizontal: 70,
                                backgroundColor: APP_COLOR.BLUE
                            }}
                            pressStyle={{
                                alignSelf: "center",
                            }}
                            onPress={handleSubmit}
                            disable={isDisable}
                            loading={true}
                        />
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            gap: 15,
                        }}>
                            <Text style={{
                                color: APP_COLOR.BLUE,
                                fontSize: 16
                            }}
                                onPress={() => router.navigate('/(auth)/request.password')}
                            >
                                Quên mật khẩu?
                            </Text>
                        </View>
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        gap: 20,
        justifyContent: "flex-start"
    },

    title: {
        fontSize: 30,
        fontWeight: '600',
        paddingHorizontal: 15
    },

    inputGroup: {
        padding: 10,
        gap: 10
    },

    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        borderRadius: 10
    },

    text: {

    }
});

export default LoginPage