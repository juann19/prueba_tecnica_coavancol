//BACKEND

//Estados que son validos y permitidos en prueba

const Estados_Validos=[

    "Prospecto",
    "Expediente en Construccion",
    "Pendiente Juridico",
    "Pendiente Cierre de Credito",
    "Pendiente Firma y Litivo",
    "Pendiente Revision Abogado",
    "Cartera Activa",
    "Desembolsado/Finalizado",
    
];

interface Payload{
    asociadoID:string;
    nuevoEstado: string;
    aporte_pagado?:boolean;

}

//funcion de simulacion de bd

export function updateEsstadoPipeline(body:Payload){

    const{asociadoId,nuevoEstado,aporte_pagado}=body;

    if(!asociadoId || !nuevoEstado){
        return{
            ok:false, message:"Campos Requeridos Faltantes",
        };
    }
    //validar estado perimitido
    if(!Estados_Validos.includes(nuevoEstado)){
        return{
            ok:false,
            message:"Estado no permitido",
        };
        }




    }
}

