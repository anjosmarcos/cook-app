import { Alert, ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
import { Ingredient } from "@/components/Ingredient";
import { useState } from "react";
import { Selected } from "@/components/Selected";

export default function Index() {
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value: string){
        if(selected.includes(value)){
            return setSelected((state) => state.filter((item) => item !== value))
        }
        setSelected((state) => [...state, value])
    }

    function handleClearSelected(){

        Alert.alert("Limpar", "Deseja limpar tudo?", [
            {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            {
                text: "Limpar",
                onPress: () => setSelected([])
            }
        ])

    }



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
                        <Ingredient 
                            key={index} 
                            name="Maca"
                            image=""
                            selected={selected.includes(String(index))}
                            onPress={() => handleToggleSelected(String(index))}
                        />
                    ))
                }

            </ScrollView>
                
            <Selected
                quantity={selected.length}
                onClear={handleClearSelected}
                onSearch={() => {}}
            />

        </View>
    )
}