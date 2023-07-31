import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {useImperativeHandle} from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = React.forwardRef((props,ref) => {

    const navigate = useNavigate();

    useImperativeHandle(ref, () => ({
        toggleDrawerOuter(anchor, open) {
            toggleSideBar(anchor, open)
        } 
      }))

      function toggleSideBar(anchor, open) {
        setState({ ...state, [anchor]: open });
      }

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open });
    };

    const eventHandler = (e,eventname) => {
        navigate('/'+eventname);
    };

    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            <ListItem key='1' disablePadding>
                <ListItemButton onClick={(e) => eventHandler(e,'visitsched')}>
                    <ListItemIcon>
                        <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Visit Schedule' />
                </ListItemButton>
            </ListItem>
            <ListItem key='2' disablePadding>
                <ListItemButton onClick={(e) => eventHandler(e,'crf')}>
                    <ListItemIcon>
                        <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Case Report Form' />
                </ListItemButton>
            </ListItem>
            <ListItem key='3' disablePadding>
                <ListItemButton onClick={(e) => eventHandler(e,'site')}> 
                <ListItemIcon>
                    <ArrowRightOutlinedIcon />
                </ListItemIcon>
                    <ListItemText primary='Clinical Site' />
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            {['Portal Configuration', 'RTSM Integration', 'CTMS Integration'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    {index % 2 === 0 ? <ArrowRightOutlinedIcon /> : <ArrowCircleRightOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key='left'>
            <Drawer
                anchor='left'
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
            </React.Fragment>
        </div>
    );
  }
)

export default SideBar