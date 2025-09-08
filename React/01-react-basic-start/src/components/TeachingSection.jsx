import { ways } from "../data"
import WayToTeach from "./WayToTeach"


export default function TeachingSection() {
    return (
        <section>
          <h1>Hello React!</h1>
          <p>Wow! Absolutely! Я хочу есть...</p>

          <ul>
            {ways.map((way) =>
            (
              <WayToTeach key={way.title} {...way}/>
            ))}
          </ul>
        </section>
    )
}