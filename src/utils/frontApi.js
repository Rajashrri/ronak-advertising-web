import axios from "axios";

const frontApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/front`,
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

// =============================
// BLOG APIs
// =============================

export const getBlogsApi = (category = "") => {
  return frontApi.get(
    `/blogs${category ? `?category=${category}` : ""}`
  );
};
export const getFeaturedBlogsApi = () => {
  return frontApi.get("/featured-blogs");
};
export const getBlogDetailsApi = (slug) => {
  return frontApi.get(`/blog/${slug}`);
};

export const getBlogCategoriesApi = () => {
  return frontApi.get("/blog-categories");
};

// =============================
// CONTACT API
// =============================

export const contactApi = (data) => {
  return frontApi.post("/add-contact", data);
};
export const getLocationBySlugApi = (slug) => {
  return frontApi.get(`/location/${slug}`);
};
export const getLocationDetailApi = (slug) => {
  return frontApi.get(`/location-details/${slug}`);
};
export const careerApi = (data) => {
  return frontApi.post(
    `/career`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const getTeamMembersApi = () => {
  return frontApi.get("/team-members");
};

export const getTestimonialsApi = () => {
  return frontApi.get("/testimonials");
};

export const getClientsApi = () => {
  return frontApi.get(`/clients`);
};

export const getFeaturedMediaApi = () => {
  return frontApi.get("/featured-media");
};

export const getMediaCoverageApi = () => {
  return frontApi.get("/media-coverage");
};
export const getArticlesApi = () => {
  return frontApi.get("/articles");
};

export const getLocationsApi = () => {
  return frontApi.get("/locations");
};


export const getCaseStudiesApi = () => {
  return frontApi.get("/case-studies");
};

export const getCaseStudyDetailApi = (slug) => {
  return frontApi.get(`/case-study/${slug}`);
};

export const getCaseStudyTestimonialsApi = (slug) => {
  return frontApi.get(`/case-study/${slug}/testimonials`);
};

export const subscribeApi = (data) => {
  return frontApi.post("/subscribe", data);
};
// =============================
// OPTIONAL ERROR HANDLER
// =============================

frontApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      error.message = "Network error. Please check internet connection.";
    }

    if (error.response?.status === 404) {
      console.error("API Not Found");
    }

    if (error.response?.status === 500) {
      console.error("Server Error");
    }

    return Promise.reject(error);
  }
);

export default frontApi;