import Atropos from 'atropos/react'
import gk2 from './../assets/gk2.png'
import insta from './../assets/connect/instagram.png'
import leet from './../assets/connect/leetcode.png'
import twit from './../assets/connect/twitter.png'
import mail from './../assets/connect/gmail.png'
import git from './../assets/connect/github.png'
import lin from './../assets/connect/linkedin.png'

export default function DashBoard () {
  return (
    <div className="md:w-5/6 w-3/4 h-screen cursive">
      <div className="w-full h-screen bg-pGold flex md:items-center justify-end flex-wrap-reverse">
        <div className="xl:w-1/2 ml:mr-24 sm:mr-10 sm:ml-0 ml-8 mt-20 md:mt-0">
          <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl tracking-wider underline underline-offset-4 font-extrabold mb-3">
            GOKULKRISHNA RAJU
          </h1>
          <h1 className="tracking-widest text-md md:text-lg font-bold mb-8">
            MUSIC CODE LOVE
          </h1>
          <h1 className="tracking-widest text-md md:text-xl font-bold mb-8">
          KEC'24 | Full Stack Web & App Developer
          </h1>
          <div className="flex w-1/2 justify-between flex-wrap">
            <a href="https://github.com/GOKULKRISHNA-R"><img className='m-2 mix-blend-color-burn h-8' src={git} alt="github" /></a>
            <a href="https://www.linkedin.com/in/gokulkrishna-raju"><img className='m-2  h-8' src={lin} alt="linkedin" /></a>
            <a href="mailto:gmkrishna11082003@gmail.com"><img className='m-2  h-8' src={mail} alt="mail" /></a>
            <a href="https://leetcode.com/GOKULKRISHNA_R/"><img className='m-2 mix-blend-color-burn	 h-8' src={leet} alt="leetcode" /></a>
            <a href="https://twitter.com/RGokulKrishna11"><img className='m-2  h-8' src={twit} alt="twitter" /></a>
            <a href="https://www.instagram.com/_j_e_y_a_n_t_h_143_/"><img className='m-2  h-8' src={insta} alt="instagram" /></a>
          </div>
        </div>
        <div className="2xl:h-80 2xl:w-80 xl:h-64 xl:w-64 h-44 w-44  bg-pYellow rotate-45 rounded-3xl shadow-2xl shadow-[#493C10] overflow-hidden">
          <div className="2xl:h-96 2xl:w-96 xl:h-72 xl:w-72 w-44 h-44 -rotate-45">
            <Atropos shadow={false}>
              <img data-atropos-offset="1" src={gk2} alt="GokulKrishna Raju " />
            </Atropos>
          </div>
        </div>
      </div>
    </div>
  )
}
