// Re-export types and interfaces
export type { BlogContent, Category, BlogPost } from './blog-data.en';

// Re-export utility functions (these are locale-independent)
export {
  getRarityClass,
  getRarityGlow,
  getCardBorder,
  nftStatistics,
  categories,
  getCategoryKeyByName
} from './blog-data.en';

import type { BlogPost } from './blog-data.en';

// Cache for loaded blog data to avoid redundant imports
const blogDataCache: Record<string, Record<string, BlogPost>> = {};

/**
 * Dynamically loads blog data for the specified locale
 * @param locale - The locale code (en, fr, de, es)
 * @returns Promise resolving to the blog posts object
 */
export async function loadBlogData(locale: string): Promise<Record<string, BlogPost>> {
  // Return cached data if available
  if (blogDataCache[locale]) {
    return blogDataCache[locale];
  }

  try {
    // Dynamically import the locale-specific blog data
    const module = await import(`./blog-data.${locale}`);
    blogDataCache[locale] = module.blogPosts;
    return module.blogPosts;
  } catch (error) {
    // Fallback to English if locale file doesn't exist
    console.warn(`Blog data for locale "${locale}" not found, falling back to English`);
    const module = await import('./blog-data.en');
    blogDataCache[locale] = module.blogPosts;
    return module.blogPosts;
  }
}

/**
 * Gets all blog posts for the specified locale
 * @param locale - The locale code (en, fr, de, es)
 * @returns Promise resolving to array of all blog posts
 */
export async function getAllBlogPosts(locale: string): Promise<BlogPost[]> {
  const blogPosts = await loadBlogData(locale);
  return Object.values(blogPosts);
}

/**
 * Gets a specific blog post by slug for the specified locale
 * @param locale - The locale code (en, fr, de, es)
 * @param slug - The blog post slug/ID
 * @returns Promise resolving to the blog post or undefined
 */
export async function getBlogPost(locale: string, slug: string): Promise<BlogPost | undefined> {
  const blogPosts = await loadBlogData(locale);
  return blogPosts[slug];
}

/**
 * Gets blog posts by category for the specified locale
 * @param locale - The locale code (en, fr, de, es)
 * @param categorySlug - The category slug (null for all posts)
 * @returns Promise resolving to array of filtered blog posts
 */
export async function getBlogPostsByCategory(locale: string, categorySlug: string | null): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts(locale);

  if (!categorySlug) {
    return allPosts;
  }

  return allPosts.filter(post => {
    const postCategory = post.category.toLowerCase();
    return postCategory === categorySlug.toLowerCase() || postCategory === categorySlug;
  });
}
