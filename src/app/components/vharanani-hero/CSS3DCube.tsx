import { useRef, useEffect, useState, useCallback } from 'react';

interface CSS3DCubeProps {
  images: string[];
  activeIndex: number;
  size?: number;
  labels?: { title: string; category: string }[];
}

// Map activeIndex (0-5) to the rotation needed to show that face
const faceRotations = [
  { x: 0, y: 0 },       // Front (face 0)
  { x: 0, y: 180 },     // Back (face 1)
  { x: 0, y: -90 },     // Right (face 2)
  { x: 0, y: 90 },      // Left (face 3)
  { x: -90, y: 0 },     // Top (face 4)
  { x: 90, y: 0 },      // Bottom (face 5)
];

export function CSS3DCube({ images, activeIndex, size, labels }: CSS3DCubeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: -15, y: -25 });
  const [isDragging, setIsDragging] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const autoRotateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const targetRotation = useRef({ x: -15, y: -25 });
  const currentRotation = useRef({ x: -15, y: -25 });

  // Smooth lerp animation loop
  useEffect(() => {
    const animate = () => {
      const lerp = 0.08;
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * lerp;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * lerp;
      setRotation({ ...currentRotation.current });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // When activeIndex changes AND user is not dragging, snap to that face
  useEffect(() => {
    if (!isDragging && !isUserInteracting) {
      const target = faceRotations[activeIndex % 6];
      // Find closest equivalent rotation to avoid spinning the long way
      const currentY = targetRotation.current.y;
      const targetY = target.y;
      const diff = ((targetY - currentY) % 360 + 540) % 360 - 180;
      targetRotation.current = {
        x: target.x,
        y: currentY + diff,
      };
    }
  }, [activeIndex, isDragging, isUserInteracting]);

  // Auto-rotate when idle (no user interaction)
  useEffect(() => {
    if (!isDragging && !isUserInteracting) {
      const interval = setInterval(() => {
        targetRotation.current = {
          x: targetRotation.current.x,
          y: targetRotation.current.y + 0.3,
        };
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isDragging, isUserInteracting]);

  // Reset user interaction flag after 3 seconds of no dragging
  const resetInteractionTimer = useCallback(() => {
    if (autoRotateTimer.current) clearTimeout(autoRotateTimer.current);
    autoRotateTimer.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 4000);
  }, []);

  // Clear interaction timer on unmount
  useEffect(() => {
    return () => {
      if (autoRotateTimer.current) clearTimeout(autoRotateTimer.current);
    };
  }, []);

  // Pointer handlers (unified mouse + touch)
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    setIsUserInteracting(true);
    lastPointer.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastPointer.current.x;
    const deltaY = e.clientY - lastPointer.current.y;

    targetRotation.current = {
      x: targetRotation.current.x - deltaY * 0.4,
      y: targetRotation.current.y + deltaX * 0.4,
    };

    lastPointer.current = { x: e.clientX, y: e.clientY };
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    resetInteractionTimer();
  }, [resetInteractionTimer]);

  // Responsive cube size
  const [cubeSize, setCubeSize] = useState(size || 280);
  useEffect(() => {
    if (size) {
      setCubeSize(size);
      return;
    }
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 640) setCubeSize(200);
      else if (w < 1024) setCubeSize(240);
      else setCubeSize(280);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [size]);

  const faceDistance = cubeSize / 2;

  // Ensure we have 6 images
  const faces = [...images];
  if (images.length > 0) {
    while (faces.length < 6) {
      faces.push(images[faces.length % images.length]);
    }
  } else {
    while (faces.length < 6) {
      faces.push('');
    }
  }

  const faceConfigs = [
    { transform: `translateZ(${faceDistance}px)`, img: faces[0] },
    { transform: `rotateY(180deg) translateZ(${faceDistance}px)`, img: faces[1] },
    { transform: `rotateY(90deg) translateZ(${faceDistance}px)`, img: faces[2] },
    { transform: `rotateY(-90deg) translateZ(${faceDistance}px)`, img: faces[3] },
    { transform: `rotateX(90deg) translateZ(${faceDistance}px)`, img: faces[4] },
    { transform: `rotateX(-90deg) translateZ(${faceDistance}px)`, img: faces[5] },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center select-none"
      style={{
        perspective: '1200px',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        style={{
          width: `${cubeSize}px`,
          height: `${cubeSize}px`,
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          position: 'relative',
        }}
      >
        {faceConfigs.map((face, i) => (
          <div
            key={face.transform}
            className="absolute inset-0 overflow-hidden"
            style={{
              transform: face.transform,
              backfaceVisibility: 'hidden',
              border: '2px solid var(--vharanani-burgundy)',
            }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${face.img})`,
                filter: 'brightness(0.7) contrast(1.1)',
                transition: 'background-image 0.6s ease',
              }}
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, rgba(137,43,28,0.05) 0%, rgba(44,45,45,0.6) 100%)',
              }}
            />

            {/* Face Label */}
            {labels && labels[i] && (
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div
                  className="typo-meta tracking-[0.2em] uppercase mb-1"
                  style={{ color: 'var(--vharanani-burgundy-60)' }}
                >
                  {labels[i].category}
                </div>
                <div
                  className="font-bebas-neue typo-copy-small text-white"
                  style={{ lineHeight: '1.1' }}
                >
                  {labels[i].title}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}