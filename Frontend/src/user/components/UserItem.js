// import React from "react";
// import { Link } from "react-router-dom";

// import Avatar from "../../shared/components/UIElements/Avatar";
// import Card from "../../shared/components/UIElements/Card";
// import "./UserItem.css";

// const UserItem = (props) => {
//   return (
//     <li className="user-item">
//       <Card className="user-item__content">
//         <Link to={`/${props.id}/places`}>
//           <div className="user-item__image">
//             <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.name} />
//           </div>
//           <div className="user-item__info">
//             <h2>{props.name}</h2>
//             <h3>
//               {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
//             </h3>
//           </div>
//         </Link>
//       </Card>
//     </li>
//   );
// };

// export default UserItem;

import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
            alt={props.name}
            className="profile-img"
          />
        </div>
        <div className="profile-content">
          <h3>{props.name}</h3>
          <p>
            {props.placeCount} {props.placeCount === 1 ? "Place shared" : "Places shared"}.
          </p>
            <Link to={`/${props.id}/places`} className="btn btn-message">View Places</Link>
          </div>
        </div>
    </li>
  );
};

export default UserItem;

