import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-gray-200 min-h-screen">
            <div className="max-w-screen-4xl mx-auto">
                <h1 className="text-4xl text-center">Fabric Tutorial</h1>
            </div>
            <div className="max-w-screen-2xl mx-auto my-20">
                <Outlet></Outlet>
            </div>
            <div className="max-w-screen-2xl mx-auto">
                <footer className="text-center">
                    <p className="text-gray-500">©2025 Md Shojib Hossain. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    )
}
export default Main;