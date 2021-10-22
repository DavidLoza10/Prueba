function suma(){
    var num1=2;
    var num2=4;
    var suma=num1+num2;
    alert('Resultado: '+ suma);

    console.log(suma);
}
class persona{
    alto; ancho;
    constructor(alto,ancho){
        this.alto= alto;
        this.ancho= ancho;
    }

    Area(){
        var area = this.alto * this.ancho;
        console.log(area);
        alert(area);
    }
}

function ress(){
    var rec=new persona(12,4);

    rec.Area();
}

class perro{
    raza; edad;
    constructor(raza,edad){
        this.raza=raza;
        this.edad=edad;
    }

    ladrar(){
        alert('EL perro esta ladrando');
    }

    morder(){
        alert('EL perro esta modiendo');
    }
}

function accionPerro(){
    var perr= new perro('Aleman','2años');
    perr.morder();
    perr.ladrar();
}



