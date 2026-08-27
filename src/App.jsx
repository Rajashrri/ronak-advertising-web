  import { useState } from "react";
  import "./responsive.css";
  import "./assets/font/font.css";
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import Layout from "./routes/Layout";

  import { useEffect } from "react";
  import { useLocation } from "react-router-dom";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  import Home from "./pages/Home";
  import About from "./pages/About";
  import Location from "./pages/Location";
  import LocationList from "./pages/LocationList";
  import Team from "./pages/Team";
  import LocationDetails from "./pages/LocationDetails";
  import BlogList from "./pages/BlogList";
  import BlogDetails from "./pages/BlogDetails";
  import Contact from "./pages/Contact";
  import Media from "./pages/Media";
  import CaseStudy from "./pages/CaseStudy";
  import CaseStudydetails from "./pages/CaseStudydetails";
  import Error from "./pages/Error";
  import ThankYou from "./pages/ThankYou";

  import loader from "./assets/imgs/loader.mp4"

  function App() {
    const [count, setCount] = useState(0);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }, []);

    if (loading) {
      return (
        <div className="loader-wrapper">
          <div className="loader">
                  <video
            src={loader}
            autoPlay
            muted
            playsInline
            loop
          />
          </div>
        </div>
      )
    }

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/location" element={<LocationList />} />
              <Route path="/location/:slug" element={<Location />} />
              <Route
                path="/location-details/:slug"
                element={<LocationDetails />}
              />

              <Route path="/team" element={<Team />} />
              <Route path="/blogs" element={<BlogList />} />
              <Route path="/blogs/:slug" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogDetails />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/media" element={<Media />} />
              <Route path="/case-study" element={<CaseStudy />} />
              <Route path="/case-study/:slug" element={<CaseStudydetails />} />
              <Route path="/*" element={<Error />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }

  export default App;
