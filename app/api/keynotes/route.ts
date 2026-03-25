import { getKeynotes } from '@/lib/content';

// Static export configuration
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const keynotes = await getKeynotes();
    return Response.json(keynotes);
  } catch (error) {
    console.error('Failed to fetch keynotes:', error);
    return Response.json({ error: 'Failed to fetch keynotes' }, { status: 500 });
  }
}
