import './Ourprocess.css';
import step1 from './assets/step1.png';
import step2 from './assets/step2.png';
import step3 from './assets/step3.png';
import step4 from './assets/step4.png';
import step5 from './assets/step5.png';
import step6 from './assets/step6.png';

function OurProcess(){
return(
    <>
    <h2 className='title'> Our Process </h2>
    <div className='our-process'>

        <img className="stepimg1" src={step1} alt="step1"></img>
        <div className='step1'>
        <h3 className='step-title'> Step 1: Select your dream model </h3>
        <p> Identify the style that best suits your space and personality. From modern minimalism to classic elegance, choose what resonates with you.</p>
        </div>

        <img className="stepimg2" src={step2} alt="step2"></img>
        <div className='step2'>
        <h3 className='step-title'> Step 2: Customize to your requirement</h3>
        <p> Choose from a variety of premium materials such as rich woods, luxurious fabrics, and robust metals to complement your style.</p>
        </div>

        <img className="stepimg3"src={step3} alt="step3"></img>
        <div className='step3'>
        <h3 className='step-title'> Step 3: Order confirmation</h3>
        <p> Accurate measurements ensure your furniture fits perfectly, maximizing space and functionality.</p>
        </div>
       
        <img className='stepimg4' src={step4} alt="step4"></img>
        <div className='step4'>
        <h3 className='step-title'> Step 4: Quality check</h3>
        <p> Enjoy seamless delivery and professional installation services with every purchase.</p>
        </div>

        <img className='stepimg5' src={step5} alt="step5"></img>
        <div className='step5'>
        <h3 className='step-title'> Step 5: Order processing </h3>
        <p> Your order is carefully reviewed and processed to ensure all details are correct before moving forward.</p>
        </div>

        <img className='stepimg6' src={step6} alt="step6"></img>
        <div className='step6'>
        <h3 className='step-title'> Step 6: Delivery </h3>
        <p> Our commitment to quality ensures your satisfaction with every piece you choose.</p>
        </div>
      </div>
    </>
  );
}
export default OurProcess
