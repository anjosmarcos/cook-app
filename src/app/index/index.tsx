import { ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
import { Ingredient } from "@/components/Ingredient";

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

            <ScrollView
                contentContainerStyle={styles.igredients}
                showsHorizontalScrollIndicator={false}
            >
                {
                    Array.from({ length: 100 }).map((item, index) => (
                        <Ingredient key={index} />
                    ))
                }

            </ScrollView>

        </View>
    )
}