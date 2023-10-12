const nombre=document.getElementById("nombre");
const apellido=document.getElementById("apellido");
const cedula=document.getElementById("cedula");
const consultorio=document.getElementById("consultorio");
const telefono=document.getElementById("telefono");
const correo=document.getElementById("correo");
const especialidad=document.getElementById("especialidad");
const edad=document.getElementById("edad")
const formMedicos=document.getElementById("text")
const formPacientes=document.getElementById("form-Pacientes")

class usuario{
    constructor(nombre,apellido,cedula,consultorio,correo,especialidad,telefono){
        this.nombre=nombre
        this.apellido=apellido
        this.cedula=cedula
        this.telefono=telefono
        this.consultorio=consultorio
        this.correo=correo
        this.especialidad=especialidad
    }
}
const mostrarMedicos=function(){
    let medicos=[]
    let cuerpoTabla=document.getElementById("tablaMedica")
    let localmedicos=localStorage.getItem("medicos")
    if(localmedicos){
        medicos=JSON.parse(localmedicos)
    }
    medicos.forEach(medicos=> {
        let fila=document.createElement("tr")
        let celdaNombres=fila.insertCell()
        let celdaApellido=fila.insertCell()
        let celdaCedula=fila.insertCell()
        let celdaConsultorio=fila.insertCell()
        let celdaTelefono=fila.insertCell()
        let celdaCorreo=fila.insertCell()
        let celdaEspecialidad=fila.insertCell()
        let celdaPaciente=fila.insertCell()

        celdaNombres.textContent=medicos.nombre
        celdaApellido.textContent=medicos.apellido
        celdaCedula.textContent=medicos.cedula
        celdaConsultorio.textContent=medicos.consultorio
        celdaTelefono.textContent=medicos.telefono
        celdaCorreo.textContent=medicos.correo
        celdaEspecialidad.textContent=medicos.especialidad
        celdaPaciente.textContent="sin asignar"
        
        cuerpoTabla.appendChild(fila)
    })
}
if(window.location.href.endsWith("tablamedico.html")){
    mostrarMedicos()
}
if(window.location.href.endsWith("registroMedicos.html")){
    formMedicos.addEventListener("submit",function(event){
        event.preventDefault()
        let valorNombres=nombre.value
        let valorApellido=apellido.value
        let valorCedula=cedula.value
        let valorCorreo=correo.value
        let valorConsultorio=consultorio.value
        let valorEspecialidad=especialidad.value
        let valorTelefono=telefono.value
    
        const medico=new usuario(valorNombres,valorApellido,valorCedula,valorConsultorio,valorCorreo,valorEspecialidad,valorTelefono)
        let medicos=[]
        
        let localmedicos=localStorage.getItem("medicos")
        if(localmedicos){
            medicos=JSON.parse(localmedicos)
        }
        medicos.push(medico)
        localStorage.setItem("medicos",JSON.stringify(medicos))
        alert("medico registrado");
    })   
}


