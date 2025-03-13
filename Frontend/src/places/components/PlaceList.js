// import React from "react";

// import "./PlaceList.css";
// import Card from "../../shared/components/UIElements/Card";
// import PlaceItem from "./PlaceItem";
// import Button from "../../shared/components/FormElements/Button";

// const PlaceList = (props) => {
//   console.log(props);
//   if (props.items.length === 0) {
//     return (
//       <div className="place-list center">
//         <Card>
//           <h2>No Places found. Maybe create one?</h2>
//           <Button to="/places/new">Share Place</Button>
//         </Card>
//       </div>
//     );
//   }
//   return (
//     <div className="place-list-bg">
//       <ul className="place-list">
//         {props.items.map((place) => (
//           <PlaceItem
//             key={place.id}
//             id={place.id}
//             image={place.image}
//             title={place.title}
//             description={place.description}
//             address={place.address}
//             creatorId={place.creator}
//             coordinates={place.location}
//             onDelete={props.onDeletePlace}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PlaceList;


import React, { useState } from "react";

import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";

const PlaceList = (props) => {
  // State for tracking the current index of the visible slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the left arrow click (previous slide, 2 items)
  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.floor(props.items.length / 2) : prevIndex - 1
    );
  };

  // Handle the right arrow click (next slide, 2 items)
  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.floor(props.items.length / 2)
        ? 0
        : prevIndex + 1
    );
  };

  // If no places found
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  // Items to show in the current slide (2 items per slide)
  const itemsToShow = props.items.slice(currentIndex * 2, currentIndex * 2 + 2);

  // Disable the left arrow when on the first slide
  const isLeftArrowDisabled = currentIndex === 0;

  // Disable the right arrow when on the last slide
  const isRightArrowDisabled = currentIndex === Math.floor(props.items.length / 2);

  return (
    <div className="place-list-bg">
      {/* Left Arrow */}
      <button
        className="slider-arrow left"
        onClick={handleLeftArrowClick}
        disabled={isLeftArrowDisabled} // Disable if on the first slide
      >
        &#8249; {/* Left arrow symbol */}
      </button>

      {/* Slider Container */}
      <div className="place-slider-container">
        <ul
          className="place-list"
          // style={{ transform: `translateX(-${currentIndex * 50}%)` }} // Move by 50% per slide (2 items at once)
        >
          {itemsToShow.map((place) => (
            <PlaceItem
              key={place.id}
              id={place.id}
              image={place.image}
              title={place.title}
              description={place.description}
              address={place.address}
              creatorId={place.creator}
              coordinates={place.location}
              onDelete={props.onDeletePlace}
            />
          ))}
        </ul>
      </div>

      {/* Right Arrow */}
      <button
        className="slider-arrow right"
        onClick={handleRightArrowClick}
        disabled={isRightArrowDisabled} // Disable if on the last slide
      >
        &#8250; {/* Right arrow symbol */}
      </button>
    </div>
  );
};

export default PlaceList;
