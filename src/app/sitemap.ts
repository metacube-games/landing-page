import { MetadataRoute } from 'next';
import { locales } from '@/i18n';
import { blogPosts } from '@/utils/blog-data.en';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://metacube.games';
  const currentDate = new Date();

  // Static pages that exist for all locales
  const staticPages = [
    '', // home page
    '/blog',
    '/community-streams',
    '/careers',
    '/privacy',
    '/terms',
  ];

  // Generate entries for each locale and static page
  const staticEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      const url = `${baseUrl}/${locale}${page}`;

      // Set different priorities and change frequencies based on page type
      let priority = 0.7;
      let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';

      if (page === '') {
        // Home page
        priority = 1.0;
        changeFrequency = 'daily';
      } else if (page === '/blog') {
        // Blog index
        priority = 0.9;
        changeFrequency = 'daily';
      } else if (page === '/community-streams') {
        // Community streams
        priority = 0.8;
        changeFrequency = 'daily';
      } else if (page === '/careers') {
        // Careers
        priority = 0.6;
        changeFrequency = 'monthly';
      } else if (page === '/privacy' || page === '/terms') {
        // Legal pages
        priority = 0.3;
        changeFrequency = 'yearly';
      }

      staticEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${page}`])
          ),
        },
      });
    });
  });

  // Generate blog post entries for each locale
  const blogPostEntries: MetadataRoute.Sitemap = [];
  const blogPostIds = Object.keys(blogPosts);

  locales.forEach((locale) => {
    blogPostIds.forEach((postId) => {
      const post = blogPosts[postId];
      const url = `${baseUrl}/${locale}/blog/${postId}`;

      // Parse the blog post date for lastModified
      let lastModified = currentDate;
      try {
        lastModified = new Date(post.date);
        if (isNaN(lastModified.getTime())) {
          lastModified = currentDate;
        }
      } catch {
        lastModified = currentDate;
      }

      blogPostEntries.push({
        url,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/blog/${postId}`])
          ),
        },
      });
    });
  });

  // Generate blog category pages for each locale
  const categoryEntries: MetadataRoute.Sitemap = [];
  const categories = ['announcements', 'guides', 'development', 'events'];

  locales.forEach((locale) => {
    categories.forEach((category) => {
      const url = `${baseUrl}/${locale}/blog/category/${category}`;

      categoryEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/blog/category/${category}`])
          ),
        },
      });
    });
  });

  return [...staticEntries, ...blogPostEntries, ...categoryEntries];
}
