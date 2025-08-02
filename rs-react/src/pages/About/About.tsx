import './About.css';

export function About() {
  return (
    <div className='about__container'>
      <div className='about__content'>
        <h2 className='about__title'>About</h2>
        
        <div className='author__section'>
          <div className='author__info'>
            <div className='author__details'>
              <p><strong>Name:</strong> Alexander Strelchenko</p>
              <p><strong>Role:</strong> React Developer</p>
              <p><strong>Experience:</strong> Building modern web applications</p>
              <p><strong>Skills:</strong> React, TypeScript, CSS, JavaScript</p>
            </div>
          </div>
          
          <div className='course__info'>
            <h3>Education</h3>
            <p>This project was created as part of the RS School React course.</p>
            <a 
              href='https://rs.school/' 
              target='_blank'
              className='course-link' rel='noreferrer'
            >
              Rolling Scope School
            </a>
          </div>

        </div>
        
      </div>
    </div>
  );
}