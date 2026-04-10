import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
  slug?: string;
}

export interface Announcement {
  title: string;
  content: string;
  date: string;
  slug?: string;
}

export interface Keynote {
  title: string;
  topic: string;
  bio: string;
  image: string;
  time: string;
  slug?: string;
}

export type ContentData = Record<string, unknown>;

async function getContentFromFolder<T extends object = ContentData>(folderName: string): Promise<T[]> {
  try {
    // Try multiple possible root paths
    const possibleRoots = [
      process.cwd(),
      path.join(__dirname, '..'),
    ];

    let contentDir: string | null = null;
    
    for (const root of possibleRoots) {
      const candidatePath = path.join(root, 'content', folderName);
      if (fs.existsSync(candidatePath)) {
        contentDir = candidatePath;
        break;
      }
    }

    // Return empty array if directory doesn't exist
    if (!contentDir) {
      console.warn(`Content folder not found: content/${folderName}`);
      return [];
    }

    const files = fs.readdirSync(contentDir).filter((file) => file.endsWith('.md'));

    const content = files.map((file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content: body } = matter(fileContent);

      return {
        slug: file.replace('.md', ''),
        ...data,
        body,
      } as T;
    });

    return content;
  } catch (error) {
    console.error(`Error reading content from ${folderName}:`, error);
    return [];
  }
}

export async function getEvents(): Promise<Event[]> {
  return getContentFromFolder<Event>('events');
}

export async function getEvent(slug: string): Promise<Event | null> {
  const events = await getEvents();
  return events.find((event) => event.slug === slug) || null;
}

export async function getAnnouncements(): Promise<Announcement[]> {
  const announcements = await getContentFromFolder<Announcement>('announcements');
  return announcements.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getKeynotes(): Promise<Keynote[]> {
  return getContentFromFolder<Keynote>('keynotes');
}

export async function getPageContent<T extends object = ContentData>(pageName: string): Promise<T | null> {
  try {
    // Try multiple possible root paths
    const possibleRoots = [
      process.cwd(),
      path.join(__dirname, '..'),
    ];

    let filePath: string | null = null;
    
    for (const root of possibleRoots) {
      const candidatePath = path.join(root, 'content', 'pages', `${pageName}.md`);
      if (fs.existsSync(candidatePath)) {
        filePath = candidatePath;
        break;
      }
    }

    if (!filePath) {
      console.warn(`Page content not found for: ${pageName}`);
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return data as T;
  } catch (error) {
    console.error(`Error reading page content for ${pageName}:`, error);
    return null;
  }
}
