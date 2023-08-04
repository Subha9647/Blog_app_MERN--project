import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchAllBlogs = async () => {
      const res = await axios.get("http://localhost:9000/api/v1/get/allblogs", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setBlogs(res.data);
    };
    fetchAllBlogs();
  }, []);
  return (
    <>
      <main class="my-5">
        <div class="container shadow-lg ">
          <section class="text-center">
            <h2 class="mb-5 my-3">
              <strong>Latest posts</strong>
            </h2>

            <div class="row">
              {blogs && blogs.length > 0 ? (
                blogs.map((item) => {
                  return (
                    <div class="col-lg-4 col-md-12 mb-4">
                      <div class="card">
                        <div
                          class="bg-image hover-overlay ripple"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={`http://localhost:9000/${item.thumbnail}`}
                            class="img-fluid"
                          />
                          <a href="#!">
                            <div
                              class="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </a>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">{item.title}</h5>
                          <p class="card-text">{item.description}</p>
                          <Link
                            to={`/blog/${item._id}`}
                            class="btn btn-primary"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2>Loading..</h2>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
