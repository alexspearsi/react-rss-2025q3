import Link from 'next/link';
import styles from './About.module.css';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('AboutPage');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>About</h2>
        
        <div className={styles.section}>
          <div>
            <div>
              <p><strong>{t('name')}</strong>{t('author')}</p>
              <p><strong>{t('role')}</strong>{t('role_description')}</p>
              <p><strong>{t('experience')}</strong>{t('experience_description')}</p>
              <p><strong>{t('skills')}</strong> React, TypeScript, CSS, JavaScript</p>
            </div>
          </div>
          
          <div>
            <h3>{t('education')}</h3>
            <p>{t('description')}</p>
            <Link
              href='https://rs.school/' 
              target='_blank'
              className='course-link' rel='noreferrer'
            >
              Rolling Scope School
            </Link>
          </div>

        </div>
        
      </div>
    </div>
  );
}