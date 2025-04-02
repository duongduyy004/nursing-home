import CustomFlatList from "@/components/CustomFlatList/CustomFlatList";
import HeaderHome from "@/components/home/header.home";
import SearchHome from "@/components/home/search.home";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";


const HomeTab = () => {

    const data = [
        {
            key: 1,
            name: "Tin tức",
            description: "Gợi ý quán được tín đồ ẩm thực đánh giá 5 *",
            refAPI: "top-rating"
        },
        {
            key: 2,
            name: "Thông báo",
            description: "Khám phá ngay hàng loạt quán mới cực ngon",
            refAPI: "newcomer"
        },
        {
            key: 3,
            name: "Ăn Thỏa Thích, Freeship 0Đ",
            description: "Bánh ngọt, chân gà, bánh tráng trộn,.. FreeShip 0đ",
            refAPI: "top-freeship"
        },
    ]

    // const [mounted, setMounted] = useState<boolean>(false)


    // useEffect(() => {
    //     setMounted(true)
    // }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.navigate('/(auth)/popup.modal')
    //     }, 1000)
    // }, [mounted])

    return (
        <SafeAreaView style={styles.container}>
            <CustomFlatList
                data={data}
                style={styles.list}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
                StickyElementComponent={<SearchHome />}
            // // TopListElementComponent={<View style={styles.topList} />}
            // TopListElementComponent={<TopListHome />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        borderColor: "red",
        borderWidth: 5,
        height: 100,
        marginBottom: 6,
        width: "100%"
    },
    list: {
    },
});

export default HomeTab