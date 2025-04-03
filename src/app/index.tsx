import { Link, Redirect, router } from "expo-router"
import { Text, View } from "react-native"
import { useEffect, useState } from "react";
import { useCurrentApp } from "@/context/app.context";

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";

// SplashScreen.preventAutoHideAsync();

const RootPage = () => {

    if (true) {
        return (
            <Redirect href={'/(auth)/welcome'} />
        )
    }

    useEffect(() => {
        async function prepare() {

            // Tell the application to render
            await SplashScreen.hideAsync();

        }

        prepare()
    })
    const { setAppState } = useCurrentApp()
    const [state, setState] = useState<any>(true)

    const [loaded, error] = useFonts({
        'Roboto': require('@/assets/fonts/OpenSans-Regular.ttf')
    })

    useEffect(() => {
        async function prepare() {
            try {

            } catch (e) {
                setState(() => {
                    throw new Error("Cannot connect to backend server...")
                })
            } finally {
                // Tell the application to render
                await SplashScreen.hideAsync();
            }
        }
        prepare();
    }, []);

    return (
        <>

        </>
    )
}


export default RootPage