export const metadata = {
    title: "About",
    description: "This is About page",
};


const about = () =>{
    return(
        <div className="">
            <div className="card lg:card-side bg-base-100 shadow-xl m-10 mx-auto w-3/4">
                <div className="card-body">
                    <h2 className="card-title text-center grid">This is about page!</h2>
                    
                </div>
            </div>
        </div>
    )
}

export default about