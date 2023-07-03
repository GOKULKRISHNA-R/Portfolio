import ContactForm from "./ContactForm";
import insta from './../assets/connect/instagram.png'
import leet from './../assets/connect/leetcode.png'
import twit from './../assets/connect/twitter.png'
import mail from './../assets/connect/gmail.png'
import git from './../assets/connect/github.png'
import lin from './../assets/connect/linkedin.png'

export default function MyFooter() {
  return (
    <div className=" h-screen md:w-5/6 w-3/4 flex flex-col bg-pGold justify-evenly items-center ">
      <div className="flex h-20 w-full items-center justify-center">
        <p className="text-4xl text-black pl-8 md:ml-0 cursive">Connect with me !</p>
      </div>
      <ContactForm />
      <div className="flex w-1/2 justify-between flex-wrap">
            <a href="https://github.com/GOKULKRISHNA-R"><img className='m-2 mix-blend-color-burn h-8' src={git} alt="github" /></a>
            <a href="https://www.linkedin.com/in/gokulkrishna-raju"><img className='m-2  h-8' src={lin} alt="linkedin" /></a>
            <a href="mailto:gmkrishna11082003@gmail.com"><img className='m-2  h-8' src={mail} alt="mail" /></a>
            <a href="https://leetcode.com/GOKULKRISHNA_R/"><img className='m-2 mix-blend-color-burn	 h-8' src={leet} alt="leetcode" /></a>
            <a href="https://twitter.com/RGokulKrishna11"><img className='m-2  h-8' src={twit} alt="twitter" /></a>
            <a href="https://www.instagram.com/_j_e_y_a_n_t_h_143_/"><img className='m-2  h-8' src={insta} alt="instagram" /></a>
          </div>
    </div>
  )
}