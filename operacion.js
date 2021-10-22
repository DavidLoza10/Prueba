function suma() {
    var num1 = 2;
    var num2 = 4;
    var suma = num1 + num2;
    alert('Resultado: ' + suma);

    console.log(suma);
}

class persona {
    nombre;
    apellido;

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saltar() {
        alert('La persona esta saltando');
    }

    comer() {
        alert('La persona esta comiendo');
    }
}

function ress() {
    var rec = new cuadro(12, 4);

    function acciones() {
        var per = new persona('David', 'Loza');

        per.comer();
        per.saltar();
    }
}

class lapiz {
    tamano;
    marca;

    constructor(tamano, marca) {
        this.marca = marca;
        this.tamano = tamano;
    }

    color() {
        alert('EL lapiz es de color rojo')
    }

    cantidad() {
        alert('20 Lapices')
    }
}

function lapices() {
    var lap = new lapiz('grande', 'rotring');
    lap.cantidad();
    lap.color();
}
