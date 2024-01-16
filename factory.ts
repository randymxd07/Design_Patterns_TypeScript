/*===========================================================================================================

Factory:

Propósito: Definir una interfaz para crear un objeto, pero dejar que las subclases alteren el tipo de objetos que se crearán.

Implementación: Se crea una interfaz común para la creación de objetos, y las clases concretas implementan esta interfaz para crear objetos específicos.

Ejemplo de uso: Útil cuando una clase no puede anticipar la clase de objetos que debe crear.

===========================================================================================================*/









/* Vamos a crear un ejemplo simple de un patrón de diseño Factory en TypeScript. Imaginemos que tenemos un sistema de creación de vehículos, y queremos usar el patrón Factory para crear instancias de diferentes tipos de vehículos (coche, bicicleta, motocicleta, etc.). */

// Interfaz que define la estructura común para todos los vehículos
interface Vehicle {
    start(): void;
    stop(): void;
}

// Implementación concreta de un tipo de vehículo: Coche
class Car implements Vehicle {
    start(): void {
        console.log("Coche arrancado");
    }

    stop(): void {
        console.log("Coche detenido");
    }
}

// Implementación concreta de otro tipo de vehículo: Bicicleta
class Bicycle implements Vehicle {
    start(): void {
        console.log("Bicicleta en marcha");
    }

    stop(): void {
        console.log("Bicicleta detenida");
    }
}

// Factoría que crea instancias de diferentes tipos de vehículos
class VehicleFactory {
    createVehicle(type: string): Vehicle {
        switch (type.toLowerCase()) {
            case "car":
                return new Car();
            case "bicycle":
                return new Bicycle();
            default:
                throw new Error("Tipo de vehículo desconocido");
        }
    }
}

// Uso del patrón Factory
const factory = new VehicleFactory();

// Creación de un coche
const car = factory.createVehicle("car");
car.start();
car.stop();

// Creación de una bicicleta
const bicycle = factory.createVehicle("bicycle");
bicycle.start();
bicycle.stop();



/* En este ejemplo, la interfaz Vehicle define los métodos comunes para todos los vehículos, y las clases Car y Bicycle implementan esta interfaz. La clase VehicleFactory actúa como la factoría que crea instancias de diferentes tipos de vehículos según el tipo especificado. */

/* Al crear instancias de vehículos a través de la factoría, podemos centralizar la lógica de creación y hacer que el código sea más modular y fácil de mantener. Además, si en el futuro queremos agregar nuevos tipos de vehículos, simplemente agregamos una nueva clase e actualizamos la factoría sin tener que cambiar el código que utiliza la factoría. */









/* Entonces deja ver si lo tengo claro, el patron de diseñ factory es para crear instancias dependiendo de lo que elija el usuario? */

/* Sí, has captado la esencia del patrón de diseño Factory. El patrón Factory se utiliza para encapsular la lógica de creación de objetos y proporcionar una interfaz común para crear diferentes tipos de objetos. En tu ejemplo, la factoría (VehicleFactory) tiene un método (createVehicle) que toma un parámetro (en este caso, el tipo de vehículo) y devuelve una instancia del tipo de objeto correspondiente. */

/* Este enfoque es beneficioso cuando hay múltiples implementaciones de una interfaz o clase base, y la elección de cuál instancia crear depende de algún criterio, como la entrada del usuario, configuración o condiciones en tiempo de ejecución. La factoría maneja los detalles de cómo crear y devolver la instancia correcta, permitiendo que el código que utiliza la factoría se mantenga desacoplado de los detalles de implementación específicos de cada clase. */

/* En resumen, el patrón Factory es una forma de centralizar la creación de objetos y proporcionar una interfaz unificada para crear instancias de diferentes tipos de objetos, según las necesidades del sistema. */