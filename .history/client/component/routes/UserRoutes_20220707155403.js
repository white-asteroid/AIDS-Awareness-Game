import { useEffect,useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../../context";


const UserRoute = ( {children}) => {
    const [ok,setOk] = useState(false);
    const router = useRouter();

    useEffect(()=>{
        getCurrentUser()
    },[]);
    const getCurrentUser= async () =>{
        try{
            const {data } = await axios.get(
                `$(process.env.NEXT_PUBLIC_API)/current-user`
            );
            if(data.ok) setOk(true);
        }
        catch(err)
        {
            router.push("/login");
        }
    };
    return !ok ? (
    <SyncOutlined 
        spin 
        className="d-flex justify-content-center display-1 text-primary p-5">

    </SyncOutlined>) : 
    (
        {children}
    );
};
export default UserRoute;