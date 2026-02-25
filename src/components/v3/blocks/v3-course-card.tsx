import { V3Badge } from "@/components/v3/ui/v3-badge";
import { Clock, Users, Monitor } from "lucide-react";
import type { Course } from "@/data/courses";

interface V3CourseCardProps {
  course: Course;
}

export function V3CourseCard({ course }: V3CourseCardProps) {
  return (
    <div className="border border-v3-stone/40 bg-v3-snow p-8 transition-all duration-300 hover:border-v3-stone md:p-10">
      <h3 className="text-xl font-medium text-v3-heading">{course.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-v3-drift">
        {course.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <V3Badge variant="moss">
          <Clock className="mr-1 h-3 w-3" />
          {course.duration}
        </V3Badge>
        <V3Badge>
          <Monitor className="mr-1 h-3 w-3" />
          {course.format}
        </V3Badge>
        <V3Badge>
          <Users className="mr-1 h-3 w-3" />
          {course.audience}
        </V3Badge>
      </div>

      <div className="mt-6 border-t border-v3-stone/30 pt-5">
        <ul className="space-y-2">
          {course.topics.map((topic) => (
            <li key={topic} className="flex items-start gap-2 text-sm text-v3-text">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-v3-moss" />
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {course.instructor && (
        <p className="mt-5 text-xs text-v3-drift">
          Kursholder: <span className="text-v3-text">{course.instructor}</span>
        </p>
      )}
    </div>
  );
}
