import Link from 'next/link';

interface LocationCoursesProps {
  courses: string[];
}

export default function LocationCourses({ courses }: LocationCoursesProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Courses Available Here</h2>
      <div className="flex flex-wrap gap-4">
        {courses.map((course, idx) => (
          <Link
            key={idx}
            href={`/course/${course.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-red-50 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-100 transition"
          >
            {course}
          </Link>
        ))}
      </div>
    </div>
  );
}