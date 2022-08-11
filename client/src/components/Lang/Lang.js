import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const Lang=()=>{
  const [lang,setLang]=useState(localStorage.getItem('lang')||"eng");
  const [cookies,setCookies]=useCookies();
return(
    <select defaultValue={localStorage.getItem('lang')} onChange={(e)=>{
        switch(e.target.value){
            case "eng":
              //  window.location.reload(false)
               // document.body.style.direction='ltr'
                localStorage.setItem('lang',"eng");
                break;
            case "ar":
                //window.location.reload(false)
              //  document.body.style.direction='rtl'
                localStorage.setItem('lang',"ar");
                break;
            case "heb":
                //window.location.reload(false)
               // document.body.style.direction='rtl'
                localStorage.setItem('lang',"heb");
                break;         
        }
        window.location.reload(false)
     
    }


} 
    style={{
        margin:' 10px ',
      //  display:'flex'
    }}>
        <option value="eng">English</option>
        <option value="ar">العربيه</option>
        <option value="heb">עברית</option>

    </select>
)
}

export default Lang