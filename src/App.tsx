// import './App.css'
import Banner from "./components/Banner"
import { DataTable } from "./components/Table"

function App() {
  console.log(import.meta.env.VITE_SOME_KEY)

  return (
    <>
     <h1>Lets go</h1>
     <Banner />
     <DataTable />
    </>
  )
}

export default App
