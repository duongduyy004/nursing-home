import { Tabs } from "expo-router"
import Ionicons from '@expo/vector-icons/Ionicons';
import { APP_COLOR } from "@/utils/constants";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TabLayout = () => {
    return (
        <Tabs
            initialRouteName="index"
            screenOptions={{
                tabBarActiveTintColor: APP_COLOR.BLUE,
                tabBarLabelStyle: { paddingBottom: 6, fontSize: 14 },
                tabBarStyle: { height: 60, paddingVertical: 6 }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Trang chủ',
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={26} color={color} />,
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name="schedule"
                options={{
                    title: 'Lịch',
                    tabBarIcon: ({ color }) => <FontAwesome5 name="calendar-day" size={26} color={color} />,
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name="notification"
                options={{
                    title: 'Thông báo',
                    tabBarIcon: ({ color }) => <Ionicons name="notifications" size={26} color={color} />,
                    headerTitleAlign: 'center',
                    headerStyle: { borderBottomWidth: 1, shadowColor: 'black' }
                }}
            />

            <Tabs.Screen
                name="service"
                options={{
                    title: 'Dịch vụ',
                    tabBarIcon: ({ color }) => <MaterialIcons name="miscellaneous-services" size={26} color={color} />,
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name="account"
                options={{
                    title: 'Tôi',
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={26} color={color} />,
                    headerShown: false,
                }}
            />
        </Tabs>
    )
}

export default TabLayout