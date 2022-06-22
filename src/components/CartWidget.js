
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { CartContext } from './CartContext';
import { useContext} from 'react';

const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <Badge  badgeContent={test.calcItemsQty()} color="warning">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;