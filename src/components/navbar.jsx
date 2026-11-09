import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Navbar = () => {

    useGSAP(()=>{
        gsap.from("nav",{
            y:-100,
            delay:0.6,
            duration:1,
        })
    })
  return (
    <div className="pt-2">
      <nav className="flex items-center justify-between mb-3 mx-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg text-white">
        <h1 className="text-2xl font-bold tracking-wider decoration-3 text-[#E53A1B] [text-shadow:1.5px_0.5px_1px_#641411]">Veyra</h1>
        <div className="flex gap-5">
          <a href="#">Home</a>
          <a href="#">Clothes</a>
          <a href="#">Electronics</a>
          <a href="#">Sports</a>
          <a href="#">Cart</a>
        </div>
        <div className="flex gap-2">
          <button className="border-2 px-2 py-1 rounded-md">Sign Up</button>
          <button className="border-2 px-2 py-1 rounded-md">Log In</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
