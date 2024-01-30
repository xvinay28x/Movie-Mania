export default function NavBar() {


    return (
        <>
            <div className="p-4">
                <div className="navbar bg-stone-800 text-white rounded-2xl hover:shadow-2xl">
                    <div className="navbar-start">
                        <img src="/logo.png" alt="" className="h-12 w-12 cursor-pointer"/>
                    </div>
                    <div className="navbar-center">
                        <a className="text-2xl font-mono">Movie Mania</a>
                    </div>
                    <div className="navbar-end">
                    <input type="text" placeholder="Type here" className="input input-bordered w-80 h-10 bg-stone-700 mx-4" />
                        <button className="btn btn-ghost btn-circle hover:bg-stone-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}