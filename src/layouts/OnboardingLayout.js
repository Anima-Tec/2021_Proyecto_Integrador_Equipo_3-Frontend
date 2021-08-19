import PropTypes from 'prop-types';

import texture from 'assets/texture.svg';

const OnboardingLayout = ({ children }) => (
  <main className="flex flex-col md:flex-row h-screen items-center w-full">
    <div className="hidden md:block w-full md:w-2/5 h-screen">
      <img src={texture} alt="Texture" className="w-full h-full object-cover" />
    </div>
    <div
      className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-2/5 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
    >
      {children}
    </div>
  </main>
);

OnboardingLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default OnboardingLayout;
