import { V3Badge } from "@/components/v3/ui/v3-badge";
import { Clock, Users, Monitor } from "lucide-react";
import type { Course } from "@/data/courses";

interface V3CourseCardProps {
  course: Course;
}

export function V3CourseCard({ course }: V3CourseCardProps) {
  return (
    <div className="border border-v3-stone bg-v3-paper p-8 transition-all duration-200 hover:border-v3-drift hover:shadow-md md:p-10">
      <h3 className="text-xl font-medium text-v3-heading">{course.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-v3-drift">
        {course.description}
      </p>

      {/* Metadata badges */}
      <div className="mt-5 flex flex-wrap gap-3">
        <V3Badge variant="moss">
          <Clock className="mr-1.5 h-3 w-3" />
          {course.duration}
        </V3Badge>
        <V3Badge>
          <Monitor className="mr-1.5 h-3 w-3" />
          {course.format}
        </V3Badge>
        <V3Badge>
          <Users className="mr-1.5 h-3 w-3" />
          {course.audience}
        </V3Badge>
      </div>

      {/* Topics */}
      <div className="mt-6 border-t border-v3-stone pt-6">
        <ul className="space-y-2.5">
          {course.topics.map((topic) => (
            <li
              key={topic}
              className="flex items-start gap-3 text-sm leading-relaxed text-v3-text"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-v3-moss" />
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructor */}
      {course.instructor && (
        <p className="mt-6 border-t border-v3-stone pt-5 text-xs text-v3-drift">
          Kursholder:{" "}
          <span className="font-medium text-v3-text">
            {course.instructor}
          </span>
        </p>
      )}
    </div>
  );
}
