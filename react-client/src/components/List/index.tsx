import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import { ListItem } from '../../components'
import { useUsers } from "../../graphql/queries/user";

const ListComponent = () => {
  const { status, data, error, isFetching }: any = useUsers();

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 860,
        borderRadius: 4,
        bgcolor: "background.paper",
      }}
    >
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {data.map((user: any) => (
            <div key={user.id}>
              <ListItem user={user} />
              <Divider variant="inset" component="li" />
            </div>
          ))}
          <div>{isFetching ? "Loading..." : " "}</div>
        </>
      )}
    </List>
  );
};

export default ListComponent;
