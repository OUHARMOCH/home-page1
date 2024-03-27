import banner from  '../assets/banner.png'
const News = () => {
 

    return (
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
        <div className='gradientBg rounded-br-[80px] md: p-9 px-4 py-9'> 
         <div className=' flex flex-col md:flex-row-reverse justify-between items-center gap-10'> 
         <div>
              <img src={banner}alt ="" className=' lg:h-[386px]'/>
              </div>
              <div className="md:w-3/5"> 
         <h2 className='md:text-7xl test-4xl font-bold text-white mb-6 leading-relaxed'> developpe your skills without deligence</h2>
         <p className='text-[#EBEBEB] text-2xl mb-8'> Lorem ipsum d laborum doloresi. Dolore illo dicta esse 
          fugit. Pariatur dicta, nulla eius modi cumque a deserunt?</p>
          <div className='space-x-5  space-y-4'>
                <button className='by-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary 
                transition-all duration-300'> Get started</button>
               

              </div>
              </div>
               
              
          </div>
       </div>

      </div>
    );
  };
  
  export default News
  