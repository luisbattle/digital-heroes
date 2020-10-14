# Ejecutar el proyecto

<pre>
npm start
</pre>

# Consignas

Objetivo
Para la construcción de este pequeño sitio web se espera contar con la posibilidad de acceso a las siguientes URL's:

<pre>
/
/heroes
/heroes/detalle/id - (id = número, obligatorio)
/heroes/bio/id/ok - (id = número, obligatorio / ok = string, optativo)
/creditos
¡Atención! Las anteriores deberán ser direcciones de acceso a la aplicación desde el navegador.
</pre>

# Consignas

A continuación se detalla lo que deberá mostrar cada ruta.

### Home (/)

<pre>
Deberá mostrar un texto de bienvenida al sitio. El texto será: Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.
</pre>

### Héroes (/heroes)

<pre>
Deberá mostrar todo el contenido del archivo heroes.json.
</pre>

### Héroes - Detalle (/heroes/detalle/id)

<pre>
Deberá mostrar un texto que diga: "Hola, mi nombre es NOMBRE y soy PROFESION". En donde el NOMBRE y PROFESION deberán ser reemplazados por al información real. Ejemplo: /heroes/2 mostrará la información de la Heroina o del Héroe con id 2 . Controlar el escenario en donde se pase un número n que no haga match con el id de un héroe.
</pre>

### Héroes - Detalle con bio (/heroes/bio/id/ok)

Aquí se desea mostrar la información así:

<pre>
Si no se encontró el héroe con ese id. El texto será: "No encontramos un héroe para mostrarte su biografía". Esto, indistintamente si se envió o no el parámetro "ok".
Si se encontró el héroe con ese id y NO vino exactamente la palabra ok o simplemente NO vino nada en la ruta. Mostrar el nombre del héroe y un texto adicional que diga: "Lamento que no desees saber más de mi :(".
Si se encontró el héroe con ese id y vino exactamente la palabra ok. Mostrar el nombre del héroe y su reseña.
</pre>

### Créditos (/creditos)

<pre>
Mostrar los créditos de ustedes como equipo y cualquier texto adicional que deseen mostrar.
</pre>
