import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";

export default function App() {
  const handleOnsearchChange = (searchData)=>{
    console.log(searchData)
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnsearchChange}/>
      <CurrentWeather/>
    </div>
  )
}