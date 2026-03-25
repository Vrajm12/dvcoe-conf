'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
  slug?: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading events...</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-blue-900">Events</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">Explore upcoming conferences and events</p>

        {events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events scheduled yet.</p>
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
              Return to home
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.slug}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
              >
                {event.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">{event.title}</h2>
                  <p className="text-sm text-gray-500 mb-3">
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600 line-clamp-3">{event.description}</p>
                  <Link
                    href={`/events/${event.slug}`}
                    className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
