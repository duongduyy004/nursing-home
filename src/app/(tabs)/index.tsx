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
            key: 1,
            name: "Bài viết nổi bật",
            description: "Cập nhật thông tin mới nhất về sức khỏe",
        }
    ]

    const data = [
        {
            key: 1,
            title: 'Cần duy trì 4 thói quen này để kéo dài tuổi thọ',
            description: 'Sống trường thọ và khỏe mạnh là mong muốn chung của nhiều người. Ai cũng hy vọng có thể kéo dài tuổi thọ và tận hưởng cuộc sống một cách trọn vẹn. Nhiều nghiên cứu khoa học đã chỉ ra rằng, duy trì một số thói quen trong sinh hoạt hàng ngày có thể góp phần đáng kể vào việc kéo dài tuổi thọ.',
            source: require('@/assets/news/news-1.png'),
            time: '03/04/2025',
            views: 70,
            share: 0
        },
        {
            key: 2,
            title: 'Thực phẩm cải thiện giấc ngủ',
            description: 'Giấc ngủ chất lượng là yếu tố quan trọng để duy trì sức khỏe thể chất và tinh thần, đặc biệt khi tuổi tác ngày càng cao. Để duy trì và phục hồi giấc ngủ, cần duy trì lịch trình ngủ đều đặn, tiếp xúc ánh sáng tự nhiên vào buổi sáng, thực hành thư giãn trước khi ngủ.',
            source: require('@/assets/news/news-2.png'),
            time: '31/03/2025',
            views: 91,
            share: 2
        },
        {
            key: 3,
            title: `Nam thanh niên có khối u kích thước "khổng lồ"`,
            description: 'Nam bệnh nhân 48 tuổi, quê Quảng Nam, nhập viện với tình trạng đau bụng kèm mệt mỏi chán ăn. Sau khi được chụp CT-scan, MRI thì phát hiện ở gan có nhiều khối tổn thương kích thước lớn nhất 14cm. Đây là hậu quả của việc bỏ điều trị, tự ý về uống thuốc lá dân gian, chưa qua kiểm chứng. Sau một thời gian, khi bệnh tiến triển nặng, cơn đau kéo đến dữ dội với tần suất dày mới quay lại bệnh viện. Sau khi hội chẩn, bệnh nhân được chẩn đoán là ung thư gan và đã được tiến hành phẫu thuật cắt gan phải.',
            source: require('@/assets/news/news-3.png'),
            time: '02/04/2025',
            views: 55,
            share: 27
        }
    ]

    return (
        <View style={styles.container}>
            <CustomFlatList
                data={section}
                style={styles.list}
                renderItem={({ item }) => (
                    <CollectionHome
                        name={item.name}
                        description={item.description}
                        data={data}
                    />
                )}
                StickyElementComponent={<SearchHome />}
                // // TopListElementComponent={<View style={styles.topList} />}
                TopListElementComponent={<TopListHome />}
            />
        </View>
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