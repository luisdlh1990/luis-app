
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

const CartWidget = () => {
    return (
        <Badge badgeContent={8} color="warning">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;