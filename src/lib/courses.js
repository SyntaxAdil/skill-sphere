import data from "../data/data.json";

export const getCourses = async () => {
  return data;
};

export const getCourseById = async (id) => {
  const course = data.find((i) => i.id === Number(id));
  return course;
};
