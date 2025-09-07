import Header from "./components/Header"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button"
import {ways} from './data'

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <section>
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
            <WayToTeach {...ways[1]} />
          </ul>
        </section>
        <selection>
          <h3> Почему именно ReNothingg </h3>

          {/* <Button text='Button 1' />
          <Button text='Button 2' /> */}

          <Button>
            <span>
              <h3>
                Text 1
              </h3>
            </span>
          </Button>

          <Button>Text 2</Button>
        </selection>
      </main>
    </div>
  )
}