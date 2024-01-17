import { useState } from "react";
import GetPost from "../../components/getPost/GetPost";
import CreatePost from "../../components/CreatePost";
import PostPaginated from "../../components/PostPaginated";
import { PostInfinte } from "../../components/PostInfinte";
import NavBar from "../../components/navBar/NavBar";
import "../home/Home.css";
import { observer } from "mobx-react-lite";
import "./PostDetail.css";

const PostDetails = observer(() => {
  const [presentPage, setPresentPage] = useState(<GetPost />);

  return (
    <>
      <div className="nav-bar-container">
        <NavBar active={2} />
      </div>
      <div className="button-container">
        <button
          className="post-header-button"
          onClick={() => setPresentPage(<GetPost />)}
        >
          Get Post
        </button>
        <button
          className="post-header-button"
          onClick={() =>
            setPresentPage(<CreatePost />)
          }
        >
          Create Post
        </button>
        <button
          className="post-header-button"
          onClick={() => setPresentPage(<PostPaginated />)}
        >
          PostPaginated
        </button>
        <button
          className="post-header-button"
          onClick={() => setPresentPage(<PostInfinte />)}
        >
          PostInfinite
        </button>
      </div>
      <div className="component-container">{presentPage}</div>
    </>
  );
});

export default PostDetails;
