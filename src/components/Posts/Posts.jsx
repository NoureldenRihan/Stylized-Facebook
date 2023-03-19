import Post from "../Post/Post";

function Posts() {
  // Each post should have
  // (postText) which is the original text on the post
  // (userName) which is the name of the user who posted
  // (time which) is the time passed since posting
  // (userImg) which is the image of the user who posted
  // (postImg) which is the main image in the post
  // (imgRef) which is a credit link to the author of the image if available (optional)

  return (
    <>
      <Post
        postText={"Aerial View of Road Between Green Grass Field"}
        userName={"Nourelden Rihan"}
        time={"20 mins"}
        userImg={"Nourelden Rihan Profile Pic.jpg"}
        postImg={"pexels-trushotz-3635300.jpg"}
        imgRef={
          "https://www.pexels.com/photo/aerial-view-of-road-between-green-grass-field-3635300/"
        }
      />
      <Post
        postText={"Beautiful View of Moraine Lake"}
        userName={"Nourelden Rihan"}
        time={"14 hours"}
        userImg={"Nourelden Rihan Profile Pic.jpg"}
        postImg={"pexels-jaime-reimer-2662116.jpg"}
        imgRef={
          "https://www.pexels.com/photo/beautiful-view-of-moraine-lake-2662116/"
        }
      />
      <Post
        postText={"Scenic Photo of A Forest With Sunlight"}
        userName={"Nourelden Rihan"}
        time={"2 days"}
        userImg={"Nourelden Rihan Profile Pic.jpg"}
        postImg={"pexels-jacob-colvin-1757363.jpg"}
        imgRef={
          "https://www.pexels.com/photo/scenic-photo-of-forest-with-sunlight-1757363/"
        }
      />
    </>
  );
}

export default Posts;
