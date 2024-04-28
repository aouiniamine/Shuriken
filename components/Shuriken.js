import { StyleSheet, View } from "react-native";

export default function Shuriken () {
    return (
        <View style={style.shuriken}>
            <View style={style.blade1}/>
            <View style={style.blade2}/>
            <View style={style.shadowSlice1}/>
            <View style={style.shadowSlice2}/>
            <View style={style.centerRing}/>
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
    },
    blade1:{
        height: 90,
        width: 90,
        backgroundColor: 'black',
        position: 'absolute',
        transform: [{rotateZ: "55deg"}, {rotateY: "30deg"}, {rotateX: "35deg"} ]
    },
    blade2: {
        height: 90,
        width: 90,
        backgroundColor: 'black',
        position: 'absolute',
        transform: [{rotateZ: "145deg"}, {rotateY: "30deg"}, {rotateX: "35deg"}]

    },
    shadowSlice1: {width: 123, backgroundColor: "grey", height: 1, position: "absolute"},
    shadowSlice2: {width: 1, backgroundColor: "grey", height: 123, position: "absolute"}

})
