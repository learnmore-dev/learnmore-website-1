import { MetadataRoute } from 'next';
import coursesData from '@/data/courses.json';
import locationsData from '@/data/locations.json';
import offersData from '@/data/offers.json';
import { blogsList } from '@/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://learnmoretech.in';

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
    '/full-stack-training-course',
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

  // 6. Localized Landing Pages (e.g. full-stack-training-course-in-marathahalli, aws-training-in-marathahalli)
  const courseKeys = [
    'full-stack-training-course',
    'python-fullstack',
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
      const urlPath = courseKey === 'full-stack-training-course'
        ? `full-stack-training-course-in-${loc.slug}`
        : `${courseKey}-training-in-${loc.slug}`;

      landingEntries.push({
        url: `${baseUrl}/${urlPath}`,
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
