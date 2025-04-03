import { APP_COLOR } from "@/utils/constants";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, SetStateAction, useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { SafeAreaView } from "react-native-safe-area-context";
const ScheduleTab = () => {

    const [selected, setSelected] = useState("")

    const markedDates = {
        // March 2025
        '2025-03-01': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-02': { marked: false, dotColor: APP_COLOR.PRIMARY },
        '2025-03-03': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-04': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-05': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-06': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-07': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-08': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-09': { marked: false, dotColor: APP_COLOR.PRIMARY },
        '2025-03-10': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-11': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-12': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-13': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-14': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-15': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-16': { marked: false, dotColor: APP_COLOR.PRIMARY },
        '2025-03-17': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-18': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-19': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-20': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-21': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-22': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-23': { marked: false, dotColor: APP_COLOR.PRIMARY },
        '2025-03-24': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-25': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-26': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-27': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-28': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-29': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-03-30': { marked: false, dotColor: APP_COLOR.PRIMARY },
        '2025-03-31': { marked: true, dotColor: APP_COLOR.PRIMARY },

        // April 2025 (existing)
        '2025-04-01': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-02': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-03': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-04': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-05': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-06': { marked: false, dotColor: APP_COLOR.PRIMARY },
        '2025-04-07': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-08': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-09': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-10': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-11': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-12': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-13': { marked: false, dotColor: APP_COLOR.PRIMARY },
        '2025-04-14': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-15': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-16': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-17': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-18': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-19': { disabled: true, disableTouchEvent: true },
        '2025-04-20': { marked: false, dotColor: APP_COLOR.PRIMARY },
        '2025-04-21': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-22': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-23': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-24': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-25': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-26': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-27': { marked: false, dotColor: APP_COLOR.PRIMARY },
        '2025-04-28': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-29': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-04-30': { marked: true, dotColor: APP_COLOR.PRIMARY },

        // May 2025
        '2025-05-01': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-02': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-03': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-04': { marked: false, dotColor: APP_COLOR.PRIMARY },
        '2025-05-05': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-06': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-07': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-08': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-09': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-10': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-11': { marked: false, dotColor: APP_COLOR.PRIMARY },
        '2025-05-12': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-13': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-14': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-15': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-16': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-17': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-18': { marked: false, dotColor: APP_COLOR.PRIMARY },
        '2025-05-19': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-20': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-21': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-22': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-23': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-24': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-25': { marked: false, dotColor: APP_COLOR.PRIMARY },
        '2025-05-26': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-27': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-28': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-29': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-30': { marked: true, dotColor: APP_COLOR.PRIMARY },
        '2025-05-31': { marked: true, dotColor: APP_COLOR.PRIMARY }
    }

    const agendaItems = {
        '2025-04-02': [
            { time: '6:00 - 7:00', name: 'Thức dậy, vệ sinh cá nhân, thay đồ' },
            { time: '7:00 - 8:00', name: 'Ăn sáng, uống thuốc theo chỉ định' },
            { time: '8:00 - 9:00', name: 'Tập thể dục nhẹ nhàng (yoga, dưỡng sinh, đi bộ)' },
            { time: '9:00 - 10:00', name: 'Kiểm tra sức khỏe định kỳ' },
            { time: '10:00 - 11:30', name: 'Hoạt động giải trí (đọc sách, xem TV, vẽ tranh, chơi cờ)' },
            { time: '11:30 - 12:30', name: 'Ăn trưa theo chế độ dinh dưỡng' },
            { time: '12:30 - 14:00', name: 'Nghỉ trưa' },
            { time: '14:00 - 15:30', name: 'Tham gia hoạt động tập thể (ca hát, làm thủ công, chăm sóc cây cảnh)' },
            { time: '15:30 - 16:00', name: 'Ăn nhẹ (trái cây, sữa, bánh)' },
            { time: '16:00 - 17:30', name: 'Tập vật lý trị liệu hoặc đi dạo, trò chuyện' },
            { time: '17:30 - 18:30', name: 'Ăn tối' },
            { time: '18:30 - 19:30', name: 'Xem tin tức, nghe nhạc, thư giãn' },
            { time: '19:30 - 20:30', name: 'Gặp gỡ gia đình qua điện thoại/video call' },
            { time: '20:30 - 21:00', name: 'Chuẩn bị đi ngủ, vệ sinh cá nhân' },
            { time: '21:00', name: 'Nghỉ ngơi và ngủ sớm' }
        ],
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <Calendar
                onDayPress={day => {
                    setSelected(day.dateString)
                }}
                // Collection of dates that have to be marked. Default = {}
                markedDates={{
                    ...markedDates,
                    [selected]: {
                        selected: true, disableTouchEvent: true, selectedDotColor: 'blue'
                    }
                }}
            /> */}
            <Agenda
                // The list of items that have to be displayed in agenda. If you want to render item as empty date
                // the value of date key has to be an empty array []. If there exists no value for date key it is
                // considered that the date in question is not yet loaded
                items={agendaItems}
                onDayPress={(day: { dateString: SetStateAction<string>; }) => {
                    setSelected(day.dateString)
                }}
                markedDates={{
                    ...markedDates,
                    [selected]: {
                        selected: true, disableTouchEvent: true, selectedDotColor: 'blue'
                    }
                }}

                renderItem={(item: { time: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
                    return (
                        <View style={styles.scheduleItem}>
                            <Text style={{
                                fontSize: 16
                            }}>
                                Thời gian: {item.time}
                            </Text>
                            <Text style={{
                                fontSize: 16
                            }}>
                                {item.name}
                            </Text>
                        </View>)
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_COLOR.WHITE
    },
    scheduleItem: {
        backgroundColor: APP_COLOR.GREY,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderLeftWidth: 5,
        borderLeftColor: 'orange',
        marginTop: 10,
        marginRight: 10
    }
})

export default ScheduleTab