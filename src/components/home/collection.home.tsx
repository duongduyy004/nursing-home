import { Dimensions, FlatList, Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import demo from "@/assets/banner/bn3.jpg"
import { APP_COLOR } from "@/utils/constants";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

interface IProps {
    name: string;
    description?: string;
    data?: {
        key: number,
        title: string,
        description: string,
        source: any,
        time: string,
        views: number,
        share: number
    }[]

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
                    <Text style={{ fontSize: 18, fontWeight: '500', color: APP_COLOR.ORANGE }}>{name}</Text>
                    {/* <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Text style={{ color: '#5a5a5a' }}>{`Xem tất cả`}</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color='grey' />
                    </Pressable> */}
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
                                <View style={{ gap: 10, marginHorizontal: 15, marginVertical: 10 }}>
                                    <Text
                                        numberOfLines={2}
                                        ellipsizeMode="tail"
                                        style={{
                                            fontSize: 16,
                                            fontWeight: '500',
                                            maxWidth: 220
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                    <Text
                                        numberOfLines={3}
                                        ellipsizeMode="tail"
                                        style={{
                                            fontSize: 16,
                                            maxWidth: 220,
                                        }}
                                    >
                                        {item.description}
                                    </Text>
                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <View style={{ flexDirection: 'row', gap: 2 }}>
                                            <MaterialIcons name="access-time-filled" size={20} color="black" />
                                            <Text>
                                                {item.time}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', gap: 2 }}>
                                            <AntDesign name="eye" size={20} color="black" />
                                            <Text>
                                                {item.views}
                                            </Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', gap: 2 }}>
                                            <Entypo name="share" size={20} color="black" />
                                            <Text>
                                                {item.share}
                                            </Text>
                                        </View>


                                    </View>
                                </View>
                                <View>
                                    <Image
                                        source={item.source}
                                        style={{
                                            height: 140,
                                            width: 100,
                                            marginVertical: 10,
                                            marginHorizontal: 20,
                                            borderRadius: 20
                                        }}
                                    />

                                </View>
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
        backgroundColor: APP_COLOR.WHITE,
        flexDirection: "row",
        flexWrap: 'wrap',
        borderRadius: 20,
        marginVertical: 10
    }
})

export default CollectionHome