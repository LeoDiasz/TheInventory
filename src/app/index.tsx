import React from "react"
import "@/styles/global.css"
import { Link } from "expo-router"
import { StatusBar, Text, View } from "react-native"

const App = () => {


    return (
        <View>
            <Text>Testando</Text>
            <Link href={"/Home"}>Ir para home</Link>
            <StatusBar barStyle="light-content" />
        </View>
    )
}

export default App