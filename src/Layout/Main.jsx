import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="absolute inset-0">
            <div className="max-w-screen-4xl mx-auto">
                <h1 className="text-4xl text-center">Fabric Tutorial</h1>
            </div>
            <div className="max-w-screen-2xl mx-auto my-20">
                <Outlet></Outlet>
            </div>
            <div className="max-w-screen-2xl mx-auto absolute bottom-0 left-0 right-0 p-4">
                <footer className="text-center">
                    <p>©2025 Md Shojib Hossain | All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    )
}
export default Main;