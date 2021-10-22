function suma(){
    var num1=2;
    var num2=4;
    var suma=num1+num2;
    alert('Resultado: '+ suma);

    console.log(suma);
}


class cuadro{
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
    var rec=new cuadro(12,4);

    rec.Area();
}

class lapiz{
    tamano; marca;
    constructor(tamano,marca){
        this.marca=marca;
        this.tamano=tamano;
    }

    color(){
        alert('EL lapiz es de color rojo')
    }

    cantidad(){
        alert('20 Lapices')
    }
}

function lapices(){
    var lap=new lapiz('grande','rotring');
    lap.cantidad();
    lap.color();
}