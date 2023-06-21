import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
        <div className='justify-between mx-auto gap-16 sm:flex'> 
            {/* FIRST COLUMN */}
            <div className='mt-16 basis-1/2 sm:mt-0'>
                <h4 className='font-bold'>BLOG OF THE FUTURE</h4>
                <p className='my-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>copyright for the blog of the future.</p>
            </div>
            {/* SECOND COLUMN */}
            <div className='mt-16 basis-1/4 sm:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Massa orci senectus</p>
                <p className='my-5'>Some random link again</p>
                <p>Ullamcorper vivamus</p>
            </div>
            {/* THIRD COLUMN */}
            <div className='mt-16 basis-1/4 sm:mt-0'>
                <h4 className='font-bold'>Contact us</h4>
                <p className='my-5'>We would love to talk to you on this</p>
                <p>(333)435-6825</p>
            </div>
        </div>
        </footer>
  )
}

export default Footer