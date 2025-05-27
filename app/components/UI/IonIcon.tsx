'use client';

import React, { useEffect, useState } from 'react';

interface IonIconProps {
  name: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function IonIcon({ name, style, className }: IonIconProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return a placeholder during SSR
    return <span style={style} className={className}>⚙</span>;
  }

  // Create the ion-icon element using React's createElement
  return React.createElement('ion-icon', {
    name,
    style,
    className,
  });
}