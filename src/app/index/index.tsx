import { Alert, ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
import { Ingredient } from "@/components/Ingredient";
import { useEffect, useState } from "react";
import { Selected } from "@/components/Selected";
import { router } from "expo-router";
import { services } from "@/services";

export default function Index() {
    const [selected, setSelected] = useState<string[]>([])
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

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

    function handleSearch(){
        router.navigate("/recipes/" + selected)
    }

    useEffect(() => {
        services.ingredientes.findAll().then(setIngredients) 
      }, [])

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
                    ingredients.map((item) => (
                        <Ingredient 
                            key={item.id} 
                            name={item.name}
                            image={`${services.storage.imagePath}/${item.image}`}
                            selected={selected.includes(item.id)}
                            onPress={() => handleToggleSelected(item.id)}
                        />
                    ))
                }

            </ScrollView>
                
            { 
            selected.length > 0 && (
                <Selected
                quantity={selected.length}
                onClear={handleClearSelected}
                onSearch={handleSearch}
            />
            )}

        </View>
    )
}