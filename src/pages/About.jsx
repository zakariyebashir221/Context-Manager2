import React from 'react';

function About() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-teal-100 to-teal-40">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Welcome to <br className="block sm:hidden" />ContextManager
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              ContextManager is your ultimate solution for managing global state in React applications. Streamline your state management, enhance productivity, and optimize performance with ease.
            </p>
            <p className="mt-4 text-xl text-gray-600 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                <span className="relative"> Have a question? </span>
              </span>
              <br className="block sm:hidden" />
              Reach out to us on{' '}
              <a
                href="#"
                title=""
                className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
              >
                Twitter
              </a>
            </p>
          </div>
          <div className="relative">
            {/* <img
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt="Blob Shape"
            /> */}
            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="public/image1.png"
              alt="Team Member"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;