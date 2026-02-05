import { Clock } from "lucide-react";

export default function OpenHoursCard({ status, day, hours }) {
  return (
    <div className="bg-white mx-4 mt-6 p-4 rounded-2xl shadow-sm">
      <div className="flex items-center gap-2">
        <Clock size={16} />
        <span className="text-sm font-semibold">
          Open hours -
          <span
            className={
              status === "Closed"
                ? "text-red-500"
                : "text-green-600"
            }
          >
            {" "}{status}
          </span>
        </span>
      </div>

      <div className="flex justify-between mt-3 text-sm">
        <span className="font-medium">{day}</span>
        <span className="text-slate-400">{hours}</span>
      </div>
    </div>
  );
}
