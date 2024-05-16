
import React, {useState,useRef} from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import "@lottiefiles/lottie-player";


export default function LottieAnimate() {

    const playerRef = useRef(null)
    const [stressedWoman, setStressedWoman] = useState()

    return (
        <div>
            <Player
            autoplay    
            loop
            src="../public/Lottie/stressed-woman.json"
            style={{ height: '300px', width: '300px' }}
            >
            <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
    )
}