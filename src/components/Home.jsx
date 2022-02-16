import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

const Home = () => {
    const navigate = useNavigate()
    
    return (
        <>
            <Button onClick={() => navigate("/customers")}>Customers</Button>
            <Button onClick={() => navigate("/products")}>Products</Button>
        </>
    )
}

export default Home