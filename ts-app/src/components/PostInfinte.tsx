import { useInfiniteQuery } from "@tanstack/react-query";
import { getPaginatedPost } from "../api/post";
import React from "react";

export function PostInfinte() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["posts", "infinite"],
      initialPageParam: 1,
      getNextPageParam: (prevData: any) => prevData.nextPage,
      queryFn: ({ pageParam }) => getPaginatedPost(pageParam),
    });

  return (
    <>
      {data?.pages
        .flatMap((data) => data?.post)
        .map((e) => (
          <div className="single-post" key={e.id}>
            <p className="bold">{e.title}</p>
            <p>{e.body}</p>
          </div>
        ))}
      <div>
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            className="post-header-button"
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
}
