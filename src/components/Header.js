import { React } from 'react';
import logo from "../images/Logo.png";
import { menuItems } from "./menuItems.js"
import Menu from './Menu.js'

function HomePage(){
    return (
        <nav>
            <a href="/"><img alt="Logo that says Megan Kim" src={logo}/></a>
            <ul className="menus">
                {menuItems.map((menu, index) => {
                return <Menu items={menu} key={index} />;
                })}
            </ul>
        </nav>
    )
}
export default HomePage;