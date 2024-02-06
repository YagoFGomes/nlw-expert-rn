import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

interface Props {
    title: string;
    cartQuantityItens?: number;
}

export function Header({ title, cartQuantityItens = 0 }: Props) {
    return (
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <View className="flex-1">
                <Image
                    className="h-6 w-32"
                    source={require("@/assets/logo.png")}
                />
                <Text className="text-white text-xl font-heading">{title}</Text>
            </View>
            {cartQuantityItens > 0 && (
                <TouchableOpacity className="relative" activeOpacity={0.7}>
                    <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
                        <Text className="text-slate-900 font-bold text-xs">
                            {cartQuantityItens}
                        </Text>
                    </View>
                    <Feather
                        name="shopping-bag"
                        color={colors.white}
                        size={24}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}
