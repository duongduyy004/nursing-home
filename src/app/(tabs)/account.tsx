import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import avatar from '@/assets/images/icon.png'
import { SafeAreaView } from "react-native-safe-area-context"
import { APP_COLOR } from "@/utils/constants"
import AntDesign from '@expo/vector-icons/AntDesign';
import ShareButton from "@/components/share/share.button";
import { router } from "expo-router";

const AccountTab = () => {
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
                <Pressable style={styles.profileItem} onPress={() => router.navigate('/detail.user')}>
                    <Text style={{ fontSize: 18 }}>Thông tin cá nhân</Text>
                    <AntDesign name="right" size={24} color="black" />
                </Pressable>
                <Pressable style={styles.profileItem}>
                    <Text style={{ fontSize: 18 }}>Tình trạng sức khỏe</Text>
                    <AntDesign name="right" size={24} color="black" />
                </Pressable>
                <Pressable style={styles.profileItem}>
                    <Text style={{ fontSize: 18 }}>Về chúng tôi</Text>
                    <AntDesign name="right" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.footer}>
                <ShareButton
                    title="Đăng xuất"
                    onPress={() => { }}
                    btnStyle={{ justifyContent: 'center', backgroundColor: APP_COLOR.GREEN, marginBottom: 10 }}
                    textStyle={{ color: APP_COLOR.WHITE, fontSize: 16 }}
                />
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
        backgroundColor: '#ccc',
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
        backgroundColor: APP_COLOR.WHITE
    },
    profileItem: {
        borderWidth: 0.5,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        backgroundColor: APP_COLOR.WHITE
    }
})

export default AccountTab