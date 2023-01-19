const AnotherComponent = () => {

    const handleClick = ()=> {
        alert("Hola!");
    }

    return (
        <div>
            <p>Segundo componente</p>
            <button onClick={handleClick}>Lanzar evento</button>
            <button onClick={()=>alert("Hola 2!")}>Lanzar evento</button>
        </div>
    )
}

export default AnotherComponent;