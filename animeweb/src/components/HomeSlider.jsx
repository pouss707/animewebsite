import left from '../assets/left.png'
import right from '../assets/right.png'
import test from '../assets/test.png'

function HomeSlider() {



    return (
        <div>
            <div className='flex justify-center rounded-[50px]  ml-[168px] mt-[50px] h-[608px] w-[1200px]  bg-cover' style={{ backgroundImage: `url(${test})` }} >
                <div className='relative flex flex-col text-black  gap-[20px] overflow-hidden break-words mt-[270px] mr-[450px] h-fit w-[700px] bg-opacity-50 p-[20px]'>
                    <h1>title</h1>
                    <h2>jp title</h2>
                    <h3 className="truncate w-[600px]">description</h3>
                    <button className='bg-white cursor-pointer font-bold text-[20px] text-black border-[3px] rounded-[50px] w-[150px] h-[50px] mt-[20px]'>watch</button>
                </div>
                <img className='right' src={right} alt="right" />
                <img className='left' src={left} alt="left" />
            </div>
        </div>
    );
}

export default HomeSlider