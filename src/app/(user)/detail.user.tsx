import { Image, StyleSheet, Text, View } from "react-native"
import avatar from '@/assets/images/icon.png'
import { APP_COLOR } from "@/utils/constants"
import AntDesign from '@expo/vector-icons/AntDesign';

const DeltailUser = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <Image source={avatar} style={{ height: 90, width: 90, borderRadius: 90, alignSelf: 'center' }} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Dương Thế Duy</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.item}>
                    <Text style={styles.textStyle}>Họ tên </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                        <Text style={styles.textStyle}>Dương Thế Duy</Text>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textStyle}>Giới tính </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                        <Text style={styles.textStyle}>Nam</Text>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textStyle}>Ngày sinh </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                        <Text style={styles.textStyle}>01/02/2004</Text>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textStyle}>Địa chỉ </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 10 }}>
                        <View>
                            <Text style={styles.textStyle}>Số 123, Đường ABC, Quận DEF, {'\n'}Thành phố JQK</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textStyle}>Số điện thoại </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                        <Text style={styles.textStyle}>0123456789</Text>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textStyle}>Email </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                        <Text style={styles.textStyle}></Text>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textStyle}>Người giám hộ </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                        <Text style={styles.textStyle}></Text>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 0.2,
        backgroundColor: APP_COLOR.NOTIFICATION_COLOR,
        paddingTop: 80
    },
    avatarContainer: {
        borderRadius: 50,
        height: 100,
        width: 100,
        borderWidth: 1,
        alignSelf: "center",
        backgroundColor: APP_COLOR.WHITE
    },
    body: {
        flex: 0.8,
        backgroundColor: APP_COLOR.GREY,
        gap: 12
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: APP_COLOR.WHITE,
        borderBottomWidth: 0.5,
        borderBottomColor: APP_COLOR.GREY,
        paddingVertical: 15,
        paddingHorizontal: 20,
        gap: 20
    },
    textStyle: {
        fontSize: 18
    }
})

export default DeltailUser