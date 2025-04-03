import { Dimensions, FlatList, Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import demo from "@/assets/banner/bn3.jpg"
import { APP_COLOR } from "@/utils/constants";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface IProps {
    name: string;
    description?: string;
    data?: []
}

const CollectionHome = (props: IProps) => {

    const { name, description, data } = props
    const backendUrl = Platform.OS === 'android' ? process.env.EXPO_PUBLIC_ANDROID_API_URL : process.env.EXPO_PUBLIC_IOS_API_URL

    const [loading, setLoading] = useState<boolean>(true)

    const [restaurants, setRestaurants] = useState<ITopRestaurants[] | []>([])
    const { height: sHeight, width: sWidth } = Dimensions.get('window');


    return (
        <>
            <View style={{ height: 10, backgroundColor: APP_COLOR.GREY }}></View>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: APP_COLOR.ORANGE }}>{name}</Text>
                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Text style={{ color: '#5a5a5a' }}>{`Xem tất cả`}</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color='grey' />
                    </Pressable>
                </View>
                <View style={styles.description}>
                    <Text>{description}</Text>
                </View>

                <FlatList
                    data={data}
                    style={{ marginHorizontal: 10, marginTop: 10 }}
                    contentContainerStyle={{ gap: 5 }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Pressable
                        >
                            <View style={styles.itemContainer}>
                                {/* <Image source={} style={{ height: 130, width: 130 }} /> */}
                                <Text
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                    style={{
                                        fontSize: 15,
                                        fontWeight: '500',
                                        marginHorizontal: 5,
                                        maxWidth: 130
                                    }}>abn</Text>
                                {/* <Text
                                    style={{
                                        borderWidth: 1,
                                        borderColor: APP_COLOR.ORANGE,
                                        alignSelf: 'flex-start',
                                        paddingHorizontal: 5,
                                        marginHorizontal: 5,
                                        borderRadius: 3,
                                        marginVertical: 5,
                                        color: APP_COLOR.ORANGE,
                                    }}
                                >Flash Sale</Text> */}
                            </View>
                        </Pressable>
                    )}
                />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    description: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#5a5a5a'
    },
    itemContainer: {
        backgroundColor: APP_COLOR.GREY,
        width: 130
    }
})

export default CollectionHome