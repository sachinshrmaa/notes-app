
const TopNavbar = () => {
    return (  
        <nav className="top-navbar">
            <form>
                <input type="text" className="search-field" placeholder="search..."/>
                <button className="search-btn"><i class="bi-search"></i></button>
            </form>
        </nav>
    );
}
 
export default TopNavbar;