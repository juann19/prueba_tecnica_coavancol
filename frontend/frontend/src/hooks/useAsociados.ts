import { useEffect, useState }  from "react";

export const useAsociados = () => {
const[asociados, setAsociados]=useState<any[]>([]);
const [loading, setLoading]=useState(true);
const [error, setError]= useState<string | null>(null);

useEffect(()=> {}, []);

return{asociados, loading, error};
};