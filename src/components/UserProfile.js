import React from 'react';
import PropTypes from 'prop-types';

import './UserProfile.scss';

const UserProfile = ({ user }) => {
  const { avatar, name } = user;
  return (
    <div className="flex-start container-user-profile">
      <img
        src={avatar}
        alt={name}
        className="avatar-post"
      />
      <div>
        <h3 data-testid="show-name">{name}</h3>
        <p className="subtitle-post">Posts</p>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserProfile;
