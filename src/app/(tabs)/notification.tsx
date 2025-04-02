import { APP_COLOR } from "@/utils/constants"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { FontAwesome } from '@expo/vector-icons';


const NotificationTab = () => {

    const data: { key: number; title: string; description: string; time: string; icon: React.ComponentProps<typeof FontAwesome>['name'] }[] = [
        { key: 1, title: 'Đến giờ đi khám bệnh', description: 'Người cao tuổi được nhân viên y tế kiểm tra sức khỏe định kỳ, đo huyết áp, theo dõi tình trạng sức khỏe và tư vấn chế độ dinh dưỡng, tập luyện phù hợp.', time: '9:15', icon: 'stethoscope' },
        { key: 2, title: 'Thức dậy và vệ sinh cá nhân', description: 'Bắt đầu ngày mới với các hoạt động vệ sinh như đánh răng, rửa mặt, thay quần áo và chuẩn bị cho bữa sáng.', time: '6:00', icon: 'shower' },
        { key: 3, title: 'Ăn sáng', description: 'Thưởng thức bữa sáng đầy đủ dinh dưỡng, giúp cung cấp năng lượng cho cả ngày, kèm theo uống thuốc nếu có chỉ định.', time: '7:00', icon: 'coffee' },
        { key: 4, title: 'Tập thể dục buổi sáng', description: 'Thực hiện các bài tập nhẹ nhàng như yoga, dưỡng sinh hoặc đi bộ để tăng cường sức khỏe và sự dẻo dai.', time: '8:00', icon: 'heartbeat' },
        { key: 5, title: 'Giờ giải trí', description: 'Tham gia các hoạt động như đọc sách, xem TV, vẽ tranh, đan len hoặc chơi cờ cùng bạn bè.', time: '10:00', icon: 'book' },
        { key: 6, title: 'Hoạt động nhóm', description: 'Tham gia các hoạt động tập thể như hát karaoke, kể chuyện, hoặc tập kịch để gắn kết với mọi người.', time: '11:00', icon: 'users' },
        { key: 7, title: 'Tham gia lớp học kỹ năng', description: 'Tham gia các buổi học vẽ, làm đồ thủ công hoặc học sử dụng công nghệ để duy trì tinh thần minh mẫn.', time: '14:00', icon: 'paint-brush' },
        { key: 8, title: 'Ăn trưa', description: 'Bữa trưa đầy đủ dưỡng chất, phù hợp với chế độ ăn uống riêng của từng người, giúp duy trì sức khỏe.', time: '12:00', icon: 'cutlery' },
        { key: 9, title: 'Nghỉ trưa', description: 'Giấc ngủ ngắn giúp cơ thể thư giãn, phục hồi năng lượng cho các hoạt động buổi chiều.', time: '12:30', icon: 'bed' },
        { key: 10, title: 'Chăm sóc vườn cây', description: 'Người cao tuổi có thể tham gia trồng hoa, chăm sóc cây cảnh hoặc làm vườn để thư giãn tinh thần.', time: '15:00', icon: 'leaf' },
        { key: 11, title: 'Trò chuyện cùng bạn bè', description: 'Dành thời gian trò chuyện, chia sẻ những câu chuyện cuộc sống để tăng cường kết nối và tránh cảm giác cô đơn.', time: '16:00', icon: 'comments' },
        { key: 12, title: 'Tập vật lý trị liệu', description: 'Những người cần hỗ trợ có thể tham gia các bài tập trị liệu giúp phục hồi chức năng vận động.', time: '16:30', icon: 'plus-square' },
        { key: 13, title: 'Ăn nhẹ buổi chiều', description: 'Một bữa ăn nhẹ với trái cây, sữa hoặc bánh giúp duy trì năng lượng cho cơ thể.', time: '15:30', icon: 'apple' },
        { key: 14, title: 'Đi dạo thư giãn', description: 'Đi bộ nhẹ nhàng trong khuôn viên hoặc vườn hoa giúp cải thiện tuần hoàn máu và thư giãn tâm trí.', time: '17:00', icon: 'child' }, // 'walking' vẫn khả dụng
        { key: 15, title: 'Giờ xem tin tức', description: 'Cập nhật thông tin thời sự qua truyền hình, báo chí hoặc internet để nắm bắt tình hình xã hội.', time: '18:00', icon: 'tv' },
        { key: 16, title: 'Ăn tối', description: 'Bữa tối nhẹ nhàng với thực phẩm lành mạnh, phù hợp với chế độ ăn uống của người cao tuổi.', time: '18:30', icon: 'cutlery' }, // Đổi 'pizza-slice' thành 'hamburger'
        { key: 17, title: 'Nghe nhạc và thư giãn', description: 'Nghe nhạc nhẹ, nhạc cổ điển hoặc các bài hát yêu thích giúp thư giãn tinh thần trước khi đi ngủ.', time: '19:00', icon: 'music' },
        { key: 18, title: 'Liên lạc với gia đình', description: 'Gọi điện thoại hoặc video call với con cháu để trò chuyện và duy trì kết nối với gia đình.', time: '19:30', icon: 'phone' },
        { key: 19, title: 'Chuẩn bị đi ngủ', description: 'Vệ sinh cá nhân, thay đồ ngủ và thư giãn để chuẩn bị cho một giấc ngủ ngon.', time: '20:30', icon: 'bath' },
        { key: 20, title: 'Giấc ngủ đêm', description: 'Ngủ đủ giấc giúp cơ thể phục hồi năng lượng, hỗ trợ sức khỏe tốt hơn.', time: '21:00', icon: 'bed' }
    ]




    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 8
            }}>
                <Text style={{ fontSize: 16, color: 'green', paddingHorizontal: 5 }}>
                    Chi tiết thông báo
                </Text>
                <Text style={{ color: 'grey', paddingHorizontal: 20, }}>
                    Đọc tất cả (10)
                </Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.notificationItems}>
                            <View style={{ flexDirection: 'row', gap: 15 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                                <FontAwesome name={item.icon} size={24} color={APP_COLOR.GREEN} style={{ marginRight: 10 }} />
                            </View>
                            <Text>{item.description}</Text>
                            <Text style={{ fontSize: 12, color: 'gray' }}>{item.time}</Text>
                        </View>

                    )
                }}
            >

            </FlatList >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    notificationItems: {
        backgroundColor: APP_COLOR.NOTIFICATION_COLOR,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderBottomWidth: 0.6,
        borderBottomColor: 'grey'
    }
})

export default NotificationTab