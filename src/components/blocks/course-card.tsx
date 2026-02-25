import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Monitor } from "lucide-react";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card hover>
      <h3 className="font-heading text-xl text-charcoal">{course.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-warm-gray">
        {course.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-warm-gray">
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
        <h4 className="text-sm font-semibold text-charcoal">Innhold:</h4>
        <ul className="mt-2 space-y-1.5">
          {course.topics.map((topic) => (
            <li key={topic} className="flex items-start gap-2 text-sm text-warm-gray">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {course.instructor && (
        <div className="mt-4 border-t border-ash/20 pt-4">
          <Badge variant="ember">Kursholder: {course.instructor}</Badge>
        </div>
      )}
    </Card>
  );
}
