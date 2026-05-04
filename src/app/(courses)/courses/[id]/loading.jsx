const CourseDetailsSkeleton = () => {
  return (
    <section className="pt-24 pb-20 px-4 min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-6xl animate-pulse">
        {/* Back link skeleton */}
        <div className="h-4 w-28 bg-gray-200 rounded-full mb-8" />

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6">
          {/* Image skeleton */}
          <div className="h-72 w-full bg-gray-200" />

          {/* Content */}
          <div className="p-8 space-y-5">
            {/* Badge */}
            <div className="h-5 w-20 bg-gray-200 rounded-full" />

            {/* Title */}
            <div className="space-y-2">
              <div className="h-7 bg-gray-200 rounded-lg w-3/4" />
              <div className="h-7 bg-gray-200 rounded-lg w-1/2" />
            </div>

            {/* Description */}
            <div className="space-y-2 pt-1">
              <div className="h-4 bg-gray-100 rounded w-full" />
              <div className="h-4 bg-gray-100 rounded w-full" />
              <div className="h-4 bg-gray-100 rounded w-2/3" />
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 bg-gray-100 rounded-lg" />
              ))}
            </div>

            {/* Stars */}
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 w-4 bg-gray-200 rounded" />
              ))}
              <div className="h-4 w-8 bg-gray-200 rounded ml-1" />
            </div>

            {/* Enroll button */}
            <div className="h-11 bg-gray-200 rounded-xl w-40" />
          </div>
        </div>

        {/* Curriculum Card */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <div className="p-8 space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="h-6 w-44 bg-gray-200 rounded-lg" />
              <div className="h-4 w-28 bg-gray-100 rounded-lg" />
            </div>

            {/* Sections */}
            {[1, 2, 3].map((si) => (
              <div
                key={si}
                className="border border-gray-100 rounded-2xl overflow-hidden"
              >
                {/* Section header */}
                <div className="bg-gray-50 px-5 py-3 flex items-center justify-between">
                  <div className="h-4 w-36 bg-gray-200 rounded" />
                  <div className="h-3 w-16 bg-gray-100 rounded" />
                </div>

                {/* Lessons */}
                {[1, 2, 3].map((li) => (
                  <div
                    key={li}
                    className="flex items-center justify-between px-5 py-3.5 border-t border-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-4 bg-gray-200 rounded-full shrink-0" />
                      <div className="h-3 bg-gray-100 rounded w-48" />
                    </div>
                    <div className="h-3 w-10 bg-gray-100 rounded" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsSkeleton;
