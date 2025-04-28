"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PreviewImageProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function PreviewImage({
  src,
  alt,
  title,
  subtitle,
  width = 600,
  height = 400,
  className = "",
}: PreviewImageProps) {
  const [error, setError] = useState(false);
  const [svgTried, setSvgTried] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  // Try SVG version if JPG fails
  useEffect(() => {
    if (error && !svgTried && src.endsWith(".jpg")) {
      const svgSrc = src.replace(".jpg", ".svg");
      setCurrentSrc(svgSrc);
      setSvgTried(true);
      setError(false);
    }
  }, [error, svgTried, src]);

  // Color mapping for fallback backgrounds based on image name
  const getColorByImageType = (src: string): string => {
    if (src.includes("dashboard")) return "bg-blue-600";
    if (src.includes("department")) return "bg-green-600";
    if (src.includes("staff")) return "bg-indigo-600";
    if (src.includes("analytics")) return "bg-purple-600";
    if (src.includes("patient")) return "bg-blue-500";
    if (src.includes("security")) return "bg-gray-800";
    if (src.includes("financial")) return "bg-green-700";
    return "bg-blue-600";
  };

  // Extract title from src if not provided
  const getFallbackTitle = (): string => {
    if (title) return title;

    // Extract name from src path
    const fileName = src.split("/").pop()?.split(".")[0] || "";
    return fileName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (error && svgTried) {
    const bgColorClass = getColorByImageType(src);
    const displayTitle = getFallbackTitle();

    return (
      <div
        className={`flex items-center justify-center ${bgColorClass} text-white rounded-lg overflow-hidden ${className}`}
        style={{ width, height }}
      >
        <div className="text-center p-6">
          <h3 className="text-xl font-bold mb-2">{displayTitle}</h3>
          <p className="text-sm opacity-80">{subtitle || "Preview image"}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover rounded-lg ${className}`}
      onError={() => setError(true)}
      style={{ minHeight: "400px", objectFit: "cover" }}
    />
  );
}
