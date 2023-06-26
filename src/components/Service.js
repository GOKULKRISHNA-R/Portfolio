import flutter from "./../assets/skills/flutter.png"
import fb from "./../assets/skills/fb.png"
import android from "./../assets/skills/android.jpg"
import html from "./../assets/skills/html.png"
import css from "./../assets/skills/css.png"
import js from "./../assets/skills/js.png"
import react from "./../assets/skills/react.png"
import tail from "./../assets/skills/tailwind.png"
import redis from "./../assets/skills/redis.png"
import php from "./../assets/skills/php.png"
import mysql from "./../assets/skills/mysql.jpg"
import Atropos from 'atropos/react'
import { Tooltip } from "@material-ui/core"

export default function Service() {
  return (
    <div className="h-screen md:w-5/6 w-3/4  bg-pCyan flex flex-col items-center">
      <p className="text-4xl font-black text-pGold mt-8 ">Services</p>
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
            <Tooltip title="Android App">
              <img className=" md:h-20 h-16" src={android} alt="android" />
            </Tooltip>
            <Tooltip title="Flutter Apps">
              <img className="md:h-20 h-16  " src={flutter} alt="flutter" />
            </Tooltip>
            <Tooltip title="Firebase Backend">
              <img className="md:h-20 h-16 " src={fb} alt="fb" />
            </Tooltip>
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
            <Tooltip title="React Js">
              <img className="md:h-20 h-16 " src={react} alt="react" />
            </Tooltip>
            <Tooltip title="Tailwind CSS">
              <img className="md:h-20 h-16 w-16" src={tail} alt="tailwind" />
            </Tooltip>
            <Tooltip title="Redis">
              <img className="md:h-20 h-16 w-16 " src={redis} alt="redis" />
            </Tooltip>
          </div>
        </Atropos>

      </div>
    </div>
  )
}
