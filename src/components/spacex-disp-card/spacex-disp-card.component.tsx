import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function SpacexDispCard(_cardData:any) {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const cardData = _cardData.cardData;
  return (
    <Card sx={{minHeight:"220px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "rgb(4, 228, 153)"}} aria-label="recipe">
            {cardData.name.substring(0,1)}
          </Avatar>
        }
        title={cardData.name}
        subheader={cardData.id}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>Manufactures:</b><br/>{cardData.manufacturers.toString()}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {cardData.twitter? <IconButton aria-label="twitter" href={cardData.twitter}  target="_blank">
            <TwitterIcon/>
        </IconButton>: null}
        {cardData.website? <IconButton aria-label="website" href={cardData.website}  target="_blank">
            <LanguageIcon/>
        </IconButton>: null}
        {cardData.wikipedia? <IconButton aria-label="wikipedia" href={cardData.wikipedia}  target="_blank">
            <img
                src={require("../../imgs/icons/wiki.png")}
                alt="wiki-icon"
                style={{ width: "24px" }}
            />
        </IconButton>: null}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{maxHeight:"100px", overflowY:"scroll"}}>
          <Typography variant="body2" color="text.secondary">
            {cardData.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}