function InputsLog({text, type, img}) {

  return (
    <>
    <div className="relative min-w-[110px] m-5">
        <img src={img} alt="" className="w-7 h-7 absolute right-7 top-1/2 -translate-y-1/2"/>
        <input type={type} placeholder={text} className="rounded-full min-h-13 min-w-110 pl-5 my-3 border border-blue-500"/>
    </div>
    </>
  )
}

export default InputsLog