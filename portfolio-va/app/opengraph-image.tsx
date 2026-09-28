import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Nazar Gunawan — Tech-Savvy Virtual Assistant';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F4F0E8',
          padding: '60px',
          border: '14px solid #171717',
          color: '#171717',
        }}
      >
        {/* Top Dispatch Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid rgba(23, 23, 23, 0.2)',
            paddingBottom: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '18px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
            }}
          >
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#1b873f',
              }}
            />
            <span style={{ display: 'flex' }}>AVAILABLE FOR REMOTE WORK</span>
            <span style={{ color: 'rgba(23, 23, 23, 0.4)', display: 'flex' }}>/</span>
            <span style={{ color: '#4A4640', display: 'flex' }}>Indonesia · GMT+7</span>
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: '16px',
              fontFamily: 'monospace',
              color: '#D94F35',
              fontWeight: 700,
              letterSpacing: '1px',
            }}
          >
            DISPATCH 2026
          </div>
        </div>

        {/* Center Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '56px',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-1.5px',
              textTransform: 'uppercase',
              color: '#171717',
              fontFamily: 'serif',
            }}
          >
            <span style={{ display: 'flex' }}>REMOTE ASSISTANT</span>
            <span style={{ display: 'flex' }}>FOR PEOPLE WHO HAVE</span>
            <span style={{ display: 'flex' }}>TOO MUCH TO DO.</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              fontSize: '18px',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#D94F35',
              fontWeight: 600,
              marginTop: '12px',
            }}
          >
            <span style={{ display: 'flex' }}>Research</span>
            <span style={{ color: '#171717', display: 'flex' }}>·</span>
            <span style={{ display: 'flex' }}>Operations</span>
            <span style={{ color: '#171717', display: 'flex' }}>·</span>
            <span style={{ display: 'flex' }}>Data</span>
            <span style={{ color: '#171717', display: 'flex' }}>·</span>
            <span style={{ display: 'flex' }}>Automation</span>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '2px solid rgba(23, 23, 23, 0.2)',
            paddingTop: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '-0.5px',
            }}
          >
            NAZAR GUNAWAN
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '16px',
              fontFamily: 'monospace',
              color: '#4A4640',
            }}
          >
            nazargunawan.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
