import { Injectable, signal } from '@angular/core';
import { SiteContent, NavItem, Brand, Service } from '../models/content.models';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private content = signal<SiteContent>(this.getSiteContent());

  readonly siteContent = this.content.asReadonly();

  private getSiteContent(): SiteContent {
    return {
      company: {
        name: 'ASV Telefónica',
        tagline: 'Telecomunicaciones & Redes',
        yearsExperience: 28,
        description: 'ASV TELEFONICA es una empresa dedicada a brindarle Asesoría, Servicios, Venta, alquiler de Centrales Telefónicas, cableado estructurado en Categorías 6 y 6A, instalación y fusionado de fibra óptica, tensión estabilizada para Sistemas de cómputo, CCTV y Accesorios para Voz y Data.',
        mission: 'Brindar servicios y soluciones de alta tecnología, que faciliten las operaciones productivas y administrativas de nuestros clientes, y generar su confianza con el otorgamiento de un servicio de calidad; garantizados por el profesionalismo y la permanente capacitación de nuestros colaboradores.',
        vision: 'Ser considerados a nivel nacional, como una empresa que ofrece servicios y soluciones de alta tecnología con calidad y valor agregado.',
        commitment: 'Nuestro compromiso es promover el éxito de nuestros clientes con soluciones adecuadas a sus necesidades, facilitando su desarrollo y el de nuestros colaboradores, basados en el mejoramiento continuo.'
      },
      contact: {
        address: 'Calle Ines Huaylas Yupanqui Nro. 235 - San Miguel, Lima - Perú',
        phone1: '(01) 244-2656',
        phone2: '(01) 264-7232',
        whatsapp: '983 453 408',
        email: 'asv@asvtelefonica.com'
      },
      services: this.getServices(),
      brands: this.getBrands()
    };
  }

  private getServices(): Service[] {
    return [
      {
        title: 'VENTA DE EQUIPOS',
        description: 'Venta de Aparatos telefónicos convencional, Centrales Telefónicas análogas, Digital o IP de las más prestigiosas marcas, sistemas de CCTV.',
        icon: 'monitor',
        link: '/equipos',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400'
      },
      {
        title: 'SOFTWARE & ACCESORIOS',
        description: 'Call Center, Operadoras Automáticas, Tarificador de llamadas, teléfonos IP virtuales Softphone.',
        icon: 'settings',
        link: '/software-y-accesorios',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400'
      },
      {
        title: 'SERVICIOS',
        description: 'Instalaciones, mantenimientos de sistemas de redes y equipos de monitoreo CCTV. Todas nuestras instalaciones certificadas.',
        icon: 'wrench',
        link: '/servicios',
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400'
      }
    ];
  }

  private getBrands(): Brand[] {
    return [
      { name: 'ALCATEL-LUCENT', logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-alcatel-lucent.jpg' },
      { name: 'PANASONIC', logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-panasonic.jpg' },
      { name: 'TRENDNET', logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-trendnet.jpg' },
      { name: 'LOGITECH', logoUrl: null },
      { name: 'LEVITON', logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-leviton.jpg' },
      { name: 'PANDUIT', logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-panduit.jpg' },
      { name: 'COMMSCOPE', logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-coomscope.jpg' },
      { name: 'DIXON', logoUrl: null },
      { name: 'DAHUA', logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-alhua.jpg' },
      { name: 'HIKVISION', logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-hikvision.jpg' },
      { name: 'UNV', logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2025/10/UNV-e1759864939556.png' },
      { name: 'CISCO', logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/12/logo-cisco.jpg' }
    ];
  }

  getNavItems(): NavItem[] {
    return [
      { label: 'INICIO', href: '/' },
      { label: 'NUESTRAS SOLUCIONES', href: '#soluciones', hasDropdown: true, children: [
        { label: 'Equipos', href: '/equipos' },
        { label: 'Software y Accesorios', href: '/software-y-accesorios' },
        { label: 'Servicios', href: '/servicios' }
      ]},
      { label: 'NOSOTROS', href: '/about-us' },
      { label: 'CONTÁCTENOS', href: '/contact-us' }
    ];
  }

  getLogoUrl(): string {
    return 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-asv.png';
  }

  getLocalLogoUrl(): string {
    return '/assets/images/logo.png';
  }
}
