import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GLOBAL_NAV from './globalNav';
import './NavBottom.scss';

const NavBottom = () => {
  const [currentId, setCurrentId] = useState();
  const navigate = useNavigate();

  const moveCategory = id => {
    navigate(`http://localhost:3000/dog?category=${id}`);
  }; //네비게이트 url 넘겨주는

  return (
    <div className="navBottom">
      <ul className="navContainer">
        {GLOBAL_NAV.map(({ id, name, list }) => {
          return (
            <li
              className="dropList"
              key={id}
              onMouseEnter={() => setCurrentId(id)} //내장함수
              onMouseLeave={() => setCurrentId()}
              onClick={id => moveCategory()}
            >
              <p className="dropP">{name}</p>

              {currentId === id && (
                <div className={`dropDownBoxContainer${id}`}>
                  {list.map(({ id, listname }) => {
                    return (
                      <div
                        className="dropDownBox"
                        key={id}
                        onClick={id => moveCategory()}
                      >
                        {listname}
                      </div>
                    );
                  })}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBottom;
