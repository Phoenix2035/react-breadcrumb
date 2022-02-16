import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

const Products = () => {
    const navigate = useNavigate()

    return (
        <>
            <Button onClick={() => navigate("/products/hat")}>Hat</Button>
            <Button onClick={() => navigate("/products/shirt")}>Shirt</Button>
        </>
    )
}

export default Products