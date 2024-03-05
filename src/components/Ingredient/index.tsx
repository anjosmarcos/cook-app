import { Image, Pressable, Text } from "react-native";
import { styles } from "./style";

export function Ingredient(){
    return (
        <Pressable style={styles.container} >
                <Image
                    source={require('@/images/apple.png')}
                    style={styles.image}
                />
            <Text style={styles.title}>
                Maça
            </Text>
        </Pressable>
    )
}