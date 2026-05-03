export const getCourses = async () => {
  const course = await fetch(`${process.env.APP_URL}/data.json`);
  const res = await course.json();

  return res;
};
