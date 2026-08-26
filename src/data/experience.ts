import { TAGS } from '../components/TagsIcons.astro';

export interface ExperienceProject {
	title: string;
	stack: string;
	tags: Array<{ name: string; class: string; icon: any }>;
	description: string;
}

export interface ExperienceCompany {
	date: string;
	title: string;
	description: string;
	projects: ExperienceProject[];
}

export interface ExperienceEntry {
	date: string;
	title: string;
	description: string;
	companies: ExperienceCompany[];
}

export const EXPERIENCE: ExperienceEntry[] = [
	{
		date: 'Enero 2024 – Actualidad',
		title: 'Full Stack Web Developer — Autónomo',
		description: 'Desarrollo profesional de aplicaciones web y soluciones digitales para clientes y empresas, participando en proyectos completos de frontend, backend, bases de datos, APIs, CMS, autenticación, arquitectura e infraestructura.',
		companies: [
			{
				date: 'Marzo 2026 – Agosto 2026',
				title: 'Zima-Blue — Frontend Developer',
				description: 'Colaboración profesional como autónomo dentro de Zima-Blue.',
				projects: [
					{
						title: 'ETTG — European Think Tanks Group',
						stack: 'WordPress · PHP · Elementor · ACF · JavaScript',
						tags: [TAGS.WORDPRESS, TAGS.JAVASCRIPT],
						description: 'Desarrollo, mantenimiento y evolución de la plataforma web de ETTG: sistema de contenido relacionado mediante ACF + PHP + Elementor, templates personalizados, resolución de incidencias, auditoría de The Events Calendar y optimización general de la plataforma.'
					},
					{
						title: 'By Brava — Website Redesign',
						stack: 'Next.js · React · TypeScript · Tailwind · Sanity · shadcn/ui · Turborepo',
						tags: [TAGS.NEXT, TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.SANITY],
						description: 'Desarrollo integral del frontend para la renovación del sitio web de Brava, transformando los diseños de Adobe Illustrator en una aplicación web moderna y responsive. Arquitectura de componentes reutilizables, integración de Sanity CMS, sistema de formularios dinámicos, animaciones con Motion y Lenis, monorepo con Turborepo y gestión mediante Git + Pull Requests.'
					}
				]
			},
			{
				date: 'Abril 2025 – Febrero 2026',
				title: 'Weasel Web — Full Stack Web Developer',
				description: 'Colaboración profesional como autónomo dentro de Weasel Web.',
				projects: [
					{
						title: 'AgroTraz — Plataforma SaaS de gestión de fábricas',
						stack: 'Astro · React · TypeScript · MariaDB · Docker',
						tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TYPESCRIPT, TAGS.MARIADB, TAGS.DOCKER],
						description: 'Desarrollo integral de una plataforma SaaS para gestión de fábricas: frontend, backend y arquitectura desde cero, diseño UI/UX, módulos funcionales, base de datos MariaDB, sistemas de autenticación, permisos y arquitectura multiempresa, configuración de Docker y VPS, y arquitectura preparada para escalar. Proyecto actualmente activo en producción.'
					},
					{
						title: 'Web corporativa de Weasel Web',
						stack: 'Astro · React · Tailwind CSS',
						tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND],
						description: 'Mantenimiento y evolución de la web corporativa: modificación de la mayoría de páginas y componentes, mejoras visuales y funcionales, y resolución de errores en la aplicación.'
					}
				]
			},
			{
				date: 'Noviembre 2024 – Actualidad',
				title: 'Goblin Ajedrez — Full Stack Developer',
				description: 'Plataforma de ajedrez online. Reconstrucción y evolución integral como cliente directo.',
				projects: []
			},
			{
				date: 'Septiembre 2024 – Octubre 2024',
				title: 'CMS Incantatem — Full Stack Developer',
				description: 'CMS personalizado para la gestión de archivos, imágenes y metadatos.',
				projects: []
			},
			{
				date: 'Julio 2024 – Agosto 2024',
				title: 'AuraFut — Full Stack Developer',
				description: 'Tienda online de productos deportivos con frontend, panel admin y API. Migrada posteriormente a Shopify.',
				projects: []
			}
		]
	}
];
