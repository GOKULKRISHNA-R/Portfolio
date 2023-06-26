import flutter from "./../assets/skills/flutter.png"
import fb from "./../assets/skills/fb.png"
import android from "./../assets/skills/android.jpg"
import react from "./../assets/skills/react.png"
import tail from "./../assets/skills/tailwind.png"
import redis from "./../assets/skills/redis.png"
import html from "./../assets/skills/html.png"
import css from "./../assets/skills/css.png"
import c from "./../assets/skills/c.png"
import java from "./../assets/skills/java.png"
import py from "./../assets/skills/py.png"
import js from "./../assets/skills/js.png"
import php from "./../assets/skills/php.png"
import mysql from "./../assets/skills/mysql.jpg"

export default function Skills () {
    return (
      <div className=" h-screen md:w-5/6 w-3/4  bg-pGold">
        <div className="flex h-24 w-full items-center justify-center">
          <p className="text-4xl text-pBg ml-8 md:ml-0 ">Services</p>
        </div>
        <div>
          <p className="text-2xl text-pBg ">Programming languages:</p>
          <div className="flex w-5/6 justify-evenly mx-auto">
            <img src={c} alt="c" />
            <img src={java} alt="java" />
            <img src={py} alt="py" />
          </div>
        </div>
    </div>
    )
  }