import{ useState } from "react";
import { useAsociados } from "../hooks/useAsociados";


export function AsociadosList(){
    const { asociados, loading, error}=useAsociados();
    const[filtro,setfiltro] =useState("Todos");
    if(loading) return <p> cargando datos...</p>;
    if(error) return <p>Error:{error}</p>;

    const estados=[
        "Todos",
        "Prospecto",
        "Expendiente en Construccion",
        "Pendiente Juridico",
        "Pendiente Cierre de Credito",

    ];

    const filtrados= filtro==="Todos" ? asociados: asociados.filter((a)=>a.estado_pipeline===filtro);

    return(
        <div>
        <h2>Lista de Asociados</h2>

        <label> filtrar por estado: </label>
        <select value={filtro} onChange={(e)=>setfiltro(e.target.value)}>{estados.map((estado)=>
            (<option key={estado} value={estado}>{estado}</option>))}
        </select>

        <table border={1} cellPadding={8} style={{marginTop: "20px"}}>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Identificacion</th>
                <th>Estado Pipeline</th>
            
                </tr>
            
            </thead>

            <tbody>
            {filtrados.map((as, index)=>(
                <tr key={index}>
                <td>{as.nombre}</td>
                <td>{as.identificacion}</td>
                <td>{as.estado_pipeline}</td>
            </tr>
            ))}
            
            </tbody>

        </table>

        </div>
    )


};