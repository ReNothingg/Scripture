import Button from "./Button/Button"
import { useState } from "react"
import { differences } from '../data'


export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null)

    function handleClick(type) {
        setContentType(type)
    }

    return (
        <section>
          <h3> Почему именно ReNothingg </h3>

          <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>way</Button>
          <Button isActive={contentType === 'easy'}  onClick={() => handleClick('easy')}>easy</Button>
          <Button isActive={contentType === 'program'}  onClick={() => handleClick('program')}>program</Button>


          {!contentType && <p>Нажмите на кнопу что бы увидеть информацию</p>}
          {contentType && <p>{differences[contentType]}</p>}
        </section>
    )
}