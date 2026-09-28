import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#171717',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F4F0E8',
          fontWeight: 800,
          fontFamily: 'serif',
          border: '1px solid #D94F35',
        }}
      >
        N
      </div>
    ),
    {
      ...size,
    }
  );
}
