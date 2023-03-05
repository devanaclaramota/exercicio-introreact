import './Tabela.css'
function Tabela(){

    return(
        <div className="table-area">
            <table>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                </tr>
                <tr>
                    <td>Menor 18,5</td>
                    <td>Abaixo do peso</td>
                </tr>
                <tr>
                     <td>18,5 - 24,9</td>
                     <td>Peso normal</td>
                </tr>
                <tr>
                    <td>25,0 - 29,9</td>
                    <td>Excesso de peso</td>
                </tr>
                <tr>
                    <td>30,0 - 34,9</td>
                    <td>Obesidade I</td>
                </tr>
                <tr>
                    <td>35,0 - 39,9</td>
                    <td>Obesidade II</td>
                </tr>
                <tr> 
                    <td>Maior 40,0</td>
                    <td>Obesidade III</td>
                </tr>
            </table>
        </div>
    )
}
export default Tabela 