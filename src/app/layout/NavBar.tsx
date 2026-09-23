import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function NavBar({darkMode, handleThemeChange}: Props) {
  return (
    <AppBar position="fixed">
        <Toolbar sx={{justifyContent: 'space-between'}} >
            <Typography variant="h6">Điện Máy Lộc</Typography>
            <IconButton onClick={handleThemeChange} color="inherit" >
                {darkMode ? <DarkMode /> : <LightMode sx={{color: 'yellow'}} />}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}