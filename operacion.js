function suma(){
    var num1=2;
    var num2=4;
    var suma=num1+num2;
    alert('Resultado: '+ suma);

    console.log(suma);
}
class persona{
    nombre; apellido;
    constructor(nombre,apellido){
        this.nombre= nombre;
        this.apellido= apellido;
    }

    saltar(){
        alert('La persona esta saltando');
    }
    comer(){
        alert('La persona esta comiendo');
    }
}

function acciones(){
    var per=new persona('David','Loza');
    per.comer();
    per.saltar();
}