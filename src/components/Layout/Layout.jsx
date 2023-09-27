import MyNavbar from "../MyNavbar/MyNavbar"

const Layout = ({ children }) => {
    return (
        <>
            <MyNavbar />
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout