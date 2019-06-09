import {useEffect, useState} from 'react'

export default function useAnimation(){
    let [visible,setVisible] = useState(false)

    useEffect(()=>{
      setVisible(prev=>!prev)
    },[])

    return visible
}