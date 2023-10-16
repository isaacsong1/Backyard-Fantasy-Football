import App from "./components/App"
import CardContainer from "./components/CardContainer"
import YourTeam from "./components/YourTeam"
import Home from "./components/Home"
import SignIn from "./components/SignIn"



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
                element: <YourTeam />
            }
        ],
    },
    {
        path: '/signin',
        element: <SignIn />

    }
]

export default routes