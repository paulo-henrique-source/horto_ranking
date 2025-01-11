import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MdAlignHorizontalLeft } from "react-icons/md";
import { MdOutlineAlignVerticalBottom } from "react-icons/md";
import { IoIosPodium } from "react-icons/io";

import { GiHamburgerMenu } from "react-icons/gi";

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menu = [
    {
      title: "Vertical",
      icon: <MdAlignHorizontalLeft size={25} color='#ffffff' />,
    },
    {
      title: "Horizontal",
      icon: <MdOutlineAlignVerticalBottom size={25} color='#ffffff' />,
    },
    {
      title: "Podium",
      icon: <IoIosPodium size={25} color='#ffffff' />,
    },
  ];

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      role='presentation'
      onClick={toggleDrawer(false)}>
      <List>
        {menu.map((item) => (
          <ListItem
            key={item.title}
            disablePadding
            style={{ color: "#ffffff" }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <GiHamburgerMenu size={40} color='#f0b142' />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#2c4852", // Cor de fundo do Drawer
            color: "#000", // Cor do texto
          },
        }}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
