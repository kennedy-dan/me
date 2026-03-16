// components/ProjectDetails/TagSection.tsx
import React from "react";

interface TagSectionProps {
  title: string;
  subtitle: string;
  excerpt?: string;
  listArr?: string[];
}

export default function TagSection({
  title,
  subtitle,
  excerpt,
  listArr,
}: TagSectionProps): React.ReactElement {
  return (
    <section>
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Column - Title */}
        <div className="lg:col-span-3">
          <p className="text-xs font-mono text-gray-400 tracking-wider">
            {subtitle.toUpperCase()}
          </p>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-9 space-y-6">
          <h2 className="text-2xl lg:text-3xl font-light text-gray-900">
            {title}
          </h2>
          
          {excerpt && (
            <p className="text-gray-600 leading-relaxed">
              {excerpt}
            </p>
          )}
          
          {listArr && listArr.length > 0 && (
            <ul className="space-y-3 mt-6">
              {listArr.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-500">
                  <span className="text-gray-300 text-sm mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}