import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogDetailsApi } from "../../utils/frontApi";
import blog2 from "../../assets/imgs/blog/blog2.png";
import Heading from "../reuse/Heading";
import BlogCard from "../reuse/BlogCard";
import blog1 from "../../assets/imgs/blog/blog.png";
import { Helmet } from "react-helmet-async";
const Details = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  useEffect(() => {
    getBlog();
  }, [slug]);

  const getBlog = async () => {
    try {
      const res = await getBlogDetailsApi(slug);

      if (res.data.success) {
        setBlog(res.data.data);
        setRelatedBlogs(res.data.relatedBlogs);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (blog) {
      const pageTitle = blog.metaTitle?.trim() || blog.title;

      document.title = `${pageTitle} | Blog | Ronak Advertising`;
    }
  }, [blog]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!blog) {
    return <h2>Blog not found</h2>;
  }
  const currentUrl = window.location.href;
  const shareTitle = blog.metaTitle || blog.title;
  return (
    <>
      <Helmet>
        <title>
          {(blog.metaTitle?.trim() || blog.title) +
            " | Blog | Ronak Advertising"}
        </title>

        <meta
          name="description"
          content={blog.metaDescription || blog.shortDescription || ""}
        />

        <meta name="keywords" content={blog.metaKeywords || ""} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.metaTitle || blog.title} />
        <meta
          property="og:description"
          content={blog.metaDescription || blog.shortDescription || ""}
        />
        <meta
          property="og:image"
          content={blog.featuredImage || blog.mainImage}
        />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle || blog.title} />
        <meta
          name="twitter:description"
          content={blog.metaDescription || blog.shortDescription || ""}
        />
        <meta
          name="twitter:image"
          content={blog.featuredImage || blog.mainImage}
        />
      </Helmet>
      <div className="p-70">
        <div className="custom-container blog-container1">
          <h1 data-gsap>{blog.title} </h1>
          <div className="social-main" data-gsap>
            <ul className="blogd">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M4.5 12.75C4.5 11.25 7.5 10.425 9 10.425C10.5 10.425 13.5 11.25 13.5 12.75V13.5H4.5M11.25 6.75C11.25 7.34674 11.0129 7.91903 10.591 8.34099C10.169 8.76295 9.59674 9 9 9C8.40326 9 7.83097 8.76295 7.40901 8.34099C6.98705 7.91903 6.75 7.34674 6.75 6.75C6.75 6.15326 6.98705 5.58097 7.40901 5.15901C7.83097 4.73705 8.40326 4.5 9 4.5C9.59674 4.5 10.169 4.73705 10.591 5.15901C11.0129 5.58097 11.25 6.15326 11.25 6.75ZM2.25 3.75V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H14.25C14.6478 15.75 15.0294 15.592 15.3107 15.3107C15.592 15.0294 15.75 14.6478 15.75 14.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75Z"
                    fill="#1A1A1A"
                  />
                </svg>
                {blog.author}
              </li>
              <li>
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 10.5H2.03906H1.5C0.65625 10.5 0 9.84375 0 9V1.5C0 0.679688 0.65625 0 1.5 0H4.24219C4.64062 0 5.01562 0.164062 5.29688 0.445312L5.92969 1.07812C6.21094 1.35938 6.58594 1.5 6.98438 1.5H9.75C10.5703 1.5 11.25 2.17969 11.25 3V3.75H10.125V3C10.125 2.8125 9.9375 2.625 9.75 2.625H6.98438C6.28125 2.625 5.625 2.36719 5.13281 1.875L4.5 1.24219C4.42969 1.17188 4.33594 1.125 4.24219 1.125H1.5C1.28906 1.125 1.125 1.3125 1.125 1.5V7.64062L2.71875 4.875C2.85938 4.64062 3.09375 4.5 3.375 4.5H12.75C13.0078 4.5 13.2656 4.64062 13.3828 4.875C13.5234 5.10938 13.5234 5.41406 13.3828 5.64844L10.7578 10.1484C10.6172 10.3594 10.3828 10.5 10.125 10.5H9Z"
                    fill="#1A1A1A"
                  />
                </svg>
                {blog.categoryId?.categoryName}
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M7.19922 3.60001V7.20001L9.59922 8.40001M13.1992 7.20001C13.1992 10.5137 10.5129 13.2 7.19922 13.2C3.88551 13.2 1.19922 10.5137 1.19922 7.20001C1.19922 3.8863 3.88551 1.20001 7.19922 1.20001C10.5129 1.20001 13.1992 3.8863 13.1992 7.20001Z"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>  
                {new Date(blog.date)
                  .toLocaleDateString("en-GB")
                  .replace(/\//g, "-")}
              </li>
            </ul>
            <div className="sociallinks">
              <h3>Share on</h3>
              <ul>
                <li>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M11.1996 10.8H13.1996L13.9996 7.59998H11.1996V5.99998C11.1996 5.17598 11.1996 4.39998 12.7996 4.39998H13.9996V1.71198C13.7388 1.67758 12.754 1.59998 11.714 1.59998C9.54201 1.59998 7.99961 2.92558 7.99961 5.35998V7.59998H5.59961V10.8H7.99961V17.6H11.1996V10.8Z"
                        fill="#FA0000"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5.55156 3.99997C5.55135 4.42432 5.38258 4.8312 5.08237 5.13111C4.78216 5.43102 4.37511 5.59938 3.95076 5.59917C3.52642 5.59896 3.11953 5.43018 2.81963 5.12998C2.51972 4.82977 2.35135 4.42272 2.35156 3.99837C2.35177 3.57402 2.52055 3.16714 2.82076 2.86723C3.12097 2.56733 3.52802 2.39896 3.95236 2.39917C4.37671 2.39938 4.78359 2.56816 5.0835 2.86836C5.38341 3.16857 5.55178 3.57562 5.55156 3.99997ZM5.59956 6.78397H2.39956V16.8H5.59956V6.78397ZM10.6556 6.78397H7.47156V16.8H10.6236V11.544C10.6236 8.61597 14.4396 8.34397 14.4396 11.544V16.8H17.5996V10.456C17.5996 5.51997 11.9516 5.70397 10.6236 8.12797L10.6556 6.78397Z"
                        fill="#FA0000"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <mask
                        id="mask0_8920_3739"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M0.0078125 0H15.3678V15.36H0.0078125V0Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_8920_3739)">
                        <path
                          d="M12.1038 0.719727H14.4594L9.31378 6.61577L15.3678 14.6403H10.6282L6.91323 9.77445L2.66729 14.6403H0.309527L5.8128 8.3317L0.0078125 0.720824H4.86816L8.22102 5.16754L12.1038 0.719727ZM11.2755 13.2272H12.5811L4.15501 2.05934H2.75506L11.2755 13.2272Z"
                          fill="#FA0000"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle} ${currentUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.60158 1.59998C14.02 1.59998 17.6016 5.18158 17.6016 9.59998C17.6016 14.0184 14.02 17.6 9.60158 17.6C8.18778 17.6024 6.79884 17.2283 5.57758 16.516L1.60477 17.6L2.68637 13.6256C1.97354 12.4039 1.5991 11.0144 1.60157 9.59998C1.60157 5.18158 5.18318 1.59998 9.60158 1.59998ZM6.87518 5.83998L6.71518 5.84638C6.61173 5.8535 6.51065 5.88067 6.41758 5.92638C6.33084 5.97558 6.25162 6.03701 6.18238 6.10878C6.08638 6.19918 6.03198 6.27758 5.97358 6.35358C5.67767 6.7383 5.51835 7.21063 5.52078 7.69598C5.52238 8.08798 5.62477 8.46958 5.78478 8.82638C6.11198 9.54798 6.65037 10.312 7.36077 11.02C7.53198 11.1904 7.69998 11.3616 7.88078 11.5208C8.76352 12.2979 9.8154 12.8584 10.9528 13.1576L11.4072 13.2272C11.5552 13.2352 11.7032 13.224 11.852 13.2168C12.0849 13.2045 12.3124 13.1414 12.5184 13.032C12.6231 12.9779 12.7253 12.9191 12.8248 12.856C12.8248 12.856 12.8586 12.833 12.9248 12.784C13.0328 12.704 13.0992 12.6472 13.1888 12.5536C13.256 12.4842 13.312 12.4037 13.3568 12.312C13.4192 12.1816 13.4816 11.9328 13.5072 11.7256C13.5264 11.5672 13.5208 11.4808 13.5184 11.4272C13.5152 11.3416 13.444 11.2528 13.3664 11.2152L12.9008 11.0064C12.9008 11.0064 12.2048 10.7032 11.7792 10.5096C11.7346 10.4902 11.6869 10.4791 11.6384 10.4768C11.5836 10.471 11.5283 10.4772 11.4761 10.4947C11.424 10.5122 11.3762 10.5408 11.336 10.5784C11.332 10.5768 11.2784 10.6224 10.7 11.3232C10.6668 11.3678 10.621 11.4015 10.5686 11.42C10.5162 11.4385 10.4594 11.441 10.4056 11.4272C10.3534 11.4133 10.3024 11.3956 10.2528 11.3744C10.1536 11.3328 10.1192 11.3168 10.0512 11.288C9.59188 11.0879 9.16673 10.8172 8.79118 10.4856C8.69038 10.3976 8.59678 10.3016 8.50078 10.2088C8.18606 9.90734 7.91178 9.56637 7.68477 9.19438L7.63758 9.11838C7.60419 9.06701 7.57681 9.01199 7.55598 8.95438C7.52558 8.83678 7.60478 8.74238 7.60478 8.74238C7.60478 8.74238 7.79918 8.52958 7.88958 8.41438C7.97758 8.30238 8.05198 8.19358 8.09998 8.11598C8.19438 7.96398 8.22398 7.80798 8.17438 7.68718C7.95038 7.13998 7.71891 6.59571 7.47998 6.05438C7.43278 5.94718 7.29278 5.87038 7.16558 5.85518C7.12238 5.84984 7.07917 5.84558 7.03597 5.84238C6.92856 5.83621 6.82085 5.83728 6.71357 5.84558L6.87518 5.83998Z"
                        fill="#FA0000"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(currentUrl);
                      alert("Blog link copied. Paste it on Instagram.");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M12.1924 1.59998H9.07719C7.66599 1.59998 6.54759 1.59998 5.67319 1.71838C4.77239 1.83998 4.04359 2.09598 3.46919 2.67278C2.89399 3.24958 2.63879 3.98158 2.51799 4.88558C2.40039 5.76398 2.40039 6.88638 2.40039 8.30318V12.9736C2.40039 14.18 3.13639 15.2136 4.18199 15.6472C4.12839 14.9192 4.12839 13.8992 4.12839 13.0496V9.04158C4.12839 8.01678 4.12839 7.13278 4.22279 6.42558C4.32439 5.66718 4.55319 4.94078 5.14039 4.35118C5.72759 3.76158 6.45159 3.53198 7.20679 3.42958C7.91079 3.33518 8.79079 3.33518 9.81239 3.33518H12.2684C13.2892 3.33518 14.1676 3.33518 14.8724 3.42958C14.6613 2.89061 14.2927 2.42777 13.8146 2.1014C13.3365 1.77504 12.7712 1.6003 12.1924 1.59998Z"
                        fill="#FA0000"
                      />
                      <path
                        d="M5.2793 9.11761C5.2793 6.93681 5.2793 5.84641 5.9545 5.16881C6.6289 4.49121 7.7145 4.49121 9.8873 4.49121H12.1913C14.3633 4.49121 15.4497 4.49121 16.1249 5.16881C16.8001 5.84641 16.7993 6.93681 16.7993 9.11761V12.9736C16.7993 15.1544 16.7993 16.2448 16.1249 16.9224C15.4497 17.6 14.3633 17.6 12.1913 17.6H9.8873C7.7153 17.6 6.6289 17.6 5.9545 16.9224C5.2793 16.2448 5.2793 15.1544 5.2793 12.9736V9.11761Z"
                        fill="#FA0000"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <figure className="mt-0" data-gsap>
            <img
              src={blog.mainImage}
              alt={blog.mainImageAlt || blog.title}
              alt=""
            />
          </figure>
          <div
            className="blogdata"
            data-gsap
            dangerouslySetInnerHTML={{ __html: blog.description }}
          ></div>
        </div>
      </div>
      {relatedBlogs?.length > 0 && (

      <div className="p-70">
        <div className="custom-container">
          <Heading
            title="Related Blogs"
            // subtitle="Socials"
            titleclass="text-black"
          />

          <div className="row mt-5">
            {relatedBlogs.map((item, index) => {
              return (
                <div className="col-lg-4" data-gsap key={index}>
                  <BlogCard data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      )}
    </>
  );
};

export default Details;
