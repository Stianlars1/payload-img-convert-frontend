import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: [
                    'GPTBot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'ClaudeBot',
                    'PerplexityBot',
                ],
                allow: '/',
            },
            {
                userAgent: ['CCBot', 'anthropic-ai', 'cohere-ai'],
                disallow: '/', // Optionally block training crawlers if desired, but allow search
            }
        ],
        sitemap: 'https://payload-img-convert.vercel.app/sitemap.xml',
    }
}
