import { useRef,useEffect,useState } from "react";

export const MutableRef = ()=>{
    const [timer,setTimer] = useState(0)
    const interValRef = useRef<number|undefined>(undefined)

    const stopTimer = ()=>{
        window.clearInterval(interValRef.current)
    }

    useEffect(()=>{
       interValRef.current = window.setInterval(()=>{
        setTimer((timer)=> timer+1)
       },1000)
    },[])
    return (
        <div>
            HookerTimer - {timer}
            <button onClick={()=> stopTimer()}>Stop</button>
        </div>
    )
}