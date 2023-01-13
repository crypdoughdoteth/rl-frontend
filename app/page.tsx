import Link from 'next/link'
import Image from 'next/image';
import Logo from '../public/raisinlogo.png';
import Emblem from '../public/emblem.png';
import { ImArrowDown } from "react-icons/im";



export default function HomePage() {
  return (
      <div className='flex flex-col bg-gradient-to-r from-indigo-500  to-green-500'>
        <div className="navbar bg-gradient-to-r from-indigo-800  to-green-800 shadow-xl">
          <Link href="/"className="flex mb-4 btn btn-ghost normal-case text-xl shrink w-64 h-14"><Image src={Logo} width={300} height={200} alt=""/></Link>
        </div>
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500  to-green-500 text-black">
          <div className="hero-content flex-col lg:flex-row">
            <Image src={Emblem} width={200} height={100} alt="" />
            <div>
              <h1 className="text-5xl font-bold">Welcome to Raisin Labs!</h1>
              <p className="pt-6 pb-2 font-semibold">Building the protocols that shape the world of DeFi!</p>
              <p className="pb-6 font-semibold">Featuring Raisin, a composable, efficient, & scalable p2p fundraising protocol </p>
              <div className='flex flex-row space-x-3'>
              <Link href='/about'><button className="btn btn-primary">Platforms</button></Link>
              <Link href='/about'><button className="btn btn-primary">Developers</button></Link>
              <ImArrowDown className='animate-bounce w-6 h-6 mt-4'/>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
            <div className='place-content-center self-center mt-12'>
                <div className="carousel w-full py-6">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-6 mt-12 mb-6'>
                <div className="card lg:card-side bg-slate-600 shadow-xl py-6 ml-6 mr-6">
                    <figure className='flex shrink h-64 w-64 ml-6 mt-14'><Image src={Emblem} width={200} height={200} alt="Album" /></figure>
                    <div className="card-body flex flex-col text-green-400">
                        <h2 className="card-title"></h2>
                        <p className='text-4xl py-6'>Raisin Is Here! 🎉</p>
                        <p className='text-xl'>Why use someone else's fundraising platform when you can easily pop up your own? </p>
                        <p className='text-xl'>At long last, our flagship fundraising protocol is launching! After a long 5 month journey, we are ready to revolutionize the scene.</p>
                        <p className='text-xl'>Whereas, each platform is uniquely tailored by its creators, Raisin gives you the power and flexiblity to apply any</p>
                        <p className='text-xl'>approach to moderation such as quadratic funding, voting by DAO, or simply hand selecting each individual cause to your liking. </p>
                        <p className='text-xl'>Raisin is gas efficient and perfect for any need! Simply call the smart contract from your favorite web application frameworks and build out your platform! </p>
                        <div className="flex flex-row card-actions justify-center self-center py-6 space-x-3">
                            <Link href="https://github.com/crypdoughdoteth/Raisin-Contract/"><button className="btn btn-primary">Github</button></Link>
                            <Link href="https://hackmd.io/@crypdoughdoteth/rkdU_RWLi/"><button className="btn btn-primary">Documentation</button></Link>
                            <button className="btn btn-primary">Whitepaper</button>
                            <button className="btn btn-primary">Platforms</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div>
          <footer className="footer footer-center p-10 text-base-content rounded bg-gradient-to-r from-indigo-800  to-green-800 shadow-xl">
            <div className="grid grid-flow-col gap-4">
              <a className="link link-hover">About Us</a>
              <a className="link link-hover">Github</a>
              <a className="link link-hover">Contact</a>              
            </div>
            <div>
              <div className="grid grid-flow-col gap-4">
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
              </div>
            </div>
            <div>
              <p>Copyright © 2023 - All right reserved by Raisin Labs</p>
            </div>
          </footer>
        </div>
      </div>
  )

}