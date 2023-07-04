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
    <div className="h-screen md:h-full md:w-5/6 w-3/4  bg-pGold montfamily">
      <div className="flex h-20 w-full items-center justify-center">
        <p className="text-4xl text-pBg pl-8 md:ml-0 cursive">Skills</p>
      </div>
      <div className=" h-screen md:pl-48 grid md:grid-cols-5 grid-cols-4 content-center gap-y-12 ">
            <div className="flex flex-col items-center justify-center h-fit "><img className=" md:h-20 h-12" src={c} alt="c" /> <p>C</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className=" md:h-20 h-12" src={java} alt="java" /><p>Java</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className=" md:h-20 h-12" src={py} alt="py" /><p>Python</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className=" md:h-20 h-12 " src={dart} alt="py" /><p>Dart</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className=" md:h-20 h-12" src={js} alt="js" /><p>Java Script</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className=" md:h-20 h-12  " src={android} alt="android" /><p>Android Apps</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className=" md:h-20 h-12" src={flutter} alt="flutter" /><p>Flutter Apps</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className=" md:h-20 h-12" src={as} alt="as" /><p>Andriod Studio</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className="md:h-20 h-12  " src={react} alt="react" /><p>React</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className="md:h-20 h-12" src={tail} alt="tail" /><p>Tailwind CSS</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className="md:h-20 h-12" src={css} alt="css" /><p>CSS</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className="md:h-20 h-12" src={redis} alt="redis" /><p>Redis</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className="md:h-20 h-12" src={php} alt="php" /><p>Redis</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className=" md:h-20 h-12  " src={mysql} alt="mysql" /> <p>MySQL</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className=" md:h-20 h-12" src={fb} alt="fb" /><p>FireBase</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className=" md:h-20 h-12" src={git} alt="git" /><p>GitHub</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className=" md:h-20 h-12" src={canva} alt="canva" /><p>Canva</p></div>
            <div className="flex flex-col items-center justify-center h-fit "><img className=" md:h-20 h-12" src={figma} alt="figma" /><p>Figma</p></div>
        </div>
    </div>
  )
}