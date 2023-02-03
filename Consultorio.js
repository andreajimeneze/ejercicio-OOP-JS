function Consultorio(nombre){
    this.nombre = nombre;
    this.pacientes = [];

    this.getNombre = () => {
        return this.nombre
    };

    this.getPacientes = () => {
         return this.pacientes;
    };

    this.setPacientes = (paciente) => {
        this.pacientes.push(paciente);
    }

    this.encontrarPaciente = (nombrePaciente) => {
        if(this.pacientes.find(element => element.nombre == nombrePaciente)){
           return this.pacientes.find(element => element.nombre == nombrePaciente);
        } else {
            return false;
        }
    } 
};