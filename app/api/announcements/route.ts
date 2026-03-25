import { getAnnouncements } from '@/lib/content';

// Static export configuration
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const announcements = await getAnnouncements();
    return Response.json(announcements);
  } catch (error) {
    console.error('Failed to fetch announcements:', error);
    return Response.json({ error: 'Failed to fetch announcements' }, { status: 500 });
  }
}
