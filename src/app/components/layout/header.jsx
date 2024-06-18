import Link from "next/link";

const Header = () =>{
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">AbaySib</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                   
                </ul>
            </div>
        </div>
    )
}

export default Header;