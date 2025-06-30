import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    submenu: [
      { name: "Wedding", path: "/services/wedding" },
      { name: "Birthday", path: "/services/birthday" },
      { name: "Corporate Events", path: "/services/corporate" },
    ],
  },
  { name: "Venue", path: "/venue" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const handleOpenServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };
  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavClick = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="static"
      sx={{
        mt: 2,
        mx: 5,
        borderRadius: 2,
        width: "1400px",
        backgroundColor: "#800080",
      }}
    >
      <Container maxWidth="xl" sx={{ px: 3 }}>
        {" "}
        <Toolbar disableGutters>
          <img
            src="https://png.pngtree.com/png-vector/20240614/ourmid/pngtree-creative-floral-l-logo-icon-art-illustration-high-resulation-transfarent-background-png-image_12733299.png"
            alt=""
            style={{ width: "50px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Laventra
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleNavClick(page.path)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "140px",
            }}
          >
            {pages.map((page) =>
              page.submenu ? (
                <Box key={page.name}>
                  <Button
                    onClick={handleOpenServicesMenu}
                    sx={{ color: "white", textTransform: "none" }}
                  >
                    {page.name}
                  </Button>
                  <Menu
                    anchorEl={anchorElServices}
                    open={Boolean(anchorElServices)}
                    onClose={handleCloseServicesMenu}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    {page.submenu.map((sub) => (
                      <MenuItem
                        key={sub.name}
                        onClick={() => {
                          handleNavClick(sub.path);
                          handleCloseServicesMenu();
                        }}
                      >
                        {sub.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={page.name}
                  onClick={() => handleNavClick(page.path)}
                  sx={{ color: "white", textTransform: "none" }}
                >
                  {page.name}
                </Button>
              )
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14592.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    handleCloseUserMenu();
                    if (setting === "Logout") {
                      navigate("/");
                    }
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
