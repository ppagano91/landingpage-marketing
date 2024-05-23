import Hero from './Hero'
import phone from '../assets/images/imagen-celular.png'
import ListCards from './ListCards'

const Main = () => {
  return (
    <>
        <Hero/>
        <div className='card-container' id="QuienSoy" >
        <div className="card" style={{ maxWidth: "1240px" }} data-aos="fade-up">
            <div className="row g-0">
                <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title">¿Quién soy?</h5>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima autem praesentium incidunt, numquam unde aut culpa quisquam beatae. Eius eum vel fugiat est assumenda reprehenderit quisquam laboriosam reiciendis aliquam!
                    </p>
                </div>
                </div>
                <div className="col-md-6">
                <img src={phone} className="img-fluid rounded-start" alt="..." />
                </div>
            </div>
            </div>
        </div>
        <ListCards/>

    </>
  )
}

export default Main