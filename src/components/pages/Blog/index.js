import React, { useState, useEffect } from "react";
import { Wrapper, Content, Image } from "./blog.styles";
import { useGlobalContext } from "../../../context";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineArticle } from "react-icons/md";
import useWindowDimensions from "../../../helpers/useWindowDimension";
import useReverseArray from "../../../helpers/useReverseArray";

const Blog = () => {
  const { featuredBlog, favoriteBlogs, allBlogs } = useGlobalContext();
  const { width } = useWindowDimensions();
  const [noOfBlogs, setNoOfBlogs] = useState(5);

  const sliceBlogs = () => {
    let slice = [];
    if (width >= 800) {
      slice = allBlogs;
      return slice;
    }
    if (width < 800) {
      slice = allBlogs.slice(0, noOfBlogs);
      return slice;
    }
  };

  useEffect(() => {
    sliceBlogs();
  }, [width]);

  const showMore = () => {
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
    moreLessButton = <button onClick={() => showMore()}>Show More</button>;
  }

  return (
    <Wrapper>
      <Content>
        <div className="grid">
          {featuredBlog.map((blog) => {
            const { img, title, desc, link, id } = blog;
            return (
              <a href={link} className="featured" target="_blank" key={id}>
                <div className="img-wrapper">
                  <img src={img} alt={title} />
                </div>
                <div className="featured-info">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </a>
            );
          })}

          <aside className="favorites-wrapper">
            <h3>
              Favorites <AiOutlineStar />
            </h3>
            <ul className="favorites">
              {useReverseArray(allBlogs)
                .filter((blog) => blog.favorite === true)
                .map((blog) => {
                  const { id, link, title } = blog;
                  return (
                    <li key={id}>
                      <a href={link} target="_blank">
                        {title}
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
              {sliceBlogs().map((blog) => {
                const { id, link, title } = blog;
                return (
                  <li key={id}>
                    <a href={link} target="_blank">
                      {title}
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
