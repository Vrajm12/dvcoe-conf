import { getEvents } from '@/lib/content';

// Static export configuration
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const events = await getEvents();
    return Response.json(events);
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return Response.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}
