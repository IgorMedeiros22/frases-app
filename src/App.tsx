import { useState } from 'react'
import './App.css'
import logImg from './assets/logo.png'
import { allFrases } from './data/allfrases'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }
  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className='container'>
      <img
        alt="Logo frases"
        src={logImg}
        className='logo' />

      <h2 className='title'>Categorias</h2>

      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className='category-button'
            style={{
              borderWidth:
                item.nome === allFrases[categoriaSelecionada].nome
                  ?
                  2
                  :
                  0,
              borderColor: "#1fa4db"
            }}
            onClick={() => handleSwitchCategory(index)}>
            {item.nome}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>

      {
        textoFrase !== '' &&
        <p className='textoFrase'>{textoFrase}</p>
      }
    </div>
  )
}

export default App
