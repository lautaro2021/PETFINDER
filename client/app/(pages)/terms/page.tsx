import React from "react";

function page() {
  return (
    <main className="main_container">
      <section>
        <h1>POLITICAS DE PRIVACIDAD</h1>
        <p>
          Polytusk Diseños está comprometido a garantizar la confidencialidad de
          sus servicios en línea. Detallamos a continuación: Nuestra Política de
          privacidad habla del uso que le damos a la información personal que el
          usuario proporciona a QR MASCOTAS POLYTUSK cuando utiliza nuestros
          contenidos en el sitio 
          <a
            href="www.qrmascotaspolytusk.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "blue" }}
          >
            www.qrmascotaspolytusk.com
          </a>
        </p>
        <h2 style={{ fontWeight: "600", paddingTop: "25px" }}>Sitio Web</h2>
        <p>
          Definimos Información Personal como el conjunto de los datos del
          usuario que permiten identificarlo, como por ejemplo su nombre y
          apellido, correo electrónico, número telefónico y redes sociales. Son
          datos privados, no están disponibles al público.
        </p>
        <h2 style={{ fontWeight: "600", paddingTop: "25px" }}>
          Información Personal
        </h2>
        <ol>
          <li>
            Polytusk Diseños no vende a nadie información personal de sus
            usuarios. SOLO compartirá la Información Personal que le
            proporcionen los usuarios cuando: (a) El usuario autorice a
            compartir dicha información. (b) Necesitemos compartir esa
            información para poder ofrecer un servicio que el usuario nos haya
            solicitado. (Ej.: En el supuesto caso de que un tercero tenga que
            escanear el código QR para poder dar con el dueño/a de la mascota
            perdida).
          </li>
          <li>
            Al proporcionarnos tus datos personales, estos pasan a formar parte
            de un archivo confidencial, que define el perfil de cada usuario.
            Todo usuario podrá permanentemente consultar, rectificar, actualizar
            y/o suprimir sus propios datos personales en la página web. Solo
            podrá realizar modificaciones de la información la persona que haya
            realizado el registro, siendo indispensable iniciar sesión con su
            usuario y contraseña proporcionadas al momento del registro.
          </li>
        </ol>
        <p style={{ paddingTop: "25px" }}>
          Ante cualquier duda ,puede ponerse en contacto con{" "}
          <a
            href="www.polytusk.com.ar"
            rel="noreferrer"
            target="_blank"
            style={{ color: "blue" }}
          >
            WWW.POLYTUSK.COM.AR
          </a>
        </p>
      </section>
    </main>
  );
}

export default page;
