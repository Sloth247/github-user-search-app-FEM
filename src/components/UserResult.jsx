import { useContext, useEffect } from 'react';
import dateFormat from 'dateformat';
import './UserResult.scss';
import CompanyIcon from '../components/svg/CompanyIcon';
import LocationIcon from '../components/svg/LocationIcon';
import TwitterIcon from '../components/svg/TwitterIcon';
import WebsiteIcon from '../components/svg/WebsiteIcon';
import GithubContext from '../context/GithubContext';
import ThemeContext from '../context/ThemeContext';
import NotFound from './NotFound';
import Loading from './Loading';
// import { useParams } from 'react-router-dom';

export default function UserResult() {
  const { user, loading, error, getUser } = useContext(GithubContext);
  const { mode } = useContext(ThemeContext);
  //   const params = useParams();

  useEffect(() => {
    getUser('octocat');
  }, []);

  if (!loading && !error) {
    return (
      <div className={`user-container ${mode}`}>
        <img src={user.avatar_url} alt="" className="user__avatar" />
        <div className="user__profile-container">
          <h1 className={`user__name ${mode}`}>{user.name}</h1>
          <a
            href={`http://github.com/${user.login}`}
            target="_blank"
            rel="noreferrer"
            className="user__accountname"
          >
            @{user.login}
          </a>
          <p className="user__date">
            Joined {dateFormat(user.created_at, 'dd mmm yyyy')}
          </p>
        </div>
        <p className="user__bio">
          {user.bio ? user.bio : 'This profile has no bio'}
        </p>

        <ul className={`user__stats ${mode}`}>
          <li className="user__stats--item">
            <p>Repos</p>
            <p className="user__stats-num">{user.public_repos}</p>
          </li>
          <li className="user__stats--item">
            <p>Followers</p>
            <p className="user__stats-num">{user.followers}</p>
          </li>
          <li className="user__stats--item">
            <p>Following</p>
            <p className="user__stats-num">{user.following}</p>
          </li>
        </ul>
        <div className="user__grid">
          <div
            className={
              user.location
                ? `user__grid--item location`
                : `user__grid--item location opacity`
            }
          >
            <LocationIcon />
            {user.location ? (
              <span>{user.location}</span>
            ) : (
              <span className="na">Not Available</span>
            )}
          </div>
          <div
            className={
              user.blog
                ? `user__grid--item website`
                : `user__grid--item website opacity`
            }
          >
            <WebsiteIcon />
            {user.blog ? (
              <a
                href={user.blog}
                target="_blank"
                rel="noreferrer"
                className="user__grid--link"
              >
                {user.blog}
              </a>
            ) : (
              <span className="na">Not Available</span>
            )}
          </div>
          <div
            className={
              user.twitter_username
                ? `user__grid--item twitter`
                : `user__grid--item twitter opacity`
            }
          >
            <TwitterIcon />
            {user.twitter_username ? (
              <a
                href={`http://twitter.com/${user.twitter_username}`}
                target="_blank"
                rel="noreferrer"
                className="user__grid--link"
              >
                {user.twitter_username}
              </a>
            ) : (
              <span className="na">Not Available</span>
            )}
          </div>
          <div
            className={
              user.company
                ? `user__grid--item company`
                : `user__grid--item company opacity`
            }
          >
            <CompanyIcon />
            {user.company ? (
              <span>{user.company}</span>
            ) : (
              <span className={`na ${mode}`}>Not Available</span>
            )}
          </div>
        </div>
      </div>
    );
  } else if (error) {
    return <NotFound />;
  } else {
    return <Loading />;
  }
}
