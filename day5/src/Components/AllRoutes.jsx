import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import HotPicks from "../Pages/HotPicks"
import KindMoments from "../Pages/KIndMoments"
import Login from "../Pages/Login"
import MealDeals from "../Pages/MealDeals"
import Recipes from "../Pages/Recipes"
import SignUp from "../Pages/SignUp"

const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path={"/"}  element={<Home/>}/>
                <Route path={"/hotpicks"}  element={<HotPicks/>}></Route>
                <Route path={"/kindmoments"}  element={<KindMoments/>}></Route>
                <Route path={"/mealdeals"}  element={<MealDeals/>}></Route>
                <Route path={"/recipes"}  element={<Recipes/>}></Route>
                <Route path={"/login"}  element={<Login/>}></Route>
                <Route path={"/signup"}  element={<SignUp/>}></Route>
              




            </Routes>


        </div>
    )
}
export default AllRoutes