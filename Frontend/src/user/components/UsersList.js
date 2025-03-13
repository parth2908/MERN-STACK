// import React from "react";

// import "./UsersList.css";
// import UserItem from "./UserItem";
// import Card from "../../shared/components/UIElements/Card";

// const UsersList = (props) => {
//   if (props.items.length === 0) {
//     return (
//       <div className="center">
//         <Card>
//           <h2>No Users Found.</h2>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="user-main">
//       <div className="userList-container">
//         <div className="abc">
//           <div className="d-flex">
//               <input
//                 className="form-control mb-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//                <button className="btn btn-outline-success" type="submit">
//                   Search
//                 </button>
        
//           </div>

//           <ul className="users-list">
//             {props.items.map((user) => {
//               return (
//                 <UserItem
//                   key={user.id}
//                   id={user.id}
//                   image={user.image}
//                   name={user.name}
//                   placeCount={user.places.length}
//                 />
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default UsersList;

// import React, { useState } from "react";
// import "./UsersList.css";
// import UserItem from "./UserItem";
// import Card from "../../shared/components/UIElements/Card";

// const UsersList = (props) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredUsers, setFilteredUsers] = useState(props.items);

//   const handleSearch = () => {
//     const filtered = props.items.filter((user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredUsers(filtered);
//   };

//   if (filteredUsers.length === 0) {
//     return (
//       <div className="center">
//         <Card>
//           <h2>No Users Found.</h2>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="user-main">
//       <div className="userList-container">
//         <div className="abc">
//           <div className="d-flex">
//             <input
//               className="form-control mb-2"
//               type="search"
//               placeholder="Search users..."
//               aria-label="Search"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button className="btn btn-success search-butt" onClick={handleSearch}>
//               Search
//             </button>
//           </div>

//           <ul className="users-list">
//             {filteredUsers.map((user) => (
//               <UserItem
//                 key={user.id}
//                 id={user.id}
//                 image={user.image}
//                 name={user.name}
//                 placeCount={user.places.length}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UsersList;
import React, { useState, useRef, useEffect } from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(props.items);
  const scrollContainer = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Initialize Bootstrap carousel
    if (carouselRef.current) {
       new window.bootstrap.Carousel(carouselRef.current, {
        interval: 20000, // 20 seconds
        wrap: true,
      });
    }
  }, []);

  const handleSearch = () => {
    const filtered = props.items.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleNext = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += 250; // Adjust scroll distance
    }
  };

  const handlePrev = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft -= 250;
    }
  };

  if (filteredUsers.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Users Found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <div className="user-main">
      <div className="userList-container">
        <div className="abc">
          {/* Search Bar */}
          <div className="d-flex">
            <input
              className="form-control mb-2"
              type="search"
              placeholder="Search users..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-success search-butt" onClick={handleSearch}>
              Search
            </button>
          </div>
          
       {/* Bootstrap Carousel */}
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="http://picsum.photos/800/400" className="d-block w-100 carousel-img" alt="image1" />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="http://picsum.photos/800/400" className="d-block w-100 carousel-img" alt="image2" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="http://picsum.photos/800/400" className="d-block w-100 carousel-img" alt="image3" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


          {/* Slider Navigation */}
          <div className="slider-container">
            <button className="slider-btn left" onClick={handlePrev}>
              &#9665;
            </button>

            <ul className="users-list" ref={scrollContainer}>
              {filteredUsers.map((user) => (
                <li key={user.id}>
                  <UserItem
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places.length}
                  />
                </li>
              ))}
            </ul>

            <button className="slider-btn right" onClick={handleNext}>
              &#9655;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;

