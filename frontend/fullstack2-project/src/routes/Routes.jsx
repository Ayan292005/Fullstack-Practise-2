import Add from "../pages/add"
import Home from "../pages/home"
import Team from "../pages/team"
import UserRoot from "../pages/UserRoot"

const Routes = [
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "/home",
                element: <Home/>,

            },
            {
                path: "/team",
                element: <Team/>,

            },
            {
                path: "/team/add",
                element: <Add />,
            }
        ]
    }
]
export default Routes