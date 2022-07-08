import { useRouter},Link from "next/router"

export default function thankyou(){
    return(
        <>
            <div className="row justify-content-center">
  <div className="col-md-12 col-sm-12">
    <div className="card shadow-lg border-0 rounded-lg mt-5 mx-auto" style={{width: '30rem'}}>
      <h3 className="card-header display-1 text-muted text-center">
        Thankyou for participating 
      </h3>
      <span className="card-subtitle mb-2 text-muted text-center">
        
      </span>
      <div className="card-body mx-auto">
        <Link href= "/">
        <a type="button" className="btn btn-sm btn-info text-white"> Back To Home </a>
        </Link>
      </div>
    </div>
  </div>
</div>

        </>
    )
}