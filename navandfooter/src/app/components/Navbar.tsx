import Link from "next/link"
const Navbar = () => {
        return (
    <>
     <header >
        <nav className="flex justify-between items-center  bg-orange-700 text-orange-200 w-full h-12 " >
            <div className="px-10 font-bold ">
                <h1>
                    Your Logo
                </h1>
            </div>
            <ul className="flex gap-10 px-10 font-semibold  ">
                <li className="bg-orange-900 rounded-md px-1">
                    <Link href="/">Home</Link>
                </li>
                <li className="bg-orange-900 rounded-md px-1">
                    <Link href="/about">About Us</Link>
                </li >
                <li className="bg-orange-900 rounded-md px-1">
                    <Link href="/contact">Contact Us</Link>
                </li>
                <li className="bg-orange-900 rounded-md px-1">
                    <Link href="/login">Login</Link>
                </li>
            </ul>
        </nav>
     </header>
    </>
        )

}
export default Navbar