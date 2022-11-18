// React router
import { BrowserRouter } from "react-router-dom"
// components
import { ThemeProvider } from "styled-components"
import { AppRoutes } from "./app/routes/AppRoutes"
// Styles
import { GlobalStyles } from "./app/styled/global"
import theme from "./app/styled/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
