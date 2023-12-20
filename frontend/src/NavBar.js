import './NavBar.css'
export default function NavBar(){
    return(
        <>
        <nav className ="navbar">
  
        <ul>
        <CustomLink href="/Login">Login</CustomLink>     
        <CustomLink href="/Tracker">Tracker</CustomLink>
        <CustomLink href="/Device">Devices</CustomLink>
        <CustomLink href="/User">Users</CustomLink>
        <CustomLink href="/About">About</CustomLink>
        <CustomLink href="/Home">Home</CustomLink> 
        <CustomLink href="/Social">Social Media</CustomLink>          
        </ul>
        </nav>
         </>
    )
}

 function CustomLink ({ href, children, ...props }){
    const path = window.location.pathname

    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}