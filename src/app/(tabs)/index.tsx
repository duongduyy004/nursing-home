import CustomFlatList from "@/components/CustomFlatList/CustomFlatList";
import CollectionHome from "@/components/home/collection.home";
import HeaderHome from "@/components/home/header.home";
import SearchHome from "@/components/home/search.home";
import TopListHome from "@/components/home/top.list.home";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";


const HomeTab = () => {

    const section = [
        {
            key: 3,
            name: "Bài viết nổi bật",
            description: "Tin tức",
        }
    ]

    const data = [
        {
            key: 1,

        }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <CustomFlatList
                data={section}
                style={styles.list}
                renderItem={({ item }) => (
                    <CollectionHome
                        name={item.name}
                        description={item.description}

                    />
                )}
                StickyElementComponent={<SearchHome />}
                // // TopListElementComponent={<View style={styles.topList} />}
                TopListElementComponent={<TopListHome />}
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