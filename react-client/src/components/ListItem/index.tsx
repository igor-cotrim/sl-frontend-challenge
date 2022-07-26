import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const ListItemComponent = ({ user }: any) => (
  <ListItem key={user.id} alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt={user.name} src={user.avatar} />
    </ListItemAvatar>
    <ListItemText
      primary={user.name}
      secondary={
        <>
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            Email{` - ${user.email}`}
          </Typography>
          <br />
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            Phone{` - ${user.phone}`}
          </Typography>
        </>
      }
    />
  </ListItem>
);

export default ListItemComponent;
