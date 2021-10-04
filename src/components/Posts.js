import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Posts.scss';

const Posts = ({ gists }) => {
  const getFormatDate = (date) => {
    const createdDate = moment(date).format('YYYYMMDD');
    const createdDateFormat = moment(date).format('LL').replace(',', '/');
    const fromNow = moment(createdDate, 'YYYYMMDD').fromNow();
    return {
      date: createdDateFormat,
      from_now: fromNow,
    };
  };

  const getGistsWithFormat = () => gists.slice(0, 5).map((gist) => {
    const { date, from_now } = getFormatDate(gist.created_at);
    const title = Object.keys(gist.files)[0];
    return {
      id: gist.id,
      date,
      from_now,
      title,
      files: gist.files,
      description: gist.description,
    };
  });

  return (
    <ul>
      {
        getGistsWithFormat().map((gist, i) => (
          <li key={gist.id}>
            <div className="flex-start">
              <p>{gist.date}</p>
              <p>.</p>
              <p className={i ? null : 'text-color'}>{gist.from_now}</p>
            </div>
            <div className="flex-start">
              <a href=".">{gist.title}</a>
              <input type="button" value="Read" />
            </div>
          </li>
        ))
      }
    </ul>
  );
};

Posts.propTypes = {
  gists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;
