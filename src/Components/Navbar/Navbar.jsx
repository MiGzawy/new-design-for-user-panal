import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import './style.css'
import { List } from '@mui/icons-material';
import 'animate.css'


const Navbar = () => {
    return (
        <div className='nv-container'>
            <div className="nv-wrapper">
                <div className="nv-left">
                    <span className="nv-lang">En</span>
                    <div className="nv-search">
                        <input type="text" className="nv-input" />
                        <Search style={{color:'gray' , fontSize : 16}}/>
                    </div>
                </div>
                <div className="nv-center">
                    <div className="nv-logo">
                        <h1>Auction</h1>
                    </div>
                </div>
                <div className="nv-right">
                    <div className="nv-menu">
                        <p>SIGN IN</p>
                        </div>
                    <div className="nv-menu">
                        <Badge badgeContent={Math.floor(Math.random()*100)} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </div>
                    <div className="nv-list">
                    <List/>
                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default Navbar;
