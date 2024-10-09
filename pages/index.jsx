import styles from '../styles/Home.module.css'

import { useState } from 'react'
import { deleteGame, fetchGames } from '@/utils/api'
import Link from 'next/link'

function Home({ endpointGames = [] }) {
    const [games, setGames] = useState(endpointGames)

    const handleBorrar = (e) => {
        const id = e.target.parentElement.parentElement.getAttribute('game-id')
        console.log(`Borrar el juego con ID: ${id}`)

        deleteGame(id)
        setGames(games.filter(game => game.id !== id))
    }

    return (
    <div className={styles.container}>
        <h1>COI Website</h1>

        <div className={styles.options}>
            <button>Agregar juego</button>
        </div>

        {games.length === 0 && <p>No hay juegos disponibles</p>}

        <div className={styles.showcase}>
            {games.map(game => (
                <div key={game.id} game-id={game.id} className={styles.game}>
                    <h2>{game.title}</h2>
                    <div className={styles.game__options}>
                        <button><Link href={"/games/" + game.id}>Detalles</Link></button>
                        <button onClick={handleBorrar}>Borrar</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
    const games = await fetchGames().catch((err) => { return [] })

    return { props: { endpointGames: (games != undefined ? games : []) } }
}