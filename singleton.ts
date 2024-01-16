/*===========================================================================================================

Singleton:

Propósito: Garantizar que una clase tenga una única instancia y proporcionar un punto de acceso global a esa instancia.

Implementación: Se logra mediante la creación de una instancia única y la restricción del acceso al constructor, a menudo utilizando un método estático para obtener la instancia única.

Ejemplo de uso: Se utiliza cuando se necesita controlar estrictamente que haya una única instancia de una clase, como en un objeto de configuración o un administrador de conexiones. 

===========================================================================================================*/









/* por ejemplo el singleton podria ser un archivo de configuracion de base de datos? y como seria algo asi con nest.js por ejemplo? */

/* Sí, un archivo de configuración de base de datos podría ser un buen ejemplo de uso del patrón Singleton. Al utilizar un Singleton para representar el objeto de configuración de la base de datos, garantizas que solo haya una instancia de esa configuración en toda tu aplicación, lo que puede ser útil para evitar conflictos y garantizar la consistencia en la configuración de la base de datos. */

/* En el contexto de Nest.js, puedes implementar un Singleton para el objeto de configuración de la base de datos de la siguiente manera: */

/* Supongamos que tienes un archivo database.config.ts que contiene la configuración de tu base de datos, y quieres que esta configuración sea un Singleton: */

// database.config.ts

export class DatabaseConfig {

    private static instance: DatabaseConfig;
    private connectionString: string;
  
    private constructor() {
      // Configuración inicial
      this.connectionString = "your_default_connection_string";
    }
  
    public static getInstance(): DatabaseConfig {
      if (!DatabaseConfig.instance) {
        DatabaseConfig.instance = new DatabaseConfig();
      }
      return DatabaseConfig.instance;
    }
  
    public getConnectionString(): string {
      return this.connectionString;
    }
  
    public setConnectionString(newConnectionString: string): void {
      this.connectionString = newConnectionString;
    }

}


// app.module.ts

import { Module } from '@nestjs/common';
import { DatabaseConfig } from './path-to-your-database-config';

@Module({
  providers: [
    {
      provide: DatabaseConfig,
      useValue: DatabaseConfig.getInstance(),
    },
  ],
})
export class AppModule {}

/* Con esta configuración, puedes inyectar DatabaseConfig en otros módulos o componentes de tu aplicación Nest.js, y siempre obtendrás la misma instancia de configuración de la base de datos en toda la aplicación. Esto puede ser especialmente útil para garantizar que todos los componentes compartan la misma configuración de la base de datos de manera coherente. */






/* Osea el singleton es basicamente crear una clase que haga algo en especifico en este caso manejar la conexion de una base de datos y asi no tengo que crear multiples conexiones cada vez que yo vaya a utilizarlo? */

/* Sí, exactamente. El patrón Singleton se utiliza para garantizar que una clase tenga una única instancia y proporcionar un punto de acceso global a esa instancia. En el contexto de la conexión a una base de datos, esto significa que solo tendrás una instancia de la clase responsable de manejar la configuración y la conexión a la base de datos en toda tu aplicación. */