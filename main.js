

const consultorio = new Consultorio("Valpo");
    
pacientes.forEach(element => {
    
let pacientes = new Paciente(element.nombre, element.rut);

// Setear 
if(element.edad){
    pacientes.setEdad(element.edad);
};

if(element.diagnostico){
    pacientes.setDiagnostico(element.diagnostico);
};

consultorio.setPacientes(pacientes);

});

console.log(consultorio.pacientes);

// Ver pacientes del consultorio
consultorio.pacientes.forEach( element => {
console.log(`Nombre: ${element.nombre} Rut:${element.rut} Edad: ${element.edad} Diagnóstico: ${element.diagnostico}` )
});

// Buscar paciente 
let nombrePaciente = "Armando Lima";
   if(consultorio.encontrarPaciente(nombrePaciente)){
    let paciente = consultorio.encontrarPaciente(nombrePaciente);
    console.log(`Paciente encontrado: Nombre: ${paciente.nombre} rut: ${paciente.rut}`);
   } else {
    console.log("Paciente no existe");
   };

  



