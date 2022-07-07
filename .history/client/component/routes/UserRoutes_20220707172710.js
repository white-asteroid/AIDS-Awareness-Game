import { useEffect,useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../../context";

const UserRoute = ( {children}) => {
    const [ok,setOk] = useState(false);
    const router = useRouter();
    const [state] = useContext(UserContext);

    useEffect(()=>{
       if (state && state.token) getCurrentUser();
    //    else router.push("/login");
    },[state && state.token]);

    const getCurrentUser = async () =>{
        
            const {data} = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/current-user`,{
                    headers:{
                        Authorization: `Bearer ${state.token}`,
                    }
                }
            ).then((res)=>{
                if(data.ok) setOk(true);
            })
            
            
        
    };
    //   process.browser && state===null && 
    
    return !ok ? (
    <SyncOutlined 
        spin 
        className="d-flex justify-content-center display-1 text-primary p-5">

    </SyncOutlined>) : 
    (
        <>{children}</>
    );
  
};
export default UserRoute;