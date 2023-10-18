import App from "./components/App"
import CardContainer from "./components/CardContainer"
import MyTeam from "./components/MyTeam"
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import NewTeam from "./components/NewTeam"
import Register from "./components/Register"


const routes = [
    {
        path:'/',
        element: <App />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/players',
                element: <CardContainer />
            },
            {
                path:'/myteam',
                element: <MyTeam />
            },
            {
                path:'/newteam',
                element: <NewTeam />
            }
                
        ],
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/register',
        element: <Register />
    }
]

export default routes