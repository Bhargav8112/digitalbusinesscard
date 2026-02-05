import { ChevronRight } from "lucide-react";

export default function SocialCard({ icon, name }) {
  return (
    <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom">

      {/* Left side */}
      <div className="d-flex align-items-center gap-3">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ width: 36, height: 36 }}
        >
          {icon}
        </div>

        <span className="fw-medium text-dark">
          {name}
        </span>
      </div>

      {/* Right arrow */}
      <ChevronRight size={18} className="text-secondary" />
    </div>
  );
}
