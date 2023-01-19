import AnotherComponent from "./AnotherComponent"

function FirstComponent(){
    return (
        <div className="firstcomponent">
            {/* Así se agrega comentario que no
            se muestra en el html */}
            <p>Primer Componente</p>
      <AnotherComponent/>
        </div>
    )
}
export default FirstComponent