"use client";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
    const router = useRouter();

    const handlePlaceOrder = () => {
        console.log("Order Placed Successfully...");
        router.replace("/")
    }
    return (
        <>
            <h1>Product Page</h1>
            <button onClick={handlePlaceOrder}>Place Order</button>
        </>
    )
};

export default OrderProduct;