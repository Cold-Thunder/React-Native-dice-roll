import React, {useState} from 'react'
import { Image, Pressable, StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'

import DiceOne from "../assets/One.png"
import DiceTwo from "../assets/Two.png"
import DiceThree from "../assets/Three.png"
import DiceFour from "../assets/Four.png"
import DiceFive from "../assets/Five.png"
import DiceSix from "../assets/Six.png"

const DiceSec = (props) =>{
    return(
        <View style={styles.dicImgSec}>
            <Image source={props.imgUrl} style={styles.dicImg}/>
        </View>
    )
}

const FeedBack = () => {
    const [diceState, setDiceState] = useState(DiceOne)
    const handleDic =()=>{
        let diceNum = Math.ceil(Math.random()*6+0);
        switch(diceNum){
            case 1: setDiceState(DiceOne)
            break;
            case 2: setDiceState(DiceTwo)
            break;
            case 3: setDiceState(DiceThree)
            break;
            case 4: setDiceState(DiceFour)
            break;
            case 5: setDiceState(DiceFive)
            break;
            case 6: setDiceState(DiceSix)
            break;
            default: setDiceState(DiceOne)
            break;
        }
    }

    const height = useWindowDimensions().height;
    const width = useWindowDimensions().width;
    return (
        <View style={[styles.diceComp, {height, width}]}>
            <View style={styles.headingSec}>
                <Text style={styles.headingText}>Roll the dice</Text>
            </View>
            <View style={styles.diceSection}>
                <DiceSec imgUrl={diceState} />
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btn} onPress={handleDic}>
                    <Text style={styles.diceText}>Roll Dice</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default FeedBack;

const styles = StyleSheet.create({
    diceComp: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    headingSec: {
        justifyContent: "center",
        alignItems: 'center',
        height:60,
        width: "90%",
        borderRadius: 10,
        backgroundColor: "#47a6ff", 
        borderRadius: 15,
        elevation: 3 
    },
    headingText: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 32,
        color: "white",
        fontWeight: "bold",
    },
    dicImgSec: {
        marginVertical: 20 
    },
    dicImg: {
        
    },
    btn:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 150,
        backgroundColor: '#47a6ff',
        borderRadius: 15,
        elevation: 3
    },
    diceText: {
        fontSize: 23,
        color: "white",
        fontWeight: "bold"
    }
})