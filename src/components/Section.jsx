import React from 'react';

const Section = ({ title, children }) => {
  return (
    <>
      <section>
        {title && <h2>{title}</h2>}
        {children}
      </section>
      
      <script>
        {/* se ejecuta en el cliente <---- */}
      </script>
    </>
  );
}

export default Section;
