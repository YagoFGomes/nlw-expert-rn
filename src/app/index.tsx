import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { View, FlatList } from "react-native";

import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";

function Home() {
    const [category, setCategory] = useState(CATEGORIES[0]);

    function handleCategorySelector(selectedCategory: string) {
        setCategory(selectedCategory);
    }
    return (
        <View className="flex-1">
            <Header title="Faça seu pedido" cartQuantityItens={5} />

            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CategoryButton
                        title={item}
                        onPress={() => handleCategorySelector(item)}
                        isSelected={item == category}
                    />
                )}
                horizontal
                className="max-h-10 mt-5"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
            />
        </View>
    );
}

export default Home;
