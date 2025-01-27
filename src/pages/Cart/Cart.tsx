import { Helmet } from "react-helmet-async";
import CartItem from "../../components/CartPage/CartItem/CartItem";
import CartTotal from "../../components/CartPage/CartTotal/CartTotal";
import Heading1 from "../../components/Reusable/Heading1/Heading1";
import Container from "../../components/Shared/Container/Container";
import { useCart } from "../../Providers/CartProvider/CartProvider";
  
const Cart = () => {
    const { cartData } = useCart();
    console.log(cartData);
    return (
        <div className="bg-neutral-20">
            <Helmet>
                <title>PM Gurukul | Manage Your Cart</title>
            </Helmet>
            <Container>
                <div className="flex flex-col xl:flex-row gap-8 py-[64px] w-full">
                    <div className="font-Inter flex flex-col gap-8 w-full">
                        <Heading1>Shopping Cart</Heading1>
                        <hr className="border border-neutral-15" />
                        {
                            cartData?.length > 0 ? (
                                cartData?.map((item, index) => (
                                    <CartItem key={index} item={item} />
                                ))
                            ) : (
                                <p className="text-neutral-700 text-center">
                                    Your cart is empty.
                                </p>
                            )
                        }
                    </div>
                    <CartTotal cartData={cartData} />
                </div>
            </Container>
        </div>
    );
};

export default Cart;