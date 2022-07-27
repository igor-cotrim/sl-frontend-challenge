import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import { useUsers } from "../../graphql/queries/user";
import { ListItem } from "../../components";

const ListComponent = () => {
  const { users } = useUsers();

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 860,
        borderRadius: 4,
        bgcolor: "background.paper",
      }}
    >
      {users?.map((user) => (
        <div key={user.id}>
          <ListItem user={user} />
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
};

export default ListComponent;
