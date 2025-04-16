import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import theme from "../themes/theme";

export default function Button({ title, onPress }) {
    return (
        <TouchableOpacity
            style={{
                padding: 10, backgroundColor: theme.colors.primary, borderRadius: 25, paddingVertical: 15
                , width: "100%", textAlign: "center", alignItems: "center", justifyContent: "center",
            }}
            onPress={onPress}>
            <Text style={{
                color: "#ffffff", fontSize: 16, fontFamily: "Urbanist-Bold",
            }}>{title}</Text>
        </TouchableOpacity>
    )
}
