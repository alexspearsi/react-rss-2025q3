import styles from './About.module.css';

export function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>About</h2>
        
        <div className={styles.section}>
          <div>
            <div>
              <p><strong>Name:</strong> Alexander Strelchenko</p>
              <p><strong>Role:</strong> React Developer</p>
              <p><strong>Experience:</strong> Building modern web applications</p>
              <p><strong>Skills:</strong> React, TypeScript, CSS, JavaScript</p>
            </div>
          </div>
          
          <div>
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