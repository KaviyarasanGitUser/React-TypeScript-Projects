import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getPaginatedPost } from "../api/post";

function PostPaginated() {
  const [page, setPage] = useState<number | undefined>(1);

  const paginatedQuery = useQuery({
    queryKey: ["paginated", { page }],
    queryFn: () => getPaginatedPost(page),
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      {paginatedQuery.data?.post.map((e: any) => {
        return (
          <div className="single-post" key={e.id}>
            <p className="bold">{e.title}</p>
            <p>{e.body}</p>
          </div>
        );
      })}
      <div className="page-button-container">
        {paginatedQuery.data?.previousPage && (
          <button
            className="post-header-button"
            onClick={() => setPage(paginatedQuery.data?.previousPage)}
          >
            Previous
          </button>
        )}
        {page}
        {paginatedQuery.data?.nextPage && (
          <button
            className="post-header-button"
            onClick={() => {
              setPage(paginatedQuery.data?.nextPage);
              console.log(page);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default PostPaginated;
