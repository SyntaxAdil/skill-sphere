const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const getCourses = async () => {
  const course = await fetch(`${baseUrl}/data.json`);
  const res = await course.json();

  return res;
};
export const getCourseById = async (id) => {
  const course = await fetch(`${baseUrl}/data.json`);
  const res = await course.json();

  const filter_course= res.filter((i) => i.id === Number(id));
  return filter_course[0]
};
