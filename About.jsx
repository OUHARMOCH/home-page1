
import about from  '../assets/about.png'
import about2 from  '../assets/about2.png'
const About = () => {
 

    return (
      <div className=" md:px-14 p-4 max-w-s mx-auto space-y-10"> 
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
      <div className=" md:w-1/2">
      
      <img src={about}alt ="" className=' '/>
        
        </div>
        <div className='md:w-2/5'>
            <h2 className='md:text-5xl text-3xl  font-bold text-primary mb-5 leading-normal'> We have been improving our products <span className='text-secondary'>for many years</span></h2>
            <p className='text-tartiary text-lg mb-7 '>Lorem ipsum dolor sit amet cm officia reprehenderit cons
                equuntur maxime? Quod molestiae magnam, et rem adipisci,.</p>
                <button className='by-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>Get started</button>
        </div>
      </div>


      <div className='h-8'></div>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
      <div className=" md:w-1/2">
      
      <img src={about2}alt ="" className=' '/>
        
        </div>
        <div className='md:w-2/5'>
            <h2 className='md:text-5xl text-3xl  font-bold text-primary mb-5 leading-normal'> You can practice <span className='text-secondary'>at an,y time convient to you</span></h2>
            <p className='text-tartiary text-lg mb-7 '>Lorem ipsum dolor sit amet cm officia reprehenderit cons
                equuntur maxime? Quod molestiae magnam, et rem adipisci,.</p>
                <button className='by-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>Get started</button>
        </div>
      </div>
      </div>

    );
  };
  
  export default About
  