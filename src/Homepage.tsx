import banner from './assets/banner.png';
import LivingRoomImage from './assets/chair.png';
import DiningRoomImage from './assets/dining.png';
import BedRoomImage from './assets/bedroom.png';
import OfficeImage from './assets/office.png';
import StorageImage from './assets/storage.png';
import StudyRoomImage from './assets/studyroom.png';
import Interior1 from './assets/interior1.png';
import Interior2 from './assets/Interior2.png';
import galleryimage1 from './assets/gallerypic1.png';
import galleryimage2 from './assets/gallerypic2.png';
import galleryimage3 from './assets/gallerypic3.png';
import galleryimage4 from './assets/gallerypic4.png';
import React,{useState} from 'react';

const Homepage: React.FC = () =>{
    
    const sections = [
        {
          title: "Interior Designing",
          description:
            "Kitchen Interior - Let us help you design your kitchen. Leave the worry of mixing and matching furniture behind. Set up your space confidently by purchasing the complete look for a seamless experience.",
          image: Interior1, 
        },
        {
          title: "Living Room Interior",
          description:
            "Living Room Interior - Transform your living room into a cozy and stylish retreat with elegant furniture, warm lighting, and thoughtfully curated decor.",
          image: Interior2,
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? sections.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === sections.length - 1 ? 0 : prevIndex + 1
        );
    };

    return(
        <div>
            <img className="banner" src={banner} alt="banner"></img>
            <h2 className="product-category"> Product Categories </h2>
            <main>
                <div className='left-arrow'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.07874 7.46974L10.1522 1.39661C10.445 1.1038 10.92 1.1038 11.2128 1.39661L11.9212 2.10505C12.2137 2.39755 12.2141 2.8713 11.9225 3.16442L7.10905 8.00005L11.9222 12.836C12.2141 13.1291 12.2134 13.6029 11.9209 13.8954L11.2125 14.6038C10.9197 14.8966 10.4447 14.8966 10.1519 14.6038L4.07874 8.53036C3.78593 8.23755 3.78593 7.76255 4.07874 7.46974Z" fill="#030303"/>
                </svg>
                </div>

                <div className='livingcard'>
                <h5 className='card-title'> Living Room </h5>
                <img className="card-image"src={LivingRoomImage} alt="Living Room"></img>
                </div>
                
                <div className='diningcard'>
                <h5 className='card-title'> Dining </h5>
                <img className="card-image"src={DiningRoomImage} alt="Dining"></img>
                </div>

                <div className='bedroomcard'>
                <h5 className='card-title'> Bed Room </h5>
                <img className="card-image"src={BedRoomImage} alt="Bed Room"></img> 
                </div>

                <div className='officecard'>
                <h5 className='card-title'> Office </h5>
                <img className="card-image"src={OfficeImage} alt="Office"></img> 
                </div>
                
                <div className='storagecard'>
                <h5 className='card-title'> Storage </h5>
                <img className="card-image"src={StorageImage} alt="Storage"></img> 
                </div>

                <div className='studyroom-card'>
                <h5 className='card-title'> Study Room </h5>
                <img className="card-image"src={StudyRoomImage} alt="Study Room"></img> 
                </div>

                <div className='right-arrow'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9211 8.53031L5.84786 14.6035C5.55496 14.8964 5.08008 14.8964 4.78721 14.6035L4.07886 13.8952C3.78646 13.6028 3.7859 13.1289 4.07761 12.8358L8.89077 7.99997L4.07761 3.16419C3.7859 2.87109 3.78646 2.39719 4.07886 2.10478L4.78721 1.39644C5.08011 1.10353 5.55499 1.10353 5.84786 1.39644L11.9211 7.46966C12.214 7.76253 12.214 8.23741 11.9211 8.53031Z" fill="#030303"/>
                </svg>
                </div>
                
            </main>
            <div className='segments-title'>
            <div className='segments-logo'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_184)">
                    <path d="M12 2L6.5 11H17.5L12 2ZM17.5 13C16.9091 13 16.3239 13.1164 15.7779 13.3425C15.232 13.5687 14.7359 13.9002 14.318 14.318C13.9002 14.7359 13.5687 15.232 13.3425 15.7779C13.1164 16.3239 13 16.9091 13 17.5C13 18.0909 13.1164 18.6761 13.3425 19.2221C13.5687 19.768 13.9002 20.2641 14.318 20.682C14.7359 21.0998 15.232 21.4313 15.7779 21.6575C16.3239 21.8836 16.9091 22 17.5 22C18.0909 22 18.6761 21.8836 19.2221 21.6575C19.768 21.4313 20.2641 21.0998 20.682 20.682C21.0998 20.2641 21.4313 19.768 21.6575 19.2221C21.8836 18.6761 22 18.0909 22 17.5C22 16.9091 21.8836 16.3239 21.6575 15.7779C21.4313 15.232 21.0998 14.7359 20.682 14.318C20.2641 13.9002 19.768 13.5687 19.2221 13.3425C18.6761 13.1164 18.0909 13 17.5 13ZM3 13.5H11V21.5H3V13.5Z" fill="#030303"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_184">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
            </svg> 
            </div>
            <h3> Segments</h3>
            </div>
            <div className='segment-items'>

                <div className='residential'> 
                <h3 className='seg-1'> Residential </h3>
                <button className='view-more1'> View More</button>
                </div>
                
                <div className='institutional'> 
                <h3 className='seg-2'> Institutional </h3>
                <button className='view-more2'> View More</button>
                </div>

                <div className='commercial'>
                <h3 className='seg-3'> Commercial</h3>  
                <button className='view-more3'> View More</button>
                </div>
            </div>
            <div className='products-title'>
                <div className='product-logo'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_35)">
                <path d="M22.7 10.8C21.7063 10.8 20.9 11.6062 20.9 12.6V15.6H4.1V12.6C4.1 11.6062 3.29413 10.8 2.3 10.8C1.30588 10.8 0.5 11.6062 0.5 12.6V19.8C0.5 20.13 0.76865 20.4 1.1 20.4H3.5C3.83135 20.4 4.06625 20.1313 4.06625 19.8L4.1 19.2H20.9V19.8C20.9 20.1313 21.1687 20.4 21.5 20.4H23.9C24.2314 20.4 24.5 20.1313 24.5 19.8V12.6C24.5 11.6062 23.6938 10.8 22.7 10.8ZM5.3 12.6V14.4H19.7V12.6C19.7 11.1514 20.7324 9.93935 22.1 9.66073V8.39998C22.1 5.7491 19.9509 3.59998 17.3 3.59998H7.66625C5.01538 3.59998 2.86625 5.7491 2.86625 8.39998L2.9 9.65998C4.26875 9.94123 5.3 11.1525 5.3 12.6Z" fill="#030303"/>
                </g>
                <defs>
                <clipPath id="clip0_1_35">
                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
                </svg>
                <h3> Trending Products </h3>
                </div>
            </div>
            <div className='products'>
                <div className='Box1'> 
                <div className='luxurybedset'> Luxury Bed Set</div>
                </div>
                <div className='Box2'> 
                <div className='enquire'>
                        <button>Enquire Now</button>
                    </div>
                <div className='luxurysofaset'> Luxury Sofa Set</div>
                </div>
                <div className='Box3'>
                <div className='luxurydiningtable'> Luxury dining Table</div>
                </div>
                <div className='Box4'>
                <div className='luxurybedset'> Luxury Bed Set</div>
                </div>
                <div className='Box5'>
                <div className='elegantcandleset'> Elegant Candle Set </div>
                </div>
                <div className='Box6'>
                <div className='elegantsofaset'> Elegant Sofa Set </div>
                </div>
                <div className='Box7'>
                <div className='fruitplatter'> Fruit Platter </div>
                </div>
                <div className='Box8'>
                <div className='elegantcandleset'> Elegant Candle Set </div>
                </div>
            </div>
            <div className='interior-designing'>
                <div className='interior-content'>
                <h2>{sections[currentIndex].title}</h2>
                <p>{sections[currentIndex].description}</p>
                <button className='know-more'> Know More </button>
                </div>
                <div className='interior-images'>
                    <br/>
                    <div className='left-swipe'>
                    <button onClick={handlePrevious}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.07874 7.46968L10.1522 1.39655C10.445 1.10374 10.92 1.10374 11.2128 1.39655L11.9212 2.10499C12.2137 2.39749 12.2141 2.87124 11.9225 3.16436L7.10905 7.99999L11.9222 12.8359C12.2141 13.1291 12.2134 13.6028 11.9209 13.8953L11.2125 14.6037C10.9197 14.8966 10.4447 14.8966 10.1519 14.6037L4.07874 8.5303C3.78593 8.23749 3.78593 7.76249 4.07874 7.46968Z" fill="#030303"/>
                    </svg></button>
                    </div>
                    <div className="interior" >
                        <img 
                            src = {sections[currentIndex].image} 
                            alt={sections[currentIndex].title}>
                        </img>
                    </div>
                    <div className='right-swipe'>
                    <button onClick={handleNext}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9211 8.53034L5.84786 14.6036C5.55496 14.8965 5.08008 14.8965 4.78721 14.6036L4.07886 13.8952C3.78646 13.6028 3.7859 13.1289 4.07761 12.8358L8.89077 8L4.07761 3.16422C3.7859 2.87112 3.78646 2.39722 4.07886 2.10481L4.78721 1.39647C5.08011 1.10356 5.55499 1.10356 5.84786 1.39647L11.9211 7.46969C12.214 7.76256 12.214 8.23744 11.9211 8.53034Z" fill="#030303"/>
                    </svg>
                    </button>
                    </div>
                </div>
            </div>
            <div className='aboutus'>
                <h2 className='aboutus-title'> About Us </h2>
                <p> Discover the epitome of luxury livinf with our exclusive furniture collection. Each piece is meticulously crafted to bring sophistication and elegance to your home.</p>

                    <div className='aboutus-content'>
                        <div className='inspired-living'>
                        <h2 className='ins-title'> Inspired Living </h2>
                        <p> Discover furniture that combines modern elegance with everyday comfort, crafted to make your home a reflection of your unique style.</p>
                        </div>

                        <div className='exceptional-savings'>
                        <h2 className='exc-title'>Exceptional Savings</h2>
                        <p> By Bridging the gap between you and trusted furniture makers, we bring you stunning pieces at prices that fit your budget.</p>
                        </div>

                        <div className='easy-shopping'>
                        <h2 className='easy-title'>Easy Shopping</h2>
                        <p> From quick browsing to fast delivery and easy assembly. we simplify every step of finding and enjoying your perfect furniture.</p>
                        </div>

                        <div className='sustainable-options'> 
                        <h2 className='sus-title'> Sustainable Options</h2>
                        <p> Choose from sustainable furniture options crafted with the planet in mind - because style should never come at the cost of the environment</p>
                        </div>
                    </div>

            </div>
            <section className="gallery-section">
                <div className="gallery-container">
                <div className="gallery-item">
                    <img className="gallery-item1" src={galleryimage1} alt="Living Room 1" />
                </div>
                <div className="gallery-item">
                    <img className="gallery-item2" src={galleryimage2} alt="Bedroom 1" />
                </div>
                <div className="gallery-item">
                    <img className="gallery-item3" src={galleryimage3} alt="Living Room 2" />
                </div>
                <div className="gallery-item">
                    <img className="gallery-item4" src={galleryimage4}  alt="Bedroom 2" />
                </div>
                </div>
            </section>
        </div>
    );

}
export default Homepage