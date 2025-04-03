import { APP_COLOR } from "@/utils/constants"
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TopListHome = () => {

    const icons = [
        { key: 1, name: "Lịch hẹn", source: require("@/assets/icons/appointment-reminders.png") },
        { key: 2, name: "Lịch sinh hoạt", source: require("@/assets/icons/calendar.png") },
        { key: 3, name: "Liên hệ", source: require("@/assets/icons/call.png") },
        { key: 4, name: "Bác sĩ", source: require("@/assets/icons/doctor.png") },
        { key: 5, name: "Tình trạng sức khỏe", source: require("@/assets/icons/health.png") },
        { key: 5, name: "Đơn thuốc", source: require("@/assets/icons/prescription.png") },
    ]

    return (
        <View style={styles.topList} >
            <View style={{ height: 5, backgroundColor: APP_COLOR.GREY }}></View>
            <View style={{
                paddingHorizontal: 10,
                paddingTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <Text style={{ fontSize: 18, fontWeight: '500', color: APP_COLOR.ORANGE }}>
                    Tiện ích
                </Text>
                <Pressable
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <Text style={{ color: '#5a5a5a' }}>{`Xem tất cả`}</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color='grey' />
                </Pressable>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                directionalLockEnabled={true}
                alwaysBounceVertical={false}
                style={{ marginVertical: 15 }}
            >
                <FlatList
                    contentContainerStyle={{ alignSelf: "flex-start" }}
                    numColumns={Math.ceil(icons.length / 1.5)}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={icons}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={{
                                    width: 100,
                                    alignItems: "center",
                                    padding: 10
                                }}
                            >
                                <Image
                                    source={item.source}
                                    resizeMode="center"
                                    style={{
                                        width: 55,
                                        height: 55,
                                        backgroundColor: APP_COLOR.ICON_COLOR,
                                        borderRadius: 10,
                                    }}
                                />
                                <Text style={{ textAlign: "center" }}>{item.name}</Text>

                            </View>
                        )
                    }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    topList: {
        minHeight: 100,
        width: "100%",

    }
});


export default TopListHome