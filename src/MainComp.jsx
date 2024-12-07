import {vars} from './data'
import { MainVarInfo } from './mainComponents/MainVarInfo'
import { Game } from './mainComponents/Game'
import { questions } from './questions'
import { Result } from './mainComponents/Result'
import { useState } from 'react'

export function MainComp(){
    const [step,setStep] = useState(0)
    const question=questions[step]
    
    const clickVAriant= (index)=>{
        console.log(step,index)
        setStep(step+1)
    }

    return (
        <section className='top'>
            <div className='main'>
                <div className='main-info'>
                    <p className='info-text'>Информация</p>
                    {vars.map((element) => {
                        return <MainVarInfo key={element.title} {...element} />
                     })}
                     {/* <MainVarInfo {...vars[0]} /> 
                     <MainVarInfo {...vars[1]} /> 
                     <MainVarInfo {...vars[2]} />  */}
                </div>
                <div className='quiz'>
                    <Game question={question} clickVAriant={clickVAriant}/>
                    <Result/>
                </div>
            </div>
        </section>
    )
}