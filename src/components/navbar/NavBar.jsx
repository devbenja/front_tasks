import { Link, useLocation } from "react-router-dom";
import { navigation } from "./Navigation.js";


export const NavBar = () => {

    const location = useLocation();

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <ul className="flex space-x-4">
                            {navigation.map(({ path, name }) => (
                                <li key={path} className={`text-gray-300 hover:bg-gray-700 ${location.pathname === path && "bg-gray-900"} rounded-md px-3 py-2 text-sm font-medium`}>
                                    <Link to={path}>{name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="rounded px-4 py-1  overflow-hidden shadow relative bg-indigo-500 text-white hover:bg-opacity-90">
                            Create Task
                        </button>
                        <div className="relative ml-3">
                            <div>
                                <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav >
    )
}
