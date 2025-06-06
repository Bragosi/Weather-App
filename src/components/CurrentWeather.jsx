import day1 from '../images/icons/01d.png'
const CurrentWeather = () => {
  return (
   <div className="pl-[20px] pr-[20px] pb-[20px] w-[300px] border border-6 border-black shadow-xl bg-gray-800 ml-auto mr-auto mt-[15px]  ">
        <div className="top flex justify-between items-center " >
          <div>
            <p className="text-white font-bold text-[18px] m-0">Lagos</p>
            <p className="font-medium text-[14px] mt-0 text-white "> Sunny </p>
          </div>
            <img src={day1} alt="weather icon" width={100} />
        </div>
   </div>
  )
}

export default CurrentWeather