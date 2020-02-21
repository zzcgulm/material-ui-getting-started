import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'


function NavBar(props) {

  return (
    <List component="nav">
      <ListItem component="ul">
        <li>
          <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
              Home
            </TypoGraphy>
          </ListItemText>
        </li>
        <li>
          <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
              Posts
            </TypoGraphy>
          </ListItemText>
        </li>
        <li>
          <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
              Contact
            </TypoGraphy>
          </ListItemText>
        </li>
      </ListItem >

    </List>
  )
}

export default NavBar;