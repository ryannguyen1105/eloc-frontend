import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "Danh mục", path: "/catalog" },
  { title: "Chi tiết", path: "/about" },
  { title: "Liên hệ", path: "/contact" },
];

const rightLinks = [
  { title: "Đăng nhập", path: "/login" },
  { title: "Đăng ký", path: "/register" },
];

const navStyles = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "#baecf9",
  },
};

type Props = {
  darkMode: boolean;
  handleThemeChange: () => void;
};

export default function NavBar({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Typography
        //   variant="h5"
          component={NavLink}
          to="/"
        //   sx={{ color: "inherit", textDecoration: "none", fontWeight: "bold" }}
        sx={navStyles}
        >
          Điện Máy Lộc
        </Typography>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          {midLinks.map(({ title, path }) => (
            <Button
              component={NavLink}
              to={path}
              key={path}
              sx={
                // color: "inherit",
                // typography: "body1",
                // textTransform: "uppercase",
                // "&.active": { color: "#baecf9" },
                // minWidth: "unset",
                // px: 2,
                // fontWeight: "bold",
                navStyles
              }
            >
              {title}
            </Button>
          ))}
        </List>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <List sx={{ display: "flex", flexDirection: "row" }}>
            {rightLinks.map(({ title, path }) => (
              <Button
                component={NavLink}
                to={path}
                key={path}
                sx={
                    navStyles
                //   color: "inherit",
                //   textTransform: "uppercase",
                //   minWidth: "unset",
                //   px: 2,
                //   fontWeight: "bold",
                }
              >
                {title}
              </Button>
            ))}
          </List>

          <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <IconButton onClick={handleThemeChange} color="inherit">
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
