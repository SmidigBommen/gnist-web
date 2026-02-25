import { V2Card } from "@/components/v2/ui/v2-card";
import { V2Badge } from "@/components/v2/ui/v2-badge";
import { Clock, Users, Monitor } from "lucide-react";
import type { Course } from "@/data/courses";

interface V2CourseCardProps {
  course: Course;
}

export function V2CourseCard({ course }: V2CourseCardProps) {
  return (
    <V2Card hover>
      <h3 className="font-body text-xl font-semibold text-v2-heading">{course.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-v2-muted">
        {course.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-v2-muted">
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          {course.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <Monitor className="h-4 w-4" />
          {course.format}
        </span>
        <span className="flex items-center gap-1.5">
          <Users className="h-4 w-4" />
          {course.audience}
        </span>
      </div>

      <div className="mt-4">
        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-v2-cyan">
          Innhold
        </h4>
        <ul className="mt-2 space-y-1.5">
          {course.topics.map((topic) => (
            <li key={topic} className="flex items-start gap-2 text-sm text-v2-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-v2-cyan" />
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {course.instructor && (
        <div className="mt-4 border-t border-v2-border pt-4">
          <V2Badge variant="cyan">Kursholder: {course.instructor}</V2Badge>
        </div>
      )}
    </V2Card>
  );
}
