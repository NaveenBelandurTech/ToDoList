
import ReactDOM from 'react-dom/client'
import Body from './Componet/Body'

const App = () =>{
    return (
        <div>
           <Body/>
        </div>
    )
}



const Container = ReactDOM.createRoot(document.getElementById('root'))
Container.render(<App/>)

