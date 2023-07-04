import kec from "./../assets/projects/KEC_Connect.png"
import rbc from "./../assets/projects/rbc.png"
import math from "./../assets/projects/maths.png"
import link from "./../assets/connect/link.png"
import st from "./../assets/projects/st.png"
import ca from "./../assets/projects/ca.png"
import loading from "./../assets/projects/loading.png"
import pbm from "./../assets/projects/pbm.png"

export default function Projects() {
  return (
    <div className=" h-screen md:w-5/6 w-3/4  bg-pCyan ">
      <div className="flex h-20 w-full items-center justify-center">
        <p className="text-4xl text-black pl-8 md:ml-0 cursive">Works</p>
      </div>
      <div className="grid w-full h-5/6 gap-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center md:ml-20 ml-8">
        <div className="group h-24 w-56 md:h-40 md:w-72 rounded-[36px] bg-gradient-to-r from-pc via-pb to-pa flex justify-start items-center">
          <a href="https://play.google.com/store/apps/details?id=com.kec.cseautomation.kecconnect&pli=1" target="blank">
            <div className="group h-24 md:h-40 flex justify-evenly rounded-[36px] bg-white hover:transition-all hover:w-40">
              <img src={kec} className="w-3/5 md:w-4/5 md:py-9 object-contain" alt="" />
              <img src={link} className="md:group-hover:block md:hidden mt-6 w-3 h-3" alt="link" />
            </div>
          </a>
          <div className="ml-3 md:ml-16 group-hover:ml-3 whitespace-nowrap">
            <p>KEC Connect</p>
            <p>Flutter App</p>
          </div>
        </div>
        <div className="group h-24 w-56 md:h-40 md:w-72 rounded-[36px] bg-gradient-to-r from-pc via-pb to-pa flex justify-start items-center">
          <a href="https://rbckec.kongu.edu" target="blank">
            <div className="group h-24 md:h-40 flex justify-evenly rounded-[36px] bg-white hover:transition-all hover:w-40">
              <img src={rbc} className="w-3/5 md:w-4/5 md:py-9 object-contain" alt="" />
              <img src={link} className="md:group-hover:block md:hidden mt-6 w-3 h-3" alt="link" />
            </div>
          </a>
          <div className="ml-3 md:ml-6 group-hover:ml-3 ">
            <p>Robotics Club KEC</p>
            <p className="hidden md:block">React Tailwind Site</p>
          </div>
        </div>
        <div className="group h-24 w-56 md:h-40 md:w-72 rounded-[36px] bg-gradient-to-r from-pc via-pb to-pa flex justify-start items-center">
          <a href="https://mathsclub.kongu.edu" target="blank">
            <div className="group h-24 md:h-40 flex justify-evenly rounded-[36px] bg-white hover:transition-all hover:w-40">
              <img src={math} className="w-3/5 md:w-4/5 md:py-9 object-contain" alt="" />
              <img src={link} className="md:group-hover:block md:hidden mt-6 w-3 h-3" alt="link" />
            </div>
          </a>
          <div className="ml-3 md:ml-6 group-hover:ml-3 ">
            <p>Maths Club KEC</p>
            <p className="hidden md:block">React Tailwind Site</p>
          </div>
        </div>
        <div className="group h-24 w-56 md:h-40 md:w-72 rounded-[36px] bg-gradient-to-r from-pc via-pb to-pa flex justify-start items-center">
          <a href="https://github.com/GOKULKRISHNA-R/Smart-Transportation" target="blank">
            <div className="group h-24 md:h-40 flex justify-evenly rounded-[36px] bg-white hover:transition-all hover:w-40">
              <img src={st} className="w-3/5 md:w-4/5 md:py-9 object-contain" alt="" />
              <img src={link} className="md:group-hover:block md:hidden mt-6 w-3 h-3" alt="link" />
            </div>
          </a>
          <div className="ml-3 md:ml-6 group-hover:ml-3">
            <p>Smart Transportation </p>
            <p className="hidden md:block" >IOT NODEMCU & Flutter App</p>
          </div>
        </div>
        <div className="group h-24 w-56 md:h-40 md:w-72 rounded-[36px] bg-gradient-to-r from-pc via-pb to-pa flex justify-start items-center">
          <a href="https://github.com/GOKULKRISHNA-R/Credit_Exemption_Ehorizon" target="blank">
            <div className="group h-24 md:h-40 flex justify-evenly rounded-[36px] bg-white hover:transition-all hover:w-40">
              <img src={ca} className="w-3/5 md:w-4/5 md:py-9 object-contain" alt="" />
              <img src={link} className="md:group-hover:block md:hidden mt-6 w-3 h-3" alt="link" />
            </div>
          </a>
          <div className="ml-3 md:ml-6 group-hover:ml-3 ">
            <p>KEC Credit Automation</p>
            <p className="hidden md:block">React Tailwind Site</p>
            <p className="hidden md:block" >PHP MySQL</p>
          </div>
        </div>
        <div className="hidden md:flex group h-24 w-56 md:h-40 md:w-72 rounded-[36px] bg-gradient-to-r from-pc via-pb to-pa justify-start items-center">
            <div className="group h-24 md:h-40 flex justify-evenly rounded-[36px] bg-white hover:transition-all hover:w-40">
              <img src={pbm} className="py-6 mx-5 object-contain" alt="" />
            </div>
          <div className="ml-3 md:ml-6 group-hover:ml-3 ">
            <p>Petrol Bunk Maintainence</p>
            <p className="hidden md:block">Flutter App</p>
            <div className="flex items-center ">
            <p >Working</p> 
            <img className="animate-spin w-4 h-4 ml-3" src={loading} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}