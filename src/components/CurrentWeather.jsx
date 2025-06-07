import day1 from '../images/icons/01d.png'
const CurrentWeather = () => {
  return (
   <div className="pl-[20px] pr-[20px] pb-[20px] w-[300px] border border-6 border-black shadow-xl bg-gray-800 ml-auto mr-auto mt-[15px]  ">
        <div className="flex justify-between items-center " >
          <div>
            <p className="text-white font-bold text-[18px]">Lagos</p>
            <p className="font-medium text-[14px] mt-[-9px] text-white "> Sunny </p>
          </div>
            <img src={day1} alt="weather icon" width={100} />
        </div>
        <div className='bottom '>
          <p className='temperature '> 18°C </p>
        <div className='details'>
           <div className='parameter-row '>
            <span className='parameter-label'>Details </span>
           </div>
             <div className='parameter-row'>
            <span className='parameter-label'>Feels like</span>
            <span className='parameter-value'> 22°C</span>
          </div>

           <div className='parameter-row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>2 m/s</span>
          </div>

           <div className='parameter-row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>15%</span>
          </div>

          <div className='parameter-row'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>15 hPa</span>
          </div>
        </div>

        </div>
   </div>
  )
}

export default CurrentWeather