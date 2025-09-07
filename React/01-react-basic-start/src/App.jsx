import Header from "./components/Header"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button"
import { useState } from "react"
import {ways, differences} from './data'

export default function App() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  // let tabContent = null
  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>
  // } else {
  //   tabContent = <p>Нажмите на кнопу что бы увидеть информацию</p>
  // }

  return (
    <div>
      <Header />

      <main>
        <section>
          <h1>Hello React!</h1>
          <p>Wow! Absolutely! Я хочу есть...</p>

          <ul>
            {ways.map((way) =>
            (
              <WayToTeach {...way}/>
            ))}

            {/* <WayToTeach
              title='Mango'
              description='222'
            />
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} /> */}
          </ul>
        </section>
        <selection>
          <h3> Почему именно ReNothingg </h3>

          {/* <Button text='Button 1' />
          <Button text='Button 2' /> */}

{/*
          <Button>
            <span>
              <h3>
                Text 1
              </h3>
            </span>
          </Button> */}
          {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Нажмите на кнопу что бы увидеть информацию</p>
          )} */}

          {/* {!contentType ? <p>Нажмите на кнопу что бы увидеть информацию</p> : null}
          {contentType ? <p>{differences[contentType]}</p> : null} */}

          <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>way</Button>
          <Button isActive={contentType === 'easy'}  onClick={() => handleClick('easy')}>easy</Button>
          <Button isActive={contentType === 'program'}  onClick={() => handleClick('program')}>program</Button>


          {!contentType && <p>Нажмите на кнопу что бы увидеть информацию</p>}
          {contentType && <p>{differences[contentType]}</p>}

          {/* {tabContent} */}
        </selection>
      </main>
    </div>
  )
}