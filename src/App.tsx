import React from "react";
import "./App.css";
import {
    Drawer,
    makeStyles,
    Divider,
    ListItem,
    ListItemIcon,
    List,
    ListItemText,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Breadcrumbs,
    Link,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
    appBar: {
        height: 200,
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - 240px)`,
            marginLeft: 240,
        },
    },
    link: {
        display: "flex",
        color: "white",
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
    toolbar: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "flex-start"
        // justifyContent: "space-around"
    },
    drawerPaper: {
        display: "flex",
        width: 240,
    },
    profileIcons: {
        display: "flex",
        justifyContent: "space-evenly",
        margin: "20px 20px",
    },
    branding: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 20px",
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" noWrap>
                        Payments
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link href="/" className={classes.link}>
                            <HomeIcon className={classes.icon} />
                            Home
                        </Link>
                        <Link
                            href="/getting-started/installation/"
                            className={classes.link}
                        >
                            <HomeIcon className={classes.icon}/>
                            Reports
                        </Link>
                    </Breadcrumbs>
                </Toolbar>
            </AppBar>
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                <div className={classes.branding}>
                    <InboxIcon />
                    <Typography color="primary" variant="h5">
                        UI Dashboard
                    </Typography>
                </div>
                <Divider />
                <div className={classes.profileIcons}>
                    <InboxIcon />
                    <InboxIcon />
                    <InboxIcon />
                </div>
                <Divider />
                <List>
                    <ListItem button key={"Home"}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                    <ListItem button key={"Customers"}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Customers"} />
                    </ListItem>
                    <ListItem button key={"Payment"}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Payment"} />
                    </ListItem>
                    <ListItem button key={"Management"}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Management"} />
                    </ListItem>
                </List>
                <Divider />
                <List style={{ flexGrow: 1 }}>
                    <ListItem button key={"Products"}>
                        <ListItemText primary={"Products"} />
                    </ListItem>
                    <ListItem button key={"Orders"}>
                        <ListItemText primary={"Orders"} />
                    </ListItem>
                </List>
                <Typography align="center" variant="button" gutterBottom>
                    &#60; COLLAPSE MENU
                </Typography>
            </Drawer>
        </div>
    );
}

export default App;
