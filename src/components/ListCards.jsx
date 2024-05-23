import dataAnalysisSvg from '../assets/images/data-analysis-svgrepo-com.svg'
import interfaceControlSvg from '../assets/images/interface-control-svgrepo-com.svg'
import pageAnalysisSvg from '../assets/images/page-analysis-svgrepo-com.svg'
const ListCards = () => {
  return (
    <div className="card-group gap-3">
        <div className="card">
            <img src={dataAnalysisSvg} className="card-img-top card-image" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Data Analysis</h5>
            <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis illo sequi fugiat tempora, ipsam modi rem amet at distinctio voluptate quos molestias ex eos magni exercitationem natus, quae aliquam.
            </p>
            </div>
        </div>
        <div className="card">
            <img src={interfaceControlSvg} className="card-img-top card-image" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Interface Control</h5>
            <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores voluptatibus fuga aliquid accusantium omnis perspiciatis tempore autem aperiam quas?
            </p>
            </div>
        </div>
        <div className="card">
            <img src={pageAnalysisSvg} className="card-img-top card-image" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Page Analysis</h5>
            <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dignissimos, magni nemo consequatur fugiat non excepturi nulla eius facilis explicabo blanditiis dolorum consectetur! Laudantium, fugit.
            </p>
            </div>
        </div>
    </div>
  )
}

export default ListCards