import { Parallax} from 'react-parallax';

const Cover = ({img,title}) => {
    return (
        <Parallax
        // blur={{ min: -50, max: 50 }}
       // bgImage={require('path/to/another/image.jpg')}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    > <div className="hero h-[500px]" >  
       <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content px-8 py-8 mt-2 justify-center  bold bg-slate-900 bg-opacity-50 text-white  absolute right-0 w-[75%] rounded-sm mr-40">
             <div className="max-w-md ">
                 <h1 className="mb-5 text-5xl hover:text-rose-900 drop-shadow-lg text-slate-50 font-bold uppercase">{title}</h1>
                 <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
             </div>
      </div>
     </div>
    </Parallax>
        
    );
};

export default Cover;