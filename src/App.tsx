import React, { JSX, PropsWithChildren, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import diceOne from '../assets/one.png'
import dicetwo from '../assets/two.png'
import dicethree from '../assets/three.png'
import dicefour from '../assets/four.png'
import dicefive from '../assets/five.png'
import dicesix from '../assets/six.png'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>

const Dice = ({imageUrl}:DiceProps):JSX.Element=>{
  return(
    <View>
      <Image style={styles.DiceImage}  source={imageUrl}/>
    </View>
  )
}

function App(): React.JSX.Element {
  const [DiceImg,setDiceImg] = useState<ImageSourcePropType>(diceOne)

  const rolldiceOnTap = ()=>{
    let randomNo = Math.floor(Math.random() * 6) + 1;
    switch (randomNo) {
      case 1:
        setDiceImg(diceOne)
        break;
      case 2:
        setDiceImg(dicetwo)
        break;
      case 3:
        setDiceImg(dicethree)
        break;
      case 4:
        setDiceImg(dicefour)
        break;
      case 5:
        setDiceImg(dicefive)
        break;
      case 6:
        setDiceImg(dicesix)
        break;
      default:
        setDiceImg(diceOne)
        break;
    }

    ReactNativeHapticFeedback.trigger("impactHeavy", options); //haptic feed back
  }


  return (
    <View style={styles.container}>
      <Dice imageUrl={DiceImg}/>
      <Pressable onPress={rolldiceOnTap }>
        <Text style={styles.RollDiceBtnText }  >Roll the Dice</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'#FFF2F2'
  },
  DiceContainer:{
    margin:12,
  },
  DiceImage:{
    width:200,
    height:200
  },
  RollDiceBtnText:{
    paddingVertical:10,
    paddingHorizontal:40,
    borderWidth:2,
    borderRadius:8,
    borderBlockColor:'#E5E0FF',
    fontSize:16,
    color:'#8EA7E9',
    fontWeight:700,
    textTransform:'uppercase',
  }
});

export default App;
