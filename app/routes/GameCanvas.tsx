import { useEffect, useRef } from 'react';
import { initGame } from './initGame';
import type { Application } from 'pixi.js';

export function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<Application | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      initGame(canvasRef.current).then((app) => {
        appRef.current = app;
      });
    }

    return () => {
      appRef.current?.destroy(true);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}