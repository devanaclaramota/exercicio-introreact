import { useEffect, useState } from 'react'
import { registerRuntimeCompiler } from 'vue'
import  './Imputs.css'
function Imputs(){

    const [alt, setAlt] = useState()
    const [peso, setPeso] = useState('')
    const imc = calcImc()

        function calcImc(){

            const imc =  (peso / (alt*alt))
            return(
                
             imc.toFixed(1)
            )
           
          
        }
        function prinTela(){
            if(imc < 18.5){
                return(
                    <h3>Abaixo do peso </h3>
                )
               
            }else if (imc < 25) {
                return(
                    <h3>Peso normal </h3>
                )
            }else if (imc < 30) {
                return(
                    <h3>Excesso de peso  </h3>
                )
            }else if (imc < 35) {
                return(
                    <h3>Obesidade I </h3>
                )
            }else if (imc < 40) {
                return(
                    <h3>Obesidade II </h3>
                )
            }else if(imc >=  40){
                return(
                    <h3>Obesidade III </h3>
                )
            }
            else{
                return(
                    <h3> </h3>
                )
            }
        }
       

    return(
        <div className="form-control"> 

            <div >
                        <input type="number" placeholder="Digite seu peso" onChange={e => setPeso(e.target.value)} />
                        <input type="number" placeholder="Digite sua altura " onChange={e => setAlt(e.target.value)} />
                      
            </div>
                   
                 <h2>  {calcImc()}<br></br> {prinTela()}</h2>  
                 

        </div>
        
        
        
        
        
  
    )
}
export default Imputs 