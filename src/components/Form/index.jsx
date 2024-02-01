import { useState } from 'react';
import './style.css';

const Formulario = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState("");
    const [div0, setClassificacao0] = useState("");
    const [div1, setClassificacao1] = useState("");
    const [div2, setClassificacao2] = useState("");
    const [div3, setClassificacao3] = useState("");
    const [div4, setClassificacao4] = useState("");
    const [div5, setClassificacao5] = useState("");


    const calculaIMC = (altura, peso) => {
        altura = altura / 100
        return (peso / (altura * altura)).toFixed(2);
        
    }

    const submit = (event) => {
        event.preventDefault();

        const imc = calculaIMC(Number(altura), Number(peso));

        setResultado(imc);
        setClassificacao0("");
        setClassificacao1("");
        setClassificacao2("");
        setClassificacao3("");
        setClassificacao4("");
        setClassificacao5("");

        if (imc < 18.50) setClassificacao0("resultadoSelect");
        else if (imc >= 18.50 && imc <= 24.99) setClassificacao1("resultadoSelect");
        else if (imc >= 25 && imc <= 29.99) setClassificacao2("resultadoSelect");
        else if (imc >= 30 && imc <= 34.99) setClassificacao3("resultadoSelect");
        else if (imc >= 35 && imc <= 39.99) setClassificacao4("resultadoSelect");
        else setClassificacao5("resultadoSelect");
    }

    return (
        <>
        <h1>Calculadora IMC</h1>
        <div className="container">
            <form onSubmit={submit}>
                <div>
                    <label for="peso">Peso (kg): </label>
                    <input type="number" id="peso" placeholder='Ex.: 80' value={peso} onChange={e => setPeso(e.target.value)} required />
                </div>
                <div>
                    <label for="altura">Altura (cm): </label>
                    <input type="number" id="altura" placeholder='Ex.: 150' value={altura} onChange={e => setAltura(e.target.value)} required />
                </div>
                <button type="submit">Calcular</button>
            </form>
            <div className="resultado"> {/* Ajustado aqui */}
                <p>Resultado IMC: {resultado}</p>
                <p>Classificação:</p>
                <div>
                    <div className={`classificacao ${div0}`}>
                        Menor que: 18.50 = Abaixo do peso
                    </div>
                    <div className={`classificacao ${div1}`}>
                        Entre: 18.50 e 24.9 = Peso normal
                    </div>
                    <div className={`classificacao ${div2}`}>
                        Entre: 25.0 e 29.9 = Sobrepeso
                    </div>
                    <div className={`classificacao ${div3}`}>
                        Entre 30.0 e 34.9 = Obesidade grau 1
                    </div>
                    <div className={`classificacao ${div4}`}>
                        Entre 35.0 e 39.9 = Obesidade grau 2
                    </div>
                    <div className={`classificacao ${div5}`}>
                        Igual/Maior que: 40.0 = Obesidade grau 3
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Formulario;