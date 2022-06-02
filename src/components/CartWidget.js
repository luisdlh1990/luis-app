
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

const CartWidget = () => {
    return (
        <Badge badgeContent={1} color="warning">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;