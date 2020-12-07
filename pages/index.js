import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { useState,useEffect } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const handleInputChange = (e) => {
      setName(e.target.value)
  }
  useEffect(() => {
    const nameInput = document.getElementsByName('name')
    setName(nameInput[0].value)
  }, [])
  

  return (
    <div className={styles.container}>
      <h1>Este es un buscador de Pokemones usando incremental static regeneration</h1>
      <h2>Encuentra a tu Pokemon favorito</h2>
      <input  type="text" name='name'  onChange={handleInputChange} placeholder='Nombre del Pokemon' />
      <Link href={`/pokemon/${name}`} prefetch={false}>
      <a>Buscar</a>
      </Link>
    </div>
  )
}
