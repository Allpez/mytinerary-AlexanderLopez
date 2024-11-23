import { NavLink } from "react-router-dom";

//React Icons
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { useSelector } from "react-redux";

const routes = [
    { to: ("/"), text: "Home", unrequiredAuth: true },
    { to: "/cities", text: "Cities", unrequiredAuth: true },
    { to: "/user", text: "Login", unrequiredAuth: false },
]

const activeClass = "text-white font-extrabold my-2 text-2xl underline underline-offset-4";
const inactiveClass = "my-2";

function Footer() {
    const token = useSelector((state) => state.authStore.token);
    return (
        <footer className='footer text-base flex flex-col sm:flex-row md:flex-row justify-between gap-15 text-white text-center w-full  items-center sm:items-baseline pb-6 px-20 ' >
            <nav>
                <ul className="w-auto flex flex-col items-start">
                    {routes.map(
                        (route, index) =>
                            (route.unrequiredAuth || !token) && (
                                <li key={index} className='my-4'>
                                    <NavLink to={route.to} className={({ isActive }) => isActive ? activeClass : inactiveClass}>{route.text}</NavLink>
                                </li>
                            ))}
                </ul>
            </nav>
            <div className='border-t-4 border-indigo-500 sm:border-none'>
                <h4 className='p-5 underline underline-offset-4 text-2xl'>Find Us</h4>
                <div className='flex flex-col items-center lg:flex-row gap-4'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2337.6214015510795!2d-118.25280233772543!3d34.04654160965272!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1728429031652!5m2!1ses!2sco" width="200" height="120" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className='flex flex-col items-start lg:border-l-4 border-indigo-500'>
                        <p className='my-2 ms-4'>123 Street, City</p>
                        <a href="mailto:contact@mytinerary.com" className='my-2 ms-4'>contact@mytinerary.com</a>
                        <p className='my-2 ms-4'>Phone: (123) 456-7890</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start border-t-4 border-indigo-500 sm:border-none'>
                <h4 className='p-5 text-2xl underline underline-offset-4 px-12'>Follow Us</h4>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='flex text-2xl gap-4 items-center mb-2'>
                    <FaFacebook className='cursor-pointer' />
                    <h5 className='hover:underline underline-offset-2 cursor-pointer'>Facebook</h5>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='flex text-2xl gap-4 items-center mb-2'>
                    <FaInstagram className='cursor-pointer' />
                    <h5 className='hover:underline underline-offset-2 cursor-pointer'>Instagram</h5>
                </a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className='flex text-2xl gap-4 items-center mb-2'>
                    <SlSocialTwitter className='cursor-pointer' />
                    <h5 className='hover:underline underline-offset-2 cursor-pointer'>X</h5>
                </a>
            </div>
        </footer>
    )
}

export default Footer;


// import { NavLink } from "react-router-dom";

// //React Icons
// import { FaFacebook } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { SlSocialTwitter } from "react-icons/sl";

// const routes = [
//     { to: ("/"), text: "Home" },
//     { to: "/cities", text: "Cities" },
//     { to: "/user", text: "Login" },
// ]

// const activeClass = "text-white font-extrabold my-2 text-2xl underline underline-offset-4";
// const inactiveClass = "my-2";

// function Footer() {
//     return (
//         <footer className='footer text-base flex flex-col sm:flex-row md:flex-row justify-between gap-15 text-white text-center w-full  items-center sm:items-baseline pb-6 px-20 ' >
//             <nav>
//                 <ul className="w-auto flex flex-col items-start">
//                     {routes.map((r, index) => (
//                         <li key={index} className='my-4'>
//                             <NavLink to={r.to} className={({ isActive }) => isActive ? activeClass : inactiveClass}>{r.text}</NavLink>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//             <div className='border-t-4 border-indigo-500 sm:border-none'>
//                 <h4 className='p-5 underline underline-offset-4 text-2xl'>Find Us</h4>
//                 <div className='flex flex-col items-center lg:flex-row gap-4'>
//                     <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2337.6214015510795!2d-118.25280233772543!3d34.04654160965272!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1728429031652!5m2!1ses!2sco" width="200" height="120" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//                     <div className='flex flex-col items-start lg:border-l-4 border-indigo-500'>
//                         <p className='my-2 ms-4'>123 Street, City</p>
//                         <a href="mailto:contact@mytinerary.com" className='my-2 ms-4'>contact@mytinerary.com</a>
//                         <p className='my-2 ms-4'>Phone: (123) 456-7890</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex flex-col items-start border-t-4 border-indigo-500 sm:border-none'>
//                 <h4 className='p-5 text-2xl underline underline-offset-4 px-12'>Follow Us</h4>
//                 <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='flex text-2xl gap-4 items-center mb-2'>
//                     <FaFacebook className='cursor-pointer' />
//                     <h5 className='hover:underline underline-offset-2 cursor-pointer'>Facebook</h5>
//                 </a>
//                 <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='flex text-2xl gap-4 items-center mb-2'>
//                     <FaInstagram className='cursor-pointer' />
//                     <h5 className='hover:underline underline-offset-2 cursor-pointer'>Instagram</h5>
//                 </a>
//                 <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className='flex text-2xl gap-4 items-center mb-2'>
//                     <SlSocialTwitter className='cursor-pointer' />
//                     <h5 className='hover:underline underline-offset-2 cursor-pointer'>X</h5>
//                 </a>
//             </div>
//         </footer>
//     )
// }

// export default Footer;