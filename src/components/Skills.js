import flutter from "./../assets/skills/flutter.png"
import fb from "./../assets/skills/fb.png"
import android from "./../assets/skills/android.png"
import react from "./../assets/skills/react.png"
import tail from "./../assets/skills/tailwind.png"
import redis from "./../assets/skills/redis.png"
import git from "./../assets/skills/git.png"
import css from "./../assets/skills/css.png"
import c from "./../assets/skills/c.png"
import java from "./../assets/skills/java.png"
import py from "./../assets/skills/py.png"
import js from "./../assets/skills/js.png"
import php from "./../assets/skills/php.png"
import mysql from "./../assets/skills/mysql.png"
import dart from "./../assets/skills/dart.png"
import as from "./../assets/skills/as.png"
import figma from "./../assets/skills/figma.png"
import canva from "./../assets/skills/canva.jpg"

export default function Skills() {
  return (
    <div className=" min-h-screen h-full md:h-full md:w-5/6 w-3/4  bg-pGold montfamily">
      <div className="flex h-20 w-full items-center justify-center">
        <p className="text-4xl text-pBg pl-8 md:ml-0 cursive">Skills</p>
      </div>
      <div className=" h-screen md:pl-48 flex flex-col justify-evenly">
        <div>
          <p className="text-2xl text-pBg mb-3">Programming languages:</p>
          <div className="flex w-full md:w-5/6 justify-between flex-wrap gap-3">
            <div className="flex flex-col items-center "><img className=" md:h-20 h-12" src={c} alt="c" /> C</div>
            <div className="flex flex-col items-center "><img className=" md:h-20 h-12" src={java} alt="java" />Java</div>
            <div className="flex flex-col items-center "><img className=" md:h-20 h-12" src={py} alt="py" />Python</div>
            <div className="flex flex-col items-center "><img className=" md:h-20 h-12 " src={dart} alt="py" />Dart</div>
            <div className="flex flex-col items-center "><img className=" md:h-20 h-12" src={js} alt="js" />Java Script</div>
          </div>
        </div>
        <div>
          <p className="text-2xl text-pBg mb-3 ">Mobile App Development</p>
          <div className="flex w-full  md:w-5/6 justify-evenly ">
            <div className="flex flex-col items-center "><img className=" md:h-20 h-12  " src={android} alt="android" />Android Apps</div>
            <div className="flex flex-col items-center "><img className=" md:h-20 h-12" src={flutter} alt="flutter" />Flutter Apps</div>
            <div className="flex flex-col items-center "><img className=" md:h-20 h-12" src={as} alt="as" />Andriod Studio</div>
          </div>
        </div>
        <div>
          <p className="text-2xl text-pBg mb-3 ">Web Development</p>
          <div className="flex w-full  md:w-5/6 justify-evenly flex-wrap gap-3">
            <div className="flex flex-col items-center "><img className="md:h-20 h-12  " src={react} alt="react" />React</div>
            <div className="flex flex-col items-center "><img className="md:h-20 h-12" src={tail} alt="tail" />Tailwind CSS</div>
            <div className="flex flex-col items-center "><img className="md:h-20 h-12" src={css} alt="css" />CSS</div>
            <div className="flex flex-col items-center "><img className="md:h-20 h-12" src={redis} alt="redis" />Redis</div>
            <div className="flex flex-col items-center "><img className="md:h-20 h-12" src={php} alt="php" />Redis</div>
          </div>
        </div>
        <div>
          <p className="text-2xl text-pBg mb-3 ">Others</p>
          <div className="flex w-full  md:w-5/6 justify-evenly ">
            <div className="flex flex-col items-center "><img className=" md:h-20 h-12  " src={mysql} alt="mysql" /> MySQL</div>
            <div className="flex flex-col items-center "><img className=" md:h-20 h-12" src={fb} alt="fb" />FireBase</div>
            <div className="flex flex-col items-center "><img className=" md:h-20 h-12" src={git} alt="git" />GitHub</div>
            <div className="flex flex-col items-center "><img className=" md:h-20 h-12" src={canva} alt="canva" />Canva</div>
            <div className="flex flex-col items-center "><img className=" md:h-20 h-12" src={figma} alt="figma" />Figma</div>
          </div>
        </div>
      </div>
    </div>
  )
}