import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Description,
  ProfileAvatar,
  ProfileName,
  ProfileTagLocation,
  ProfileStatistics,
  StatisticsItem,
  StatisticsLabel,
  StatisticsQuantity,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrap>
      <Description>
        <ProfileAvatar src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <ProfileTagLocation>@{tag}</ProfileTagLocation>
        <ProfileTagLocation>{location}</ProfileTagLocation>
      </Description>
      <ProfileStatistics>
        <StatisticsItem>
          <StatisticsLabel>Followers</StatisticsLabel>
          <StatisticsQuantity>{stats.followers}</StatisticsQuantity>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsLabel>Views</StatisticsLabel>
          <StatisticsQuantity>{stats.views}</StatisticsQuantity>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsLabel>Likes</StatisticsLabel>
          <StatisticsQuantity>{stats.likes}</StatisticsQuantity>
        </StatisticsItem>
      </ProfileStatistics>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
