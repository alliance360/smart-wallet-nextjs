'use client';

import { useEffect, useRef } from 'react';

export default function QRCodeComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Import QR code library dynamically to avoid SSR issues
    const generateQR = async () => {
      try {
        const QRCode = (await import('qrcode')).default;
        const canvas = canvasRef.current;
        
        if (canvas) {
          // Generate QR code for your wallet URL
          await QRCode.toCanvas(canvas, 'https://finance.alliance360.club', {
            width: 160,
            margin: 2,
            color: {
              dark: '#163563', // Your blue color
              light: '#FFFFFF'
            }
          });
        }
      } catch (error) {
        console.error('Error generating QR code:', error);
        // Fallback if QR library fails
        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) {
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(0, 0, 160, 160);
            ctx.fillStyle = '#163563';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('QR Code', 60, 60);
          }
        }
      }
    };

    generateQR();
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      width={160}
      height={160}
      style={{
        border: '2px solid #163563',
        borderRadius: '8px',
        backgroundColor: 'white'
      }}
    />
  );
}