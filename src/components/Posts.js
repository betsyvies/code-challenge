import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import moment from 'moment';
import UserProfile from './UserProfile';
import { getUserGists } from '../queries/user';
import './Posts.scss';

const Posts = ({ userName, user }) => {
  const [gists, setGists] = useState([]);
  const [loading, setloading] = useState(true);

  const getFormatDate = (date) => {
    const createdDate = moment(date).format('YYYYMMDD');
    const createdDateFormat = moment(date).format('LL').replace(',', '/');
    const fromNow = moment(createdDate, 'YYYYMMDD').fromNow();
    return {
      date: createdDateFormat,
      from_now: fromNow,
    };
  };

  const getGistsWithFormat = (gistsAll) => gistsAll.slice(0, 5).map((gist) => {
    // eslint-disable-next-line camelcase
    const { date, from_now } = getFormatDate(gist.created_at);
    const title = Object.keys(gist.files)[0];
    const titleFirstLetterUpp = title.slice(0, 1).toUpperCase() + title.slice(1, title.length);
    return {
      id: gist.id,
      date,
      from_now,
      title: titleFirstLetterUpp,
      files: gist.files,
      description: gist.description,
    };
  });

  const getAllUserGists = async () => {
    try {
      const gistsAll = await getUserGists(userName);
      setGists(getGistsWithFormat(gistsAll));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    let mounted = true;
    getAllUserGists().then(() => {
      if (mounted) {
        setloading(false);
      }
    });

    return function cleanup() {
      mounted = false;
    };
  }, [user]);

  return (
    <ul>
      <UserProfile user={user} />
      { !loading ? gists.map((gist, i) => (
        <li key={gist.id}>
          <div className="flex-start">
            <p>{gist.date}</p>
            <p>.</p>
            <p className={!i ? 'text-color' : null}>{gist.from_now}</p>
          </div>
          <div className="flex-start container-title-post">
            <a href=".">{gist.title}</a>
            <a href="." className="text-color">Read</a>
          </div>
        </li>
      )) : (
        <span className="material-icons">
          autorenew
        </span>
      )}
    </ul>
  );
};

Posts.propTypes = {
  userName: PropTypes.string.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Posts;
