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
        boxShadow: "8px 12px 12px rgb(0 0 0 / 0.4)",
        border: "1px solid #6726ff",
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
