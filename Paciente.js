function Paciente (nombre, rut) {
    this.nombre = nombre;
    this.rut = rut;
    this.edad = "";
    this.diagnostico = ""
    
    this.getNombre = () => {
        return this.nombreS
    };

    this.getRut = () => {
        return this.rut;
    };

    this.getDiagnostico = () => {
       return this.diagnostico;
    }

    this.getEdad = () => {
        return this.edad;
    }

    this.setDiagnostico =(diagnostico)=> {
        this.diagnostico = diagnostico;
    }

    this.setEdad =(edad)=> {
        this.edad = edad;
    }

};
