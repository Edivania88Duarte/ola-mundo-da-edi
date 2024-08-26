import { Outlet } from "react-router-dom"

const { default: Bannner } = require("componentes/Banner")

export default function PaginaPadrao() {
    return (
        <main>
            <Bannner />
           
           <Outlet />          
        </main>
    )
}