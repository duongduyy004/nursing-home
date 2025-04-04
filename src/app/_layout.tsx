import AppProvider from '@/context/app.context';
import { APP_COLOR } from '@/utils/constants';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { ErrorBoundaryProps, Slot } from 'expo-router';
import { Stack } from 'expo-router/stack';
import { Button, ImageBackground, Keyboard, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import appBackground from '@/assets/background/image.png'

const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent'
    }
}


export default function RootLayout() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <GestureHandlerRootView>
                <ImageBackground source={appBackground} style={{ flex: 1 }}>
                    <AppProvider>
                        {/* <SafeAreaView style={{ flex: 1 }}> */}
                        <ThemeProvider value={navTheme}>
                            <Stack
                                screenOptions={{
                                    headerStyle: { backgroundColor: APP_COLOR.WHITE },
                                    headerTintColor: APP_COLOR.GREEN,
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                        color: 'black'
                                    },
                                }}
                            >
                                <Stack.Screen
                                    name='index'
                                    options={{ headerShown: false }}
                                />

                                <Stack.Screen
                                    name='(auth)/verify'
                                    options={{ headerShown: false }}
                                />

                                <Stack.Screen
                                    name='(auth)/login'
                                    options={{ headerShown: false }}

                                />

                                <Stack.Screen
                                    name='(auth)/welcome'
                                    options={{ headerShown: false }}
                                />

                                <Stack.Screen
                                    name='(auth)/forgot.password'
                                    options={{ headerShown: false }}
                                />

                                <Stack.Screen
                                    name='(auth)/request.password'
                                    options={{
                                        headerShown: false,
                                    }}
                                />

                                <Stack.Screen
                                    name='(auth)/verify.phone'
                                    options={{
                                        headerShown: false,
                                    }}
                                />

                                <Stack.Screen
                                    name="(tabs)"
                                    options={{ headerShown: false }}
                                />

                                <Stack.Screen
                                    name="(user)/detail.user"
                                    options={{
                                        headerTitle: 'Thông tin cá nhân'
                                    }}
                                />
                            </Stack>
                        </ThemeProvider>
                        {/* </SafeAreaView> */}
                    </AppProvider>
                </ImageBackground>
            </GestureHandlerRootView>
        </TouchableWithoutFeedback>
    )
}

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: 10, gap: 15 }}>
                <View style={{
                    backgroundColor: "#333", padding: 10,
                    borderRadius: 3, gap: 10
                }}>
                    <Text style={{ color: "red", fontSize: 20 }}>
                        Something went wrong
                    </Text>
                    <Text style={{ color: "#fff" }}>{error.message}</Text>
                </View>
                <Button title="Try Again ?" onPress={retry} />
            </View>
        </SafeAreaView>
    );
}