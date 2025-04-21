import React, { useEffect, useRef, useState, forwardRef } from "react";
import Project from "../Project";
import Button from "./Button";


const Otp = ({number }) => {
  // const ref1 = useRef();
  // const ref2 = useRef();
  // const ref3 = useRef()
  // const ref4 = useRef()
  // const ref5 = useRef()
  // const ref6 = useRef()

  const buttonRef = useRef(null)
  const [disabled, setDisabled] = useState(true)
  const inputs = useRef(Array(number).fill(0));
  const length = 6;

  const handleChange = (index, e) => {
   //disabled == true
    if (e.target.value && index < length - 1) {
      inputs.current[index + 1].focus();

    }else if(index === length - 1 && e.target.value){
        buttonRef.current?.focus() 
        setDisabled(false)
    }
  };
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      e.target.value = "";

      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  return (
    <>
    <div className="flex justify-center items-center ">
      {inputs.current.map((item, index) => (
        
        <SubOtpBox
          key={index} key2={index}
          ref={(el) => (inputs.current[index] = el)} 
          handleChange={(e) => handleChange(index, e)} 
          handleKeyDown={(e) => handleKeyDown(index, e)}
        />
        
        
    
      ))}
      

      {/* <SubOtpBox onDone={()=>{
            ref2.focus()

        }}/>
        <SubOtpBox onDone={()=>{
            ref2.focus()

        }}/>
        <SubOtpBox onDone={()=>{
            ref2.focus()

        }}/>
        <SubOtpBox onDone={()=>{
            ref2.focus()

        }}/>
        <SubOtpBox onDone={()=>{
            ref2.focus()

        }}/>
        <SubOtpBox onDone={()=>{
            ref2.focus()

        }}/> */}
    </div>
    <Button ref={buttonRef} disabled={disabled} name="verify"/>
     
   </>
  );
};

const SubOtpBox = forwardRef(({ handleChange, handleKeyDown, key2 }, ref) => {
    const [inputBoxValue, setInputBoxValue] = useState("");
  return (
    <>
    <div>
       
      <input
        value={inputBoxValue}
        ref={ref}
        onChange={(e) => {
            const val = e.target.value
            console.log(val)
            console.log(key2)
            if(key2  == 5){

                let newVal = val%10 
                setInputBoxValue(newVal);
                handleChange(e);

            }
            else if (val == "1" || val == "2" || val == "3" ||
                val == "4" || val == "5" || val == "6" ||
                val == "7" || val == "8" || val == "9"

            ){
                setInputBoxValue(val);
                handleChange(e, key2);
            }else{
                setInputBoxValue("")
            }
          
        }}
        onKeyDown={(e) => handleKeyDown(e, key2)}
        type="text"
        className="w-[40px] h-[50px] m-1 outline-none px-4 text-white rounded-md bg-blue-500"
      />
    </div>
    
    </>
  );
})

export default Otp;
