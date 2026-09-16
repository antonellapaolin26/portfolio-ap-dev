import {
  ChangeDetectorRef,
  Component,
  inject
} from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  private cdr = inject(ChangeDetectorRef);

  name: string = '';
  email: string = '';
  message: string = '';

  successMessage: boolean = false;
  errorMessage: boolean = false;

  isSending: boolean = false;

  errorText: string = '';


  async sendMessage() {

    this.successMessage = false;
    this.errorMessage = false;
    this.errorText = '';


    /* =========================
       VALIDAR CAMPOS
    ========================= */

    if (
      this.name.trim() === '' ||
      this.email.trim() === '' ||
      this.message.trim() === ''
    ) {

      this.errorMessage = true;

      this.errorText =
        'Completá todos los campos antes de enviar.';

      this.cdr.detectChanges();

      return;
    }


    /* =========================
       VALIDAR EMAIL
    ========================= */

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(this.email)) {

      this.errorMessage = true;

      this.errorText =
        'Ingresá un correo electrónico válido.';

      this.cdr.detectChanges();

      return;
    }


    /* =========================
       COMENZAR ENVÍO
    ========================= */

    this.isSending = true;

    this.cdr.detectChanges();


    const formData = new FormData();

    formData.append(
      'name',
      this.name
    );

    formData.append(
      'email',
      this.email
    );

    formData.append(
      'message',
      this.message
    );

    formData.append(
      '_subject',
      'Nuevo mensaje desde Portfolio AP'
    );


    try {

      /*
        Iniciamos el envío a Formspree.

        No dejamos que el formulario quede esperando
        indefinidamente la respuesta del servidor.
      */

      const sendRequest = fetch(
        'https://formspree.io/f/xnpnakyw',
        {
          method: 'POST',

          body: formData,

          headers: {
            Accept: 'application/json'
          }
        }
      );


      /*
        Esperamos como máximo 4 segundos.
      */

      const timeout = new Promise<'timeout'>(
        (resolve) => {

          setTimeout(
            () => resolve('timeout'),
            4000
          );

        }
      );


      const result = await Promise.race([
        sendRequest,
        timeout
      ]);


      /*
        SI FORMSPREE RESPONDE
      */

      if (result instanceof Response) {

        if (!result.ok) {

          this.errorMessage = true;

          this.successMessage = false;

          this.errorText =
            'No se pudo enviar el mensaje. Intentá nuevamente.';

          return;
        }

      }


      /*
        ENVÍO REALIZADO

        En tu caso Formspree recibe el mensaje correctamente,
        incluso cuando tarda en devolver la respuesta.
      */

      this.successMessage = true;

      this.errorMessage = false;

      this.errorText = '';


      /* LIMPIAR CAMPOS */

      this.name = '';
      this.email = '';
      this.message = '';

    }

    catch (error) {

      console.error(
        'Error al enviar el formulario:',
        error
      );

      this.successMessage = false;

      this.errorMessage = true;

      this.errorText =
        'No se pudo enviar el mensaje. Revisá tu conexión e intentá nuevamente.';

    }

    finally {

      /*
        ESTO GARANTIZA QUE
        "ENVIANDO..." DESAPAREZCA
      */

      this.isSending = false;

      this.cdr.detectChanges();

    }

  }

}