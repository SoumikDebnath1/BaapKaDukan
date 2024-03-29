// // Navbar.js
// import React, { useContext, useState } from 'react';
// import './Navbar.css';
// import logo from '../Assets/logo.png';
// import cart_icon from '../Assets/cart_icon.png';
// import { Link } from 'react-router-dom';
// import { ShopContext } from '../../context/ShopContext';
// import { auth } from '../../Config/Config';
// import { useNavigate } from 'react-router-dom';




// const Navbar = ({ user }) => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         const shouldLogout = window.confirm('Are you sure you want to log out?');
//         if (shouldLogout) {
//             auth.signOut().then(() => {
//                 navigate('/shop');
//             });
//         }

//     }
//     const { getTotalCartItems } = useContext(ShopContext);
//     const [menu, setMenu] = useState("shop");

//     const handleMenuClick = (selectedMenu) => {
//         setMenu(selectedMenu);
//     };

//     return (
//         <div className='navbar'>
//             <div className='nav-logo'>
//                 <img src={logo} alt="" />
//                 <p>SHOPER</p>
//             </div>
//             <ul className="nav-menu">
//                 <li onClick={() => handleMenuClick("shop")} className={menu === "shop" ? "active" : ""}>
//                     <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>  <hr />
//                 </li>
//                 <li onClick={() => handleMenuClick("mens")} className={menu === "mens" ? "active" : ""}>
//                     <Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link> <hr />
//                 </li>
//                 <li onClick={() => handleMenuClick("womens")} className={menu === "womens" ? "active" : ""}>
//                     <Link to='/Womens' style={{ textDecoration: 'none' }}>Women</Link>
//                     <hr />
//                 </li>

//                 <li onClick={() => handleMenuClick("kids")} className={menu === "kids" ? "active" : ""}>
//                     <Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link><hr />
//                 </li>
//                 <li onClick={() => handleMenuClick("stationary")} className={menu === "stationary" ? "active" : ""}>
//                     <Link to='/stationary' style={{ textDecoration: 'none' }}>Stationary</Link> <hr />
//                 </li>
//             </ul>
//             {!user && (
//                 <div className='nav-login-cart'>
//                     <Link to='/login' style={{ textDecoration: 'none' }}>
//                         <button>Login</button>
//                     </Link>
//                 </div>
//             )}
//             {user && (
//                 <div className='cart_icon'>
//                     <div className="nav-cart-count">{getTotalCartItems()}</div>
//                     <Link to='/cart' style={{ textDecoration: 'none' }}>
//                         <img src={cart_icon} alt="" />
//                     </Link>
//                 </div>
//             )}
//             {user && (
//                 <div className='nav-login-cart'>
//                     <p className='user-name'> {user}</p>
//                     <button onClick={handleLogout} className='logut-button'>Logout</button>
//                 </div>
//             )}
//             <div className="Admin-Panel">
//                 <Link to='/admin' style={{ textDecoration: 'none' }}><button>Admin</button></Link>
//             </div>

//         </div>
//     );
// };

// export default Navbar;
    // Navbar.js
    import React, { useContext, useState } from 'react';
    import './Navbar.css';
    import logo from '../Assets/logo.png';
    import cart_icon from '../Assets/cart_icon.png';
    import { Link } from 'react-router-dom';
    import { ShopContext } from '../../context/ShopContext';
    import { auth } from '../../Config/Config';
    import { useNavigate } from 'react-router-dom';
    
    const Navbar = ({ user }) => {
        const navigate = useNavigate();
        const { getTotalCartItems } = useContext(ShopContext);
        const [menu, setMenu] = useState("shop");
    
        const handleLogout = () => {
            const shouldLogout = window.confirm('Are you sure you want to log out?');
            if (shouldLogout) {
                auth.signOut().then(() => {
                    navigate('/shop');
                });
            }
        };
    
        const handleMenuClick = (selectedMenu) => {
            setMenu(selectedMenu);
        };
    
        const showSidebar = () => {
            const sidebar = document.querySelector('.sidebar');
            sidebar.style.display = 'flex';
        };
    
        const closeSidebar = () => {
            const sidebar = document.querySelector('.sidebar');
            sidebar.style.display = 'none';
        };
        
        return (
            

            <body>
                <nav>
                    <ul className="sidebar" >
                      
                        <li onClick={closeSidebar}><a><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                        <li><a style={{ textDecoration: 'none', color: 'rgb(253, 253, 253)' }}>Menu</a></li>
                        
                        <li><Link to='/cart' onClick={() => handleMenuClick("shop")}>{getTotalCartItems()}<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg></Link></li>
                        <li><Link to='/' onClick={() => handleMenuClick("shop")}>Home</Link></li>
                        <li><Link to='/Womens' onClick={() => handleMenuClick("shop")}>Womens</Link></li>
                        <li><Link to='/mens' onClick={() => handleMenuClick("shop")}>Mens</Link></li>
                        <li><Link to='/kids' onClick={() => handleMenuClick("shop")}>Kids</Link></li>
                        <li><a href="" style={{ color: 'rgb(246, 156, 156)', textDecoration: 'none' }}>About</a></li>
                    </ul>
                    <ul >
                    <li><a >MY STORE</a></li>
                        
                        <li className='hideOnMobile1'><Link to='/' onClick={() => handleMenuClick("shop")} className='a1'>SHOP</Link></li>
                        <li className='hideOnMobile1'><Link to='/Womens' onClick={() => handleMenuClick("shop")}>Womens</Link></li>
                        <li className='hideOnMobile1'><Link to='/mens' onClick={() => handleMenuClick("shop")}>Mens</Link></li>
                        <li className='hideOnMobile1'><Link to='/kids' onClick={() => handleMenuClick("shop")}>Kids</Link></li>
                        <li><Link to='/cart' onClick={() => handleMenuClick("shop")}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>{getTotalCartItems()}</Link></li>
                        <li className="menu-button" onClick={showSidebar}><a><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
                    </ul>
                </nav>
               
                
            
            </body>
          
        );
    };
    
    export default Navbar;
    
    
    
    

