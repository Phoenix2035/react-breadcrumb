import { useLocation, useNavigate } from "react-router-dom"
import { Breadcrumbs, Typography, Link } from '@mui/material'

const MyBreadCrumb = (props) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const pathNames = pathname.split("/").filter(x => x);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {pathNames.length > 0 ? (
                <Link onClick={() => navigate("/")}>Home</Link>
            ) : (
                <Typography> Home </Typography>
            )}
            {pathNames.map((name, index) => {
                const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathNames.length - 1;
                return isLast ? (
                    <Typography key={name}>{name}</Typography>
                ) : (
                    <Link key={name} onClick={() => navigate(routeTo)}>
                        {name}
                    </Link>
                );
            })}
        </Breadcrumbs>
    )
}

export default MyBreadCrumb