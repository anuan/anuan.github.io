/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 **/

export const siteTitle = 'anuan'
export const siteDescription = 'Ideas'
export const siteURL = 'anuan.github.io'
export const siteLink = 'https://anuan.github.io/'
export const siteAuthor = 'anuan'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	}, {
		title: 'About',
		route: '/about'
	}, {
		title: 'Contact',
		route: '/contact'
	},
]