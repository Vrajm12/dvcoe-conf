import { getPageContent } from '@/lib/content';

// Static export configuration
export const revalidate = 3600; // Revalidate every hour

// Generate static paths for all pages
export async function generateStaticParams() {
  return [
    { page: 'home' },
    { page: 'call-for-papers' },
    { page: 'contact' },
    { page: 'dates' },
    { page: 'events' },
    { page: 'program' },
    { page: 'authors' },
    { page: 'committee' },
    { page: 'gallery' },
    { page: 'registration' },
  ];
}

export async function GET(request: Request, props: { params: Promise<{ page: string }> }) {
  try {
    const { page } = await props.params;
    const content = await getPageContent(page);
    if (!content) {
      return Response.json({ error: 'Page not found' }, { status: 404 });
    }
    return Response.json(content);
  } catch (error) {
    console.error('Failed to fetch page content:', error);
    return Response.json({ error: 'Failed to fetch page content' }, { status: 500 });
  }
}
