import flutter from "./../assets/skills/flutter.png"
import fb from "./../assets/skills/fb.png"
import android from "./../assets/skills/android.png"
import react from "./../assets/skills/react.png"
import tail from "./../assets/skills/tailwind.png"
import redis from "./../assets/skills/redis.png"
import Atropos from 'atropos/react'

export default function Service() {
  return (
    <div className="h-screen md:w-5/6 w-3/4  bg-pCyan flex flex-col items-center">
      <p className="text-4xl font-black text-pGold mt-8 cursive">Services</p>
      <div className=" h-3/4 md:h-full flex justify-between items-center flex-wrap">
        <Atropos shadow={false} className="lg:ring-4 lg:ring-offset-4 lg:ring-pGold lg:px-12 lg:py-12 md:mr-5 lg:mr-0 mx-3">
          <p className="md:text-3xl text-xl font-black text-pGold md:mb-8 mb-4">Mobile App Development</p>
          <ul className="mb-8 list-disc">
            <li>Enhanced Experience</li>
            <li>Comprehensive Guide</li>
            <li>Next-gen Mobile Tech</li>
            <li>Cutting-edge Mobile Dev Techniques</li>
          </ul>
          <div className="flex w-5/6 justify-evenly mx-auto">
              <img className=" md:h-20 h-16" src={android} alt="android" />
              <img className="md:h-20 h-16  " src={flutter} alt="flutter" />
              <img className="md:h-20 h-16 " src={fb} alt="fb" />
          </div>
        </Atropos>

        <Atropos shadow={false} className="lg:ring-4 lg:ring-offset-4 lg:ring-pGold lg:px-12 lg:py-12 md:mr-5 lg:mr-0 mx-3">
          <p className="md:text-3xl text-xl font-black text-pGold md:mb-8 mb-4">Web App Development</p>
          <ul className="mb-8 list-disc">
            <li>Innovative Sophisticated Web Solutions</li>
            <li>Comprehensive Guide</li>
            <li>Responsive Speakable Designs</li>
          </ul>
          <div className="flex w-5/6 mx-auto justify-evenly">
              <img className="md:h-20 h-16 " src={react} alt="react" />
              <img className="md:h-20 h-16 w-16" src={tail} alt="tailwind" />
              <img className="md:h-20 h-16 w-16 " src={redis} alt="redis" />
          </div>
        </Atropos>

      </div>
    </div>
  )
}
