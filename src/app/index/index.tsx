import { Text, View } from "react-native";

import { Ingredient } from "@/components/Ingredients";

import { styles } from "./styles";

export default function Index() {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>
                    os produtos
                </Text>
            </Text>
            <Text style={styles.message}>
                Descubra receitas baseadas que você escolheu.
            </Text>

            <Ingredient />
        </View>
    )
}