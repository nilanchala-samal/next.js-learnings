export default function ProductDetails({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <h2>Description</h2>
            {children}
            <h2>Layout page of Product Id</h2>
        </>
    );
}
