/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/alpine.jpg',
		title: 'Configurateur alpine',
		skills: ['React', 'Tailwind'],
		descripcion:
			'Application React avec Redux Toolkit permettant de personnaliser les véhicules Alpine. Interface interactive avec prévisualisation en temps réel des options sélectionnées.',
		demoURL: 'https://configurateur-alpine.netlify.app',
		repoURL: 'https://github.com/octador/app-alpine',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/luxuryservice.jpg',
		title: 'E-commerce',
		skills: ['JavaScript', 'Bootstrap'],
		descripcion:
			' Découvrez mon site de recrutement de luxe, développé en Symfony. Une plateforme élégante et performante pour le secteur haut de gamme.',
		demoURL: 'https://joan-luxury.projets.garage404.com',
		repoURL: 'https://github.com/octador/Luxury-Service',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	// {
	// 	imgSrc: 'img/wordpress.jpg',
	// 	title: 'WP base R.G.P.D.',
	// 	skills: ['React', 'CSS'],
	// 	descripcion:
	// 		'Découvrez mon site WordPress conçu pour intégrer les fonctionnalités de base du RGPD. Une solution simple et efficace pour assurer la conformité tout en offrant une expérience utilisateur fluide.',
	// 	demoURL: 'https://vincent-joan-festival.projets.garage404.com/',
	// 	repoURL: '',
	// 	anim: 'fade-left',
	// },
	{
		imgSrc: 'img/drumppad.jpg',
		title: 'sampleur',
		skills: ['React', 'CSS'],
		descripcion:
			"Découvrez mon sampleur développé en JavaScript, utilisant l'écoute du DOM pour une gestion interactive et fluide des échantillons audio.",
		demoURL: 'https://drump-pad.projets.garage404.com/',
		repoURL: 'https://github.com/octador/Vanilla-Front-Drumpad',
		anim: 'fade-left',
	},
	{
		imgSrc: 'img/themoutain.jpg',
		title: 'Premiere integration ',
		skills: [ 'CSS'],
		descripcion:
			"Découvrez The Mountain, un site où j'ai réalisé l'intégration d'une maquette en HTML et CSS. La conception est fidèle à la maquette, offrant une présentation élégante et responsive.",
		demoURL: 'https://joan-the.moutain.projets.garage404.com/',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'img/agricazone.jpg',
		title: 'projet fin d\'étude',
		skills: ['css',],
		descripcion:
			"Découvrez Agricazone, mon projet de fin d'étude : un site dédié à la vente directe de produits agricoles. Facilitez les transactions entre producteurs et consommateurs avec une plateforme intuitive et efficace. le site n'est pas en ligne actuellement",
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	}
];

const skillIcons = {
    JavaScript: 'skill-icons:javascript',
    React: 'skill-icons:react-dark',
    Astro: 'skill-icons:astro',
    CSS: 'skill-icons:css',
    Sass: 'skill-icons:sass',
    StyledComponents: 'skill-icons:styledcomponents',
    Bootstrap: 'skill-icons:bootstrap',
    Tailwind: 'skill-icons:tailwindcss-dark',
    HTML: 'skill-icons:html',
    NodeJS: 'skill-icons:nodejs-dark',
    Git: 'skill-icons:git',
    TypeScript: 'skill-icons:typescript',
    Redux: 'skill-icons:redux',
    NextJS: 'skill-icons:nextjs-dark',
    VueJS: 'skill-icons:vuejs',
    Angular: 'skill-icons:angular',
    Python: 'skill-icons:python',
    GraphQL: 'skill-icons:graphql',
    Docker: 'skill-icons:docker',
    MySQL: 'skill-icons:mysql-dark',
    MongoDB: 'skill-icons:mongodb',
    PHP: 'skill-icons:php-dark',
    Laravel: 'skill-icons:laravel',
    Figma: 'skill-icons:figma-dark',
    Symfony: 'skill-icons:symfony' 
};


/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
