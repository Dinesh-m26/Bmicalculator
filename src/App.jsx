import { useState } from 'react';
import Icon from "./assets/bmi.png"




export default function App() {

  const [warning, setWarning] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState("")
  const [status, setStatus] = useState("")

  function calculateBmi() {
    if (height && weight) {
      const heightinmeter = height / 100;
      const bmivalue = weight / (heightinmeter * heightinmeter);
      setBmi(bmivalue.toFixed(2));
      console.log(setBmi)
      if (bmivalue < 18.5) {
        setStatus("Underweight");
      } else if (bmivalue >= 18.5 && bmivalue < 24.9) {
        setStatus("Normal Weight")
      } else if (bmivalue >= 24.9 && bmivalue < 29.9) {
        setStatus("Over Weight")
      } else {
        setStatus("Obese")
      }
    } else {
      setBmi(null)
      setStatus("")
      setWarning("Please Enter Valid Numerical Value")
    }
  }
  function clearAll() {
    setHeight("")
    setWeight("")
    setBmi(null)
    setStatus("")
    setWarning("")

  }


  return (
    <>
      <div className=" flex justify-center items-center my-auto h-screen ">
        <div>
          <div className="bg-white rounded-lg p-5 flex">
            <div className="w-1/2">
              <img src={Icon} className="hidden md:block h-[350px] w-full" alt="" />
            </div>
            <div className="">
              <strong className="text-xl">BMI CALCULATOR</strong>
              <p className='text-[#cf3a3a]'>{warning}</p>
              <div className="text-lg">
                <label className="flex flex-col mt-2 " htmlFor="height">
                  Height (cm)
                  <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter height" className="mt-2 p-1 focus:outline-[#FCDC94] " />
                </label>
              </div>
              <div className="text-lg">
                <label className="flex flex-col mt-2 " htmlFor="height">
                  Weight (kg)
                  <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter weight" className="mt-2 p-1 focus:outline-[#FCDC94]  " />
                </label>
              </div>
              <div className="mt-3">
                <button onClick={calculateBmi} className="ml-1 p-1 px-4 bg-[#78ABA8] rounded ">Calculate</button>
                <button onClick={clearAll} className="ml-1 p-1 px-4 bg-[#D24545] rounded ">Clear</button>
              </div >
              {bmi !== null && status !== "" && (
                <div className="border-2 border-[#78ABA8] p-2 gap-y-2 mt-3 rounded">
                  <h3><span className="font-bold">Your BMI is : </span> {bmi}</h3>
                  <p><span className="font-bold">Status :</span> {status} </p>
                </div>
              )}
            </div>
          </div>
          <p className='text-center mt-5'>Developed by <span><a href="https://mdinesh.netlify.app/" target='_blank' className='text-[#126782]'>Dinesh</a></span></p>
        </div>
      </div>
    </>
  )
}