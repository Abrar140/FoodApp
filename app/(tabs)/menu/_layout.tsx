import { Stack } from "expo-router";

export default function MenuStack(){
    return (<Stack>
        <Stack.Screen name="index" options={{ title:'Menu', headerShown: false }} />
        <Stack.Screen name="product" options={{ headerShown: false }} />
    </Stack>)
}