import React from 'react'
import { ButtonPrimary } from './Button'
import { list } from 'postcss';
import { Link } from 'react-router-dom';



const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/collins-kimotho'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/collinskimotho/'
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@collinskimotho'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/Kim__Collins_'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kim__collins/'
  }
];


const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        
        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
            Let&apos;s work together today!
            </h2>
            {/* <ButtonPrimary 
              href='mailto:collinskimotho@gmail.com'
              label='Start project'
              icon="chevron_right"
            /> */}
            <div>
            <a href="/blog" className='btn btn-primary' target='_blank'>
        Blogs I've Written
        <span className='material-symbols-rounded'>
              chevron_right
        </span> 
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2">
                Sitemap
              </p>
              <ul>
                {
                  sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a 
                        href={href} 
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                      >
                        {label}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div>
              <p className="mb-2">
                Socials
              </p>
              <ul>
                {
                  socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a 
                        href={href}
                        target='_blank'
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                      >
                        {label}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="flex items-center justify-center pt-10 mb-8">
              <a 
                href="" 
                className=""
              >
                <img 
                  src="/images/logo.svg" 
                  width={40}
                  height={40}
                  alt="Logo" 
                  className="" 
                />
              </a>

              <p className="text-zinc-500 text-sm">
                &copy; 2024 <span className="text-zinc-200">Collins Kimotho</span>
              </p>
            </div>

          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer