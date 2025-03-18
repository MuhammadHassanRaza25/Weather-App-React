import './App.css'
import Header from './components/Header'
import WeatherForecast from './components/WeatherForecast'
import WeatherBanner from './components/WeatherBanner'
import WeatherDetails from './components/WeatherDetails'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <WeatherBanner/>
      <WeatherForecast/>
      <WeatherDetails/>
      <Footer/>
    </>
  )
}

export default App
