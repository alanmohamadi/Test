import Header from '../Features/Header/compomnents/Header'

function Layout({children}) {
    return (
        <>
        <div className=' pt-5'>
        <Header/>

        </div>
        {children}
        <div>
            footer
        </div>
        </>
    )
}

export default Layout
