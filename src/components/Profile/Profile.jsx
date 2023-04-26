import { PropTypes } from "prop-types";
import { Section, ProfileCard, Description, Avatar, Name, Tag, Location, Stats, Li, Label, Quantity } from "./Profile.styles";

export const Profile = ({ items: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
  return (
    <Section>
      <ProfileCard>
        <Description>
          <Avatar
            src={avatar}
            alt={username}          
          />
          <Name>{username}</Name>
          <Tag>{tag}</Tag>
          <Location>{location}</Location>
        </Description>

        <Stats>
          <Li>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
          </Li>
          <Li>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </Li>
          <Li>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </Li>
        </Stats>
      </ProfileCard>
    </Section>
  );
};

Profile.propTypes = {
  items: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
}; 