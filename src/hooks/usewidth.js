import {useEffect, useState} from 'react'

export default function useWidth(){
    let [width,setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        function handleChange(event){
            setWidth(event.target.innerWidth)
        }
        window.addEventListener('resize', (e)=>handleChange(e))

        return ()=>{
            window.removeEventListener('resize')
        }
    },[])

    return width
}