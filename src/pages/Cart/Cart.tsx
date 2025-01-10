import CartItem from "../../components/CartPage/CartItem/CartItem";
import CartTotal from "../../components/CartPage/CartTotal/CartTotal";
import Heading1 from "../../components/Reusable/Heading1/Heading1";
import Container from "../../components/Shared/Container/Container";

const Cart = () => {
    return (
        <div className="bg-neutral-20">
            <Container>
                <div className="flex flex-col xl:flex-row gap-8 py-[64px] w-full">
                    <div className="font-Inter flex flex-col gap-8 w-full">
                        <Heading1>Shopping Cart</Heading1>
                        <hr className="border border-neutral-15" />
                        <CartItem />
                    </div>
                    <CartTotal />
                </div>
            </Container>
        </div>
    );
};

export default Cart;