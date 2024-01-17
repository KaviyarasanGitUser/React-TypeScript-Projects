import React, { useState } from "react";
import { getAllPost } from "../../api/post";
import { useQuery } from "@tanstack/react-query";
import { getFirstPost } from "../../api/post";
import "./GetPost.css";

function GetPost() {
  const [isPosts, setIsPosts] = useState(true);

  const getPostQuery = useQuery({
    queryKey: ["getPost"],
    queryFn: getAllPost,
  });

  const getFirstPostQuery = useQuery({
    queryKey: ["getFirstPost"],
    queryFn: () => getFirstPost(1),
  });

  if (getPostQuery.isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <div className="button-container">
        <button className="post-header-button" onClick={() => setIsPosts(true)}>
          Get all post
        </button>
        <button className="post-header-button" onClick={() => setIsPosts(false)}>
          First Post
        </button>
      </div>
      {isPosts &&
        getPostQuery.data?.map((e: any) => {
          return (
            <div className="single-post" key={e.id}>
              <p className="bold">{e.title}</p>
              <p>{e.body}</p>
            </div>
          );
        })}
      <>
        {!isPosts && (
          <div className="single-post" key={getFirstPostQuery.data.id}>
            <p className="bold">{getFirstPostQuery.data.title}</p>
            <p>{getFirstPostQuery.data.body}</p>
          </div>
        )}
      </>
    </div>
  );
}

export default GetPost;
