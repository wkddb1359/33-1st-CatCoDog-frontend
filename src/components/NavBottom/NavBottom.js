import { useState } from 'react';
import './NavBottom.scss';
import GLOBAL_NAV from './globalNav';

const NavBottom = () => {
  const [currentId, setCurrentId] = useState();

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
            >
              <p className="dropP">{name}</p>

              {currentId === id && (
                <div className={`dropDownBoxContainer${id}`}>
                  {list.map(({ id, listname }) => {
                    return (
                      <div className="dropDownBox" key={id}>
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
