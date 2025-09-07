import logo from '/logo-name.svg'

// С БОЛЬШОЙ БУКВЫ!
export default function Header() {
    const now = new Date

    return (
        <header>
            {/* <h3>ReNothing</h3> */}
            <img src={logo} alt='Result' />
            <span>Время сейчас: {now.toLocaleTimeString()}</span>
      </header>
    )
}