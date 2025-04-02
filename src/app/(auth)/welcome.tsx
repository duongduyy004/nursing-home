import { Link, Redirect, router } from "expo-router"
import { Button, Image, ImageBackground, Share, StyleSheet, Text, View } from "react-native"
import { APP_COLOR } from "@/utils/constants";
import ShareButton from "@/components/share/share.button";
import bg from '@/assets/auth/welcome-background.jpg'
import { LinearGradient } from 'expo-linear-gradient';

const WelcomePage = () => {

    // if (true) {
    //     return (
    //         <Redirect href={'/(tabs)/order'} />
    //     )
    // }

    return (


        <ImageBackground
            style={{ flex: 1 }}
            source={bg}
        >
            <LinearGradient
                style={{ flex: 1 }}
                colors={['transparent', '#191B2F']}
                locations={[0.1, 1]}
            >
                <View style={styles.container}>
                    <View style={styles.welcomeText}>
                        <Text style={styles.heading}>Welcome to</Text>
                        <Text style={styles.body}>E-Nursing</Text>
                        <Text style={styles.footer}>Somethingggggggggggggggggggggggggg</Text>
                    </View>

                    <View style={styles.welcomeButton}>
                        <View >
                            <ShareButton
                                title="Đăng nhập"
                                onPress={() => router.navigate('/login')}
                                pressStyle={{ alignSelf: "stretch" }}
                                textStyle={{
                                    color: APP_COLOR.WHITE,
                                    fontSize: 18,
                                    paddingVertical: 5
                                }}
                                btnStyle={{
                                    justifyContent: "center",
                                    borderRadius: 30,
                                    marginHorizontal: 30,
                                    borderColor: APP_COLOR.WHITE,
                                    borderWidth: 1,
                                    backgroundColor: 'rgba(163, 159, 159, 0.4)'
                                }}

                            />

                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            gap: 15
                        }}>
                            <Text style={{
                                color: APP_COLOR.WHITE,
                                fontSize: 16
                            }}>
                                Chưa có tài khoản?
                            </Text>
                            <Text style={{
                                color: APP_COLOR.WHITE,
                                textDecorationLine: 'underline',
                                fontSize: 16
                            }}>
                                <Link href={"/signup"}>Liên hệ</Link>
                            </Text>
                        </View>

                    </View>
                </View >
            </LinearGradient>
        </ImageBackground >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    welcomeText: {
        flex: 0.7,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 30,
    },
    welcomeButton: {
        rowGap: 20,
        bottom: 50,
        right: 20,
        left: 20,
        position: 'absolute'
    },
    heading: {
        fontSize: 50,
        fontWeight: "700"
    },
    body: {
        fontSize: 35,
        color: APP_COLOR.BLUE,
        marginVertical: 15,
        fontWeight: '800'
    },
    footer: {
        fontSize: 18,
        color: 'rgb(178, 207, 195)',
        fontWeight: '400',
        lineHeight: 30
    },
})

export default WelcomePage