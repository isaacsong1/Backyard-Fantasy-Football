import App from "./components/App"
import CardContainer from "./components/CardContainer"
import YourTeam from "./components/YourTeam"

const routes = [
    {
        path:'/',
        element: <App />
    },
    {
        path:'/players',
        element: <CardContainer />
    },
    {
        path:'/myteam',
        element: <YourTeam />
    }
]

export default routes