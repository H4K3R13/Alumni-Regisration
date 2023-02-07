import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import SchoolIcon from '@mui/icons-material/School';

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
            <SchoolIcon color="primary"/>
        <NavLink to="/" activeStyle>
            NASC
        </NavLink>
		<NavLink to="/SignIn" activeStyle>
			SignIn
		</NavLink>
		<NavLink to="/SignUp" activeStyle>
			SignUp
		</NavLink>
		<NavLink to="/Gallery" activeStyle>
			Gallery
		</NavLink>
		<NavLink to="/About" activeStyle>
			About
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
