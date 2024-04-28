import { StyleSheet, View } from "react-native";

export default function Shuriken () {
    return (
        <View style={style.shuriken}>
            <View style={style.centerRing}/>
            <View style={style.blade1}/>
            <View style={style.blade2}/>
        </View>
    )
}

const style = StyleSheet.create({
    shuriken: {
        width: 100,
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    centerRing: {
        position: "absolute",
        backgroundColor: "white",
        width: 40,
        height: 40,
        borderRadius: 100,
        zIndex: 50
    },
    blade1:{
        height: 90,
        width: 90,
        backgroundColor: 'black',
        position: 'absolute',
        transform: [{rotateZ: "55deg"}, {rotateY: "30deg"}, {rotateX: "30deg"} ]
    },
    blade2: {
        height: 90,
        width: 90,
        backgroundColor: 'black',
        position: 'absolute',
        transform: [{rotateZ: "145deg"}, {rotateY: "30deg"}, {rotateX: "30deg"}]

    }

})
