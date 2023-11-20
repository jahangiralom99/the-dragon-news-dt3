import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="sticky top-1">
            <h1 className="text-2xl font-bold">All Categories</h1>
            <div>
                {
                    categories.map(category => <NavLink className="block ml-5 bg-[#E7E7E7] m-2 p-2" key={category.id}>
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;