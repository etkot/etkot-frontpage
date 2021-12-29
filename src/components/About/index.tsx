import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useCtx } from '../../context/context';
import { ReactComponent as Logo } from '../../assets/etkot.svg';
import './About.scss';

const About: FC = () => {
  const { setMenuOpen } = useCtx();

  return (
    <div className='about'>
      <div className='home-button' onClick={() => setMenuOpen(false)}>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <p className='about-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque enim lobortis, condimentum purus
        quis, mollis diam. In sed risus at eros efficitur lobortis. Mauris id varius purus. Morbi efficitur nibh vel
        tincidunt volutpat. Ut tortor arcu, luctus eget laoreet sed, eleifend ut tortor. Donec nec molestie urna. Cras
        lacinia tellus et mauris lobortis, sed consequat mauris pellentesque. Integer libero risus, faucibus et sapien
        tristique, venenatis pellentesque arcu. Ut tincidunt fringilla auctor. Ut fermentum egestas turpis eu
        ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Integer lobortis consequat est faucibus maximus. Mauris dui lacus, sodales rhoncus eros et, euismod feugiat leo.
        Ut semper diam ac elit convallis, eget fringilla lectus sollicitudin.
      </p>
    </div>
  );
};

export default About;
