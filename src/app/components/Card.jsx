import data from '../data.json';
import Link from 'next/link';

const Card = () => {
    return(
        <div className="flex flex-wrap justify-center gap-6">
            {data.map((blog, id) => (
                <div key={id} className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{blog.title}</h2>
                        <p><b>Author: </b>{blog.author}</p>
                        <p><i>{blog.date}</i></p>
                        <div className="card-actions justify-end">
                            <Link href={`${blog.id}`}>
                                <button className="btn btn-primary">Read</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Card;