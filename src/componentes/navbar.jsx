import React, { useContext } from "react";

export const Navbar = () => {
    const [cart, setCart] = useContext(CartContext)
    return (
        <nav>
            Tienda
          <ul className="nav-list">
              <li>
                items: <span className="contador">0</span>
              </li>
          </ul>
        </nav>
      );
    };