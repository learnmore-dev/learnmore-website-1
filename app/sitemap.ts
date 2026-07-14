import { MetadataRoute } from 'next';
import coursesData from '@/data/courses.json';
import locationsData from '@/data/locations.json';
import offersData from '@/data/offers.json';
import { blogsList } from '@/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://learnmore.com';

  // 1. Static Pages
  const staticPaths = [
    '',
    '/course',
    '/placement',
    '/services',
    '/internships',
    '/blog',
    '/offer',
    '/location',
    '/it-services',
    '/fullstack-training-in-course',
    '/certificate/verify',
  ];

  const staticEntries = staticPaths.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: path === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic Course Slugs
  const courseEntries = coursesData.courses.map(course => ({
    url: `${baseUrl}/course/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 3. Dynamic Location Slugs
  const locationEntries = locationsData.locations.map(loc => ({
    url: `${baseUrl}/location/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 4. Dynamic Offer Slugs
  const offerEntries = offersData.offers.map(offer => {
    const slug = offer.link.replace('/offer/', '');
    return {
      url: `${baseUrl}/offer/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    };
  });

  // 5. Dynamic Blog Slugs
  const blogEntries = blogsList.map(blog => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // 6. Localized Landing Pages (e.g. aws-training-in-marathahalli)
  const courseKeys = [
    'python',
    'aws',
    'devops',
    'java',
    'react',
    'data-science',
    'data-analytics',
    'software-testing',
    'digital-marketing',
    'cybersecurity'
  ];
  
  const landingEntries: any[] = [];
  
  courseKeys.forEach(courseKey => {
    locationsData.locations.forEach(loc => {
      landingEntries.push({
        url: `${baseUrl}/${courseKey}-training-in-${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      });
    });
  });

  return [
    ...staticEntries,
    ...courseEntries,
    ...locationEntries,
    ...offerEntries,
    ...blogEntries,
    ...landingEntries,
  ];
}
