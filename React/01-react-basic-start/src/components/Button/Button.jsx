import './Button.css'

export default function Button({ children, onClick, isActive }) {
    // function handleClick() {
    //     console.log('cliked clicked')
    // }
    // const handleMouseEnter = () => console.log(1);

    // return <button className='button' onClick={handleClick} onMouseEnter={handleMouseEnter}>{children}</button>
    // return <button
    //     className='button'
    //     onClick={handleClick}
    //     onDoubleClick={function () {
    //         console.log('Doube')
    //     }}>
    //     {children}
    // </button>

    let classes = 'button'
    if (isActive) classes += ' active'

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
}