import React from 'react';
import { storiesOf } from '@storybook/react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Card from './';
import CardActions from './CardActions';
import CardContent from './CardContent';
import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import Avatar from '../Avatar';
import Button from '../Button';
import Typography from '../Typography';

import IconButton from '../IconButton';

const placeholderText = 'Lorem Ipsum';
const placeholderButtonText = 'Action Button';
const placeholderImageCaption = 'Image caption';
const placeholderImageUrl =
  'https://burst.shopifycdn.com/photos/horseshoe-bend-grand-canyon_373x.progressive.jpg';
const placeholderCardHeaderAvatarLetter = 'J';
const placeholderCardHeaderTitleText = 'Shrimp and Chorizo Paella';
const placeholderCardHeaderSubheader = 'September 14, 2016';
const placeholderCardContentText = `This impressive paella is a perfect party dish and a fun meal to cook
together with your guests. Add 1 cup of frozen peas along with the
mussels, if you like.`;

const StyledCard = Card.extend`
  width: 400px;
`;

const StyledCardMedia = CardMedia.extend`
  height: 0;
  padding-top: 56.25%;
`;

storiesOf('Card', module)
  .add('simple', () => (
    <StyledCard>
      <CardContent>{placeholderText}</CardContent>
      <CardActions>
        <Button size="small">{placeholderButtonText}</Button>
      </CardActions>
    </StyledCard>
  ))
  .add('media', () => (
    <StyledCard>
      <StyledCardMedia
        image={placeholderImageUrl}
        title={placeholderImageCaption}
      />
      <CardActions>
        <Button>{placeholderButtonText}</Button>
      </CardActions>
    </StyledCard>
  ))
  .add('complex', () => (
    <StyledCard>
      <CardHeader
        avatar={<Avatar>{placeholderCardHeaderAvatarLetter}</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={placeholderCardHeaderTitleText}
        subheader={placeholderCardHeaderSubheader}
      />
      <CardMedia
        className
        image={placeholderImageUrl}
        title={placeholderImageCaption}
      />
      <CardContent>
        <Typography component="p">{placeholderCardContentText}</Typography>
      </CardContent>
      <CardActions disableActionSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  ));
