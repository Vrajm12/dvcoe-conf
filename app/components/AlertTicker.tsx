'use client';

import { useEffect, useRef } from 'react';

const alerts = [
  {
    text: 'SAMPLE TEMPLATE FOR PPT UPLOADED',
    href: '/Sample Template for PPT.pptx',
    isNew: false,
  },
  {
    text: 'ICCET 2026 COPYRIGHT FORM UPLOADED',
    href: '/ICCET 2026 Copyright form Paper ID x........docx',
    isNew: false,
  },
  {
    text: 'CERTIFICATE OF ORIGINALITY UPLOADED',
    href: '/Paper ID x... Certificate of Originality.docx',
    isNew: false,
  },
  {
    text: 'TRACK SCHEDULE UPLOADED',
    href: '/ICCET 2026 Track Schedule.pdf',
    isNew: true,
  },
];

export default function AlertTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate the width of one set of items for seamless looping
    const firstSegment = track.querySelector('.ticker-segment') as HTMLElement;
    if (firstSegment) {
      const segmentWidth = firstSegment.offsetWidth;
      track.style.setProperty('--segment-width', `${segmentWidth}px`);
    }
  }, []);

  return (
    <div className="ticker-bar">
      <div className="ticker-track" ref={trackRef}>
        {/* Two copies for seamless infinite loop */}
        {[0, 1].map((copy) => (
          <div key={copy} className="ticker-segment" aria-hidden={copy > 0}>
            {alerts.map((alert, i) => (
              <a
                key={`${copy}-${i}`}
                href={alert.href}
                download
                className="ticker-link"
              >
                <span className="ticker-star">★</span>
                <span>{alert.text}</span>
                {alert.isNew && <span className="ticker-new-badge">NEW</span>}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
