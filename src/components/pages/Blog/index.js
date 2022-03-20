import React, { useState } from "react";
import { Wrapper, Content, Image } from "./blog.styles";
import { useGlobalContext } from "../../../context";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineArticle } from "react-icons/md";
import { useReverseArray } from "../../../helpers/useReverseArray";

const Blog = () => {
  const { featuredBlog, favoriteBlogs, allBlogs } = useGlobalContext();
  const [noOfBlogs, setNoOfBlogs] = useState(5);
  const slice = useReverseArray(allBlogs).slice(0, noOfBlogs);

  const loadMore = () => {
    setNoOfBlogs(noOfBlogs + 5);
  };

  const showLess = () => {
    setNoOfBlogs(5);
  };

  var moreLessButton;

  if (noOfBlogs >= allBlogs.length) {
    moreLessButton = <button onClick={() => showLess()}>Show Less</button>;
  }
  if (noOfBlogs < allBlogs.length) {
    moreLessButton = <button onClick={() => loadMore()}>Load More</button>;
  }

  return (
    <Wrapper>
      <Content>
        <div className="grid">
          <a href={featuredBlog.link} className="featured" target="_blank">
            <div className="img-wrapper">
              <img src={featuredBlog.img} alt={featuredBlog.title} />
            </div>
            <h3>{featuredBlog.title}</h3>
            <p>{featuredBlog.desc}</p>
          </a>
          <aside className="favorites-wrapper">
            <h3>
              Favorites <AiOutlineStar />
            </h3>
            <ul className="favorites">
              {favoriteBlogs.map((blog) => {
                const { id, link, title } = blog;
                return (
                  <li key={id}>
                    {title}
                    <a href={link} target="_blank">
                      View
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>
          <aside className="all-blogs">
            <h3>
              Articles <MdOutlineArticle />
            </h3>
            <ul>
              {slice.map((blog) => {
                const { id, link, title } = blog;
                return (
                  <li key={id}>
                    {title}
                    <a href={link} target="_blank">
                      View
                    </a>
                  </li>
                );
              })}
            </ul>
            {moreLessButton}
          </aside>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Blog;
