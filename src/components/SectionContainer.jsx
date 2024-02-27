import React from 'react';

const SectionComponent = ({ className, id, children }) => {
  return (
    <section
      id={id}
      data-section={id}
      className={`section ${className} w-full mx-auto lg:w-[740px] pb-24`}
    >
      {children}
    </section>
  );
}

export default SectionComponent;
