import { useEffect, useState }  from "react";

export interface Asociado{
    id: String;
    nombre:String;
    estado_pipeline:String;
    aporte_pagado:boolean;

}

export const useAsociados = () => {
    const[asociados, setAsociados]=useState<Asociado[]>([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]= useState<string | null>(null);

useEffect(()=> {

    try{
        setLoading(true);
        const res=await fetch("https://raw.githubusercontent.com/managerrojo/COAVANCOL-Prueba-T-cnica-/refs/heads/main/IndexAsociados");
        if(!res.ok) throw new Error("Error al cargar datos");
        const data= await res.json();
        //se ordenan de forma alfabetica
        const sorted= data.sort((a:any, b:any) =>a.nombre.localeCompare(b.nombre));
        setAsociados(sorted);

    }catch(err:any){
        setError(err.message);
            
        } finally{
            setLoading(false);
        }
    };

    fetchData();
}, [];
return{asociados, loading, error};
