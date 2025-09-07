import Header from "./components/Header"
import WayToTeach from "./components/WayToTeach"
import {ways} from './data'

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <h1>Hello React!</h1>
        <p>Wow! Absolutely! Я хочу есть...</p>

        <ul>
          <WayToTeach
            title='Mango'
            description='222'
          />

          <WayToTeach
            title={ways[0].title}
            description={ways[0].description}
          />

          <WayToTeach
            title={ways[1].title}
            description={ways[1].description}
          />

          <WayToTeach {...ways[1]} />
        </ul>
      </main>
    </div>
  )
}