// components/ServiceCard.tsx
import { ServiceCardProps } from '../types/index';

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}