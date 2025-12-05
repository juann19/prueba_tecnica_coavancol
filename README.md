En este repositorio 
se llevara a cabo el desarrollo de la prueba tecnica
 para el cargo Desarrollador Fullstack Junior(React).
El objetivo es implementar un modulo en React, que consuma un JSON publico.
este JSON contiene la informacion de asociados, aplicando filtros, ordenamiento y manejo de estados carga/error.

Tecnologias Utilizadass:

-React+TypeScript
-Vite
-Fetch API

Muchas gracias por su atencion y la oportunidad.

En el desarrollo se alcanzo a completar el Frontend, dejando
-un Proyecto creado con vite+react+typescript
Componente. -AsociadosList implementado.
-Hook personalizado useAsociados creado e intedrado
-Consumo del JSON publco y renderizado en tabla
-Ordenamiento alfabetico por nombre
-filtro por estados en <select>
-buen manejo del loading y del error
-diseño simple y limpio sin mas dependencias de las pedidas.
Tambien se alcanzo hacer una parte de la tarea 2:
-declaracion del Payload
-Lista de estados validos
-Validaciones minimas con los campos requeridos y el Estado permitido
-Estructura base para el handler para seguir extendiendo.

Por limitaciones de tiempo no alcance a completar
-Validacion de transiciones logicas
-Registro de ultima_actualizacion.
-Validacion opcional: impedir avanzar a "Pendiente Juridico" si aporte_pagado = false
-Simulacion de actualizacion

Como habria terminato la Tarea 2:

De haber contado con mas tiempo, habria finalizado la funcion asi:
1: validar transicion logica con un flujoPermitido.

const flujoPermitido = {
    "Prospecto": ["Expediente en Construccion"],
    "Expediente en Construccion": ["Pendiente Juridico"],
    "Pendiente Juridico": ["Pendiente Cierre de Credito"],
    "Pendiente Firma y Litivo":["Pendiente Revision Abogado"],
    "Pendiente Revision Abogado":["Cartera Activa"],
    "Cartera Activa":["Desembolsado/Finalizado"],
    "Desembolsado/Finalizado":[]
};

la funcion de validacion del flujo validarflujo, quedaria de la siguiente manera:

function validarflujo(estadoActual:string, nuevoEstado:)boolean{
    const permitidos=flujoPermitido[estadoActual]||[];
    return permitidos.includes(nuevoEstado);
}

se integra esto en el backend updateEstadoPipeline.

y pues el broque que le faltava para validarlo

if(!validarFlujo(estadoactual, nuevoEstado)){
    return{
        ok:false,
        message: 'Transicion no permitida:${estadoActual}'
    };
}
