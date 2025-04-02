import { Text, View } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';

const HeaderHome = () => {
    return (
        <View style={{
            paddingHorizontal: 5
        }}>
            <Text style={{ paddingHorizontal: 5 }}>Deliver to:</Text>
            <Text><Entypo name="location-pin" size={20} color='orange' />Triều khúc, Thanh Trì, Hà Nội</Text>
        </View>
    )
}

export default HeaderHome;