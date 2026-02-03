import { handleCourses } from "./api/courses.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // API Courses
    if (
      url.pathname.startsWith("/api/courses") ||
      url.pathname.startsWith("/api/admin/courses")
    ) {
      return handleCourses(request, env);
    }

    // fallback
    return new Response("EDU Worker running", { status: 200 });
  }
};
