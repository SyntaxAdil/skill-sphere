export const getCourses = async () => {
  const course = await fetch(`${process.env.APP_URL}/data.json`);
  const res = await course.json();

  return res;
};
export const getCourseById = async (id) => {
  const course = await fetch(`${process.env.APP_URL}/data.json`);
  const res = await course.json();

  const filter_course= res.filter((i) => i.id === Number(id));
  return filter_course[0]
};
