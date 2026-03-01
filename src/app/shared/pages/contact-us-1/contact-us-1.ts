import {Component, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ContactFormData} from '../../models/content.models';
import {ContentService} from '../../services/content.service';

@Component({
  selector: 'app-contact-us-1',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us-1.html',
  styleUrl: './contact-us-1.css',
})
export class ContactUs1 {
  private contentService = inject(ContentService);

  // Obtenemos la información de la empresa (teléfonos, correo, etc.)
  content = this.contentService.siteContent;

  // Estado del formulario basado en tu interfaz ContactFormData
  formData = signal<ContactFormData>({
    nombre: '',
    apellidos: '',
    ruc: '',
    empresa: '',
    telefono: '',
    email: '',
    mensaje: ''
  });

  // Estados para la animación del botón y mensaje de éxito
  isSubmitting = signal(false);
  submitSuccess = signal(false);

  onSubmit() {
    this.isSubmitting.set(true);

    // Aquí simularíamos la llamada a tu API (Elysia) para enviar el correo
    setTimeout(() => {
      console.log('Simulando envío de correo a:', this.content().contact.email);
      console.log('Datos enviados:', this.formData());

      this.isSubmitting.set(false);
      this.submitSuccess.set(true);

      // Reseteamos el formulario
      this.formData.set({
        nombre: '', apellidos: '', ruc: '', empresa: '', telefono: '', email: '', mensaje: ''
      });

      // Ocultar el mensaje de éxito después de 5 segundos
      setTimeout(() => this.submitSuccess.set(false), 5000);
    }, 1500);
  }
}
