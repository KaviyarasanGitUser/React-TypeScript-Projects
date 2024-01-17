import React, { useRef } from "react";
import { createPost, getAllPost } from "../api/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const CreatePost: React.FC = observer((current: any) => {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (titleRef.current && bodyRef.current) {
      const newPost = {
        title: titleRef.current.value,
        body: bodyRef.current.value,
      };
      postMutation.mutate(newPost);
    }
  };

  const postMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["getPost"] as any);
      console.log(data);
    },
  });
  return (
    <div className="form-container">
      <form className="form-style" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="form-label">Title</label>
          <input className="form-input" type="text" ref={titleRef} />
        </div>
        <div className="input-container">
          <label className="form-label">Body</label>
          <input className="form-input" type="text" ref={bodyRef} />
        </div>
        <button
          className="submit-button"
          onClick={() => {
            nav("/PostDetails");
            console.log("hello");
          }}
        >
          Create Post
        </button>
      </form>
    </div>
  );
});

export default CreatePost;
