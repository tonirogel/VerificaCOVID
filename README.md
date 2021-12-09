# VerificaCOVID

[![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/evidenceledger/VerificaCOVID/blob/main/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a6e47840-b04f-4b44-8939-fc6d14c41f34/deploy-status)](https://app.netlify.com/sites/verificacovid/deploys)

Aplicación sencilla y extremadamente respetuosa con la privacidad en formato PWA (Progressive Web Application) para verificar los EU Digital COVID Certificates.

## Descripción general de funcionamiento

La aplicación móvil está construida como una PWA estática, en contraste con el enfoque habitual de una app nativa. En concreto:

- Es una página web estática que usa HTML5, CSS y JavaScript para ejecutar lógica en el cliente. No requiere de ningún servidor de aplicaciones ni base de datos de ningun tipo. Basta con un servidor de archivos.
- Está construida como una PWA (Progressive Web Application) para permitir el funcionamiento en off-line y así incrementar la privacidad porque ni siquiera el servidor desde el que se ha descargado puede saber las verificaciones que se realizan localmente en el dispositivo del usuario.
- La lógica en el dispositivo del usuario no se conecta con ningún servidor por ningún motivo excepto si el usuario lo hace explicitamente, para refrescar la lista de claves públicas de verificación de los certificados y siempre desde el mismo servidor de archivos desde el que se descargó inicialmente.
- Para usar la aplicación, el usuario accede con su navegador internet a la URL donde está disponible la aplicación web (solo disponible via HTTPS) y se carga en su dispositivo la aplicación como si fuera cualquier página web. La lógica de la aplicación que se ejecuta en el dispositivo del usuario está implementada en JavaScript y se soportan la mayoría de los navegadores web actuales del mercado (Chrome, Safari, Firefox, Edge) y cualquier sistema operativo donde estén disponibles (Android, iOS, Windows, Linux, Mac). Lo normal es que el dispositivo sea un teléfono móvil pero se puede usar cualquier dispositivo compatible que tenga una cámara adecuada para capturar vídeo y escanear el QR del certificado.

El uso de la aplicación es completamente anónimo y no requiere que el usuario se registre de ninguna manera en ningún sitio. La aplicación no usa ningún sistema de autenticación, ni en el servidor ni en la parte cliente.

El código se puede poner a disposición de los usuarios en cualquier servidor web que sea capaz de servir a un navegador web de manera segura (vía HTTPS) los recursos estáticos que componen la aplicación. En la parte servidora no se requiere de ninguna infraestructura adicional para que la aplicación funcione, ni servidor de aplicaciones, ni base de datos.

### Consideracion sobre cookies

La aplicación no usa cookies ni ningún otro mecanismo similar para la comunicación cliente-servidor.

No obstante, hay que tener en cuenta que si la aplicación se sirve desde un subdominio, si el usuario visita otras partes del dominio que sí usan cookies, las cookies utilizadas en las otras páginas de ese dominio se enviarán automáticamente (e innecesariamente) al servidor donde se aloja la aplicación. Como se ha dicho antes, la aplicación no usa cookies para absolutamente nada.

## Funcionamiento en el dispositivo del usuario

Una vez realizada la carga inicial en el navegador del usuario, la aplicación funciona totalmente en off-line hasta que el usuario realice explícitamente la acción de refrescar la aplicación como cualquier otra página web. entera o refrescar únicamente la lista de claves públicas de las entidades que firman los certificados COVID y que sirven para verificar la firma de los mismos.

Al hacer el refresco se actualiza el código (si ha cambiado) y la lista de claves públicas de las entidades que firman los certificados COVID y que sirven para verificar la firma de los mismos.

La aplicación no envía nunca ningún tipo de datos a ningún servidor durante su funcionamiento, excepto los estrictamente necesarios en la cabecera de las peticiones HTTPS GET necesarias para refrescar la aplicación y la lista de claves públicas. En concreto, no usa cookies ni herramientas de analítica de la aplicación en el cliente (por ejemplo Google Analytics).

##	Verificación de los certificados

La verificación de los certificados COVID se realiza exclusivamente escaneando el QR vía la cámara del dispositivo, y no se guarda en local ningún dato del certificado verificado.

La aplicación presenta en pantalla el resultado de la verificación y los datos personales esenciales del portador del certificado verificado: nombre/apellidos y fecha de nacimiento.

Las claves públicas de las entidades firmantes están pre-cargadas y el proceso de verificación no requiere que el dispositivo se conecte a ningún sitio para ello.

Eso permite además que la aplicación pueda verificar en off-line sin que haya cobertura, a pesar de ser una aplicación web.

La lista de claves públicas es un fichero en formato JSON que forma parte de los recursos estáticos de la aplicación que se cargan en el navegador del usuario al visitar o refrescar la página. Las claves se refrescan simplemente refrescando la aplicación como cualquier página web. Es decir, el usuario verificador puede refrescar la lista tan frecuentemente como desee y cuando desee (en muchos navegadores basta deslizar el dedo hacia abajo en la pantalla de la aplicación, o pulsar el botón de refresco del navegador).

La aplicación presenta en pantalla el resultado de la verificación y los datos personales esenciales del portador del certificado verificado: nombre/apellidos y fecha de nacimiento.

## Sobre la lista de claves públicas

Existe un proceso en el servidor que descarga periódicamente las claves del repositorio oficial configurado que publica la lista de claves públicas de los certificados digitales autorizados por la eHealth Network y coloca el fichero en el directorio apropiado del servidor web para que estén disponibles en el próximo refresco de la aplicación (o cuando se cargue por primera vez). Esto se hace así para que el repositorio oficial no se sobrecarge con llamadas de todas la aplicaciones usadas por los verificadores.

Cualquier cambio en una lista implica un reemplazo de la lista antigua por la nueva, por lo que la aplicación no tiene que implementar ningún mecanismo de actualizaciones incrementales. Con el esquema actual de certificación esto no es un problema porque hay pocas entidades emisoras/firmantes de los certificados y por tanto de sellos de firma (actualmente menos de 300 en toda Europa).

Con este esquema, la aplicación del usuario no debe nunca interaccionar más que con un solo servidor, el mismo desde el que descarga inicialmente la aplicación, y las únicas interacciones en el caso normal son de refresco de la aplicación, siempre iniciadas por el usuario.

Las listas de claves públicas en el servidor se deben refrescar periódicamente de manera segura a partir de fuentes confiables. La frecuencia de refresco de las listas en el servidor se debe realizar de acuerdo con la variabilidad esperada de la lista. Una o dos veces por día parece más que suficiente.

## Ubicación del código ejecutable de la aplicación

La aplicación es una aplicación web estática, lo cual quiere decir que cuando se ejecuta en el dispositivo del usuario la aplicación no realiza ningún tipo de operación de escritura al servidor y el servidor puede ser de solo lectura. Este tipo de aplicación es ideal para ser ubicado en un CDN (Content Delivery Network) ya que no necesita ni de servidor de aplicaciones ni base de datos.

Es relativamente fácil integrar el proceso de despliegue en el CDN con el repositorio GitHub, que es donde se ubica el repositorio de código fuente de la aplicación, construida en modelo Open Source. De esta manera se puede conseguir que cualquier despliegue de una nueva versión de la aplicación (incluyendo actualizaciones de las listas de claves públicas) se realice como un despliegue atómico versionado, directamente a partir del repositorio GitHub, por lo que existe trazabilidad e extremo a extremo de las actualizaciones incluyendo todas las versiones de las listas de claves públicas.

El código de la aplicación es Open Source (licencia Apache 2.0) y está publicado en el repositorio GitHub https://github.com/evidenceledger/VerificaCOVID. El acceso en lectura es público para que se pueda realizar auditoría por cualquier persona u organismo y en escritura está controlado por cuentas con doble factor de autenticación.

## Instalación y generación de los objetos ejecutables

Hay que realizar un clonado del repositorio en la máquina local:

    git clone git@github.com:evidenceledger/VerificaCOVID.git

Y entrar en el directorio de la aplicación:

    cd VerificaCOVID

Una vez en ese directorio hay que instalar las dependencias del proyecto:

    npm install

Para probar la aplicación localmente:

    npm run dev

Para generar el código para producción:

    npm run build

El código resultante se encontrará en el subdirecorio `docs`.

## Despliegue al servidor web o CDN

Basta con copiar los ficheros del subdirectorio `docs` al directorio apropiado del servidor web o CDN. Aunque lo mejor es automatizar el proceso consiguiendo CI/CD.

## Adaptación de imagen y modificaciones sencillas

### Cambiando los colores

Las principales características visuales y de colorido se pueden modificar en el fichero `src/app.css`. Para cambios sencillos de colores se pueden modificar las siguientes variables CSS:

    --fore-color-primary:  white!important;
    --bg-color-primary:  #102a3a!important;
    --fore-color-secondary:  #04FF00!important;
    --bg-color-secondary:  #102a3a!important;

Los colores `primary` se usan principalmente para la cabecera y el menú desplegable.

Los colores `secondary` se usan para los botones.

Adicionalmente se puede tener que modificar lo siguiente:

- "HTML theme color" definido en el fichero `src/index.html`, concretamente en el item `<meta name="theme-color" content="#919597">`.
- Los items `background_color` y `theme_color` en el fichero `src/public/manifest.webmanifest`.

### Modificando los iconos de la aplicación

Debe sustituir los iconos de la aplicación por los suyos propios. Se pueden encontrar en el directorio `src/public`.

El directorio `src/public` es especial: todos los ficheros en este directorio se copian sin modificación ni procesado al directorio raíz del destino (`docs` por omisión) durante el proceso de generación par aproducción.

Los fichero relevantes de imágenes son los siguientes:

- favicon.ico
- icon-152.png
- icon-192.png
- icon-512.png
- apple-touch-icon.png


### Modificando el título de la cabecera o añadiendo un icono en la misma

La cabecera y el menú desplegable asociado están definidos en `src/pages/headerbar.js`.

Es muy sencillo modificar el título de la cabecera o cualquier otra propiedad de la misma, que está definida en la función `HeaderBar()` de ese fichero.

### Modificando los textos

Todos los textos de la aplicación están externalizados en el fichero `src/i18n/translations.js`. Muchas de las modificaciones simples a los literales en la aplicación se pueden realizar en este fichero sin tocar el código de las diferentes páginas de la aplicación.

El fichero `translations.js` está en formato JSON con un objeto por cada texto de la aplicación. Un ejemplo es:

```json
"EU Digital COVID Credential Verifier": {
    "es": "Verificador de Credenciales COVID",
    "ca": "Verificador de Credencials COVID",
    "fr": "Outil de vérification numérique des justificatifs COVID de l'UE",
    "de": "Digitale COVID-Anmeldeinformationsüberprüfung in der EU",
    "it": "Strumento di verifica del certificato digitale COVID UE"
}
```

La clave (en el ejemplo `"EU Digital COVID Credential Verifier"`) debe corresponder exactamente con el literal usado en la aplicación. Dentro de este objeto hay un par `clave/valor` por cada idioma traducido.

La aplicación usa el Inglés como idioma principal y por eso las claves están en ese idioma.

No obstante, hay algunos objetos donde la clave comienza con la letra `$` como en `"$intro01"`. Esto se hace cuando el texto en la clave sería demasiado larga para ser práctica. En estos casos los objetos incluyen la frase en Ingles además de los otros idiomas. Se puede ver un ejemplo en el primer objeto en el fichero `translations.js`.

### Añadiendo un nuevo idioma

Añadir un idioma implica dos pasos:

1. Añadir objetos de traducción en el fichero `translations.js`.
2. Adding una nueva opción para elegir ese idioma en el fichero `src/i18n/i18.js`.

El fichero `src/i18n/i18.js` contiene el código para cambiar de idioma en la aplicación. Añadir un nuevo idioma consiste simplemente en copiar/pegar y modificación del código para un idioma ya existente.

El icono de la bandera representando el nuevo idioma debe colocarse en el directorio `src/i18n/flags`. Las dimensiones óptimas para el icono son 50x33 pixels.

## Modificación de las reglas de verificación de los certificados

Distinguimos entre las reglas de `verificación técnica` y las `reglas de verificación de negocio`.

Las reglas de verificación técnicas son normalmente parte del núcleo de la aplicación y no deberían ser diferentes entre diferentes instancias de la misma. Incluyen cosas como:

- Decodificación del QR y su verificación formal para comprobar que contiene los campos relevantes descritos en el formato oficial EU DCC.
- Comprobación que la firma digital es correcta y que la llave pública del sello usado para firmar el certificado digital está incluída en la lista oficial de llaves publicada por los Estados Miembro.

Las `reglas de verificación de negocio` se aplican después de las reglas técnicas y se relacionan típicamente con las validaciones de fechas de emisión respecto a verificación, número de dosis requeridas, etc.

Las reglas de verificación técnicas son muy estables y normalmente deben cambiar solo si se ha encontrado algún fallo técnico en su implementación.

Sin embargo, las reglas de verificación de negocio se pueden modificar dependiendo de la evolución de la pandemia y de otros factores qu etambién pueden depender de la región donde se aplican.

Las reglas de verificación de negocio tienden a ser sencillas y se definen en el fichero `src/components/verifications.js`. Es relativamente sencillo entender las reglas implementadas actualment en ese fichero y como adaptarlas o modificarlas para sus necesidades.