//React router
import { BrowserRouter } from "react-router-dom"
// components
import { AppRoutes } from "./routes/AppRoutes"
// Styles
import { GlobalStyles } from "./app/shared/styled/global"
import "./App.css"

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
