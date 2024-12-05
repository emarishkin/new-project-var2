import {vars} from './data'
import { MainVarInfo } from './mainComponents/MainVarInfo'

export function MainComp(){
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
            </div>
        </section>
    )
}