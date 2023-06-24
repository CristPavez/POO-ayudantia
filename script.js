class Persona {
    constructor(id, Nombre, Email) {
        this.id = id;
        this.Nombre = Nombre;
        this.Email = Email;
    }

    // saludar(){
    //     return "Hola Mi nombre es: " + this.Nombre + "Mi profesion es: "
    // }
}

class Trabajador extends Persona {
    constructor(id, Nombre, Email, profesion) {
        super(id, Nombre, Email)
        this.profesion = profesion
    }

    decirProfesion() {
        return "Hola Mi nombre es: " + this.Nombre + "Mi profesion es: " + this.profesion
    }
}

const url = "https://randomuser.me/api/"

const callApi = (url) => {
    return axios.get(url)
        .then(res => {
            return res.data.results[0]
        })
        .catch(error => {
            console.log(error);
        })
}

const getData = async (url) => {
    const data = await callApi(url);
    const id = data.name.first + 20
    const firstname = data.name.first
    const email = data.email
    const person01 = new Persona(id, firstname, email)
    const person01_emp = new Trabajador(id, firstname, email, "Doctor@")
    console.log(person01_emp.decirProfesion());

}


getData(url)