import React from 'react';

const Home = () => {
  return (
    <div className="bg-white">
      <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-teal-100 to-teal-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Manage Your Context Efficiently with
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">ContextManager.</h1>
                </div>
              </h1>
              <p className="mt-8 text-base text-black sm:text-xl">
                Streamline your state management and boost your productivity. Use our ContextManager to handle global state seamlessly in your React applications.
              </p>
              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="/ContextList"
                  title=""
                  className="inline-flex items-center px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  role="button"
                >
                  Start managing
                </a>
               
              </div>
            </div>
            <div>
              <img
                className="w-full"
                src="/image2.png"
                alt="Collaboration illustration"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-teal-100 to-teal-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">Features</h2>
            <p className="mt-4 text-base text-black sm:text-lg">
              Discover the powerful features of ContextManager that help you streamline your React application development.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-green-100 shadow-lg rounded-lg">
              <div className="flex items-center justify-center mb-4 text-3xl text-green-500">
                <i className="fas fa-plug"></i>
              </div>
              <h3 className="text-xl font-bold text-black">Easy Integration</h3>
              <p className="mt-4 text-base text-black">
                Seamlessly integrate ContextManager into your existing projects with minimal setup and configuration.
              </p>
            </div>
            <div className="p-8 bg-green-100 shadow-lg rounded-lg">
              <div className="flex items-center justify-center mb-4 text-3xl text-green-500">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="text-xl font-bold text-black">Global State Management</h3>
              <p className="mt-4 text-base text-black">
                Efficiently manage global state across your application without prop drilling or complex Redux setup.
              </p>
            </div>
            <div className="p-8 bg-green-100 shadow-lg rounded-lg">
              <div className="flex items-center justify-center mb-4 text-3xl text-green-500">
                <i className="fas fa-user-friends"></i>
              </div>
              <h3 className="text-xl font-bold text-black">Developer Friendly</h3>
              <p className="mt-4 text-base text-black">
                Developer-friendly API and extensive documentation to help you get started quickly and easily.
              </p>
            </div>
            <div className="p-8 bg-green-100 shadow-lg rounded-lg">
              <div className="flex items-center justify-center mb-4 text-3xl text-green-500">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-black">Performance Optimization</h3>
              <p className="mt-4 text-base text-black">
                Optimize your application's performance with efficient state updates and minimal re-renders.
              </p>
            </div>
            <div className="p-8 bg-green-100 shadow-lg rounded-lg">
              <div className="flex items-center justify-center mb-4 text-3xl text-green-500">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-xl font-bold text-black">Customizable</h3>
              <p className="mt-4 text-base text-black">
                Highly customizable to fit the unique needs of your application and development workflow.
              </p>
            </div>
            <div className="p-8 bg-green-100 shadow-lg rounded-lg">
              <div className="flex items-center justify-center mb-4 text-3xl text-green-500">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold text-black">Community Support</h3>
              <p className="mt-4 text-base text-black">
                Join a thriving community of developers and get support, share ideas, and collaborate on projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-teal-100 to-teal-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">How It Works</h2>
            <p className="mt-4 text-base text-black sm:text-lg">
              Understand how ContextManager can be seamlessly integrated into your React applications.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-green-100 shadow-lg rounded-lg">
              <div className="flex items-center justify-center mb-4 text-3xl text-green-500">
                <i className="fas fa-cog"></i>
              </div>
              <h3 className="text-xl font-bold text-black">Step 1: Setup</h3>
              <p className="mt-4 text-base text-black">
                Install ContextManager using npm or yarn and configure it within your React application.
              </p>
            </div>
            <div className="p-8 bg-green-100 shadow-lg rounded-lg">
              <div className="flex items-center justify-center mb-4 text-3xl text-green-500">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <h3 className="text-xl font-bold text-black">Step 2: Create Context</h3>
              <p className="mt-4 text-base text-black">
                Create context for your application state and define the initial state and actions.
              </p>
            </div>
            <div className="p-8 bg-green-100 shadow-lg rounded-lg">
              <div className="flex items-center justify-center mb-4 text-3xl text-green-500">
                <i className="fas fa-share-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-black">Step 3: Provide Context</h3>
              <p className="mt-4 text-base text-black">
                Use the ContextProvider component to wrap your application and make the context available globally.
              </p>
            </div>
            <div className="p-8 bg-green-100 shadow-lg rounded-lg">
              <div className="flex items-center justify-center mb-4 text-3xl text-green-500">
                <i className="fas fa-hand-holding"></i>
              </div>
              <h3 className="text-xl font-bold text-black">Step 4: Consume Context</h3>
              <p className="mt-4 text-base text-black">
                Access the context in your components using the useContext hook to read and update state.
              </p>
            </div>
            <div className="p-8 bg-green-100 shadow-lg rounded-lg">
              <div className="flex items-center justify-center mb-4 text-3xl text-green-500">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-bold text-black">Step 5: Optimize</h3>
              <p className="mt-4 text-base text-black">
                Optimize performance by memoizing context values and using context selectors.
              </p>
            </div>
            <div className="p-8 bg-green-100 shadow-lg rounded-lg">
              <div className="flex items-center justify-center mb-4 text-3xl text-green-500">
                <i className="fas fa-expand-arrows-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-black">Step 6: Extend</h3>
              <p className="mt-4 text-base text-black">
                Extend the functionality by adding middleware or integrating with other libraries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
