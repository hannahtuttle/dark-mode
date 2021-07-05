import React, { useEffect } from 'react'

import useLocalStorage from './useLocalStorage.js'

function useDarkMode(){

    const [someValue, setSomeValue] =useLocalStorage('')

    useEffect(() => {
        const body= document.querySelector('body')
        if(someValue === true){
            body.classList.add('dark-mode')
        }else{
           body.classList.remove('dark-mode')
        }
    }, [someValue])

    return [someValue, setSomeValue]
}

export default useDarkMode