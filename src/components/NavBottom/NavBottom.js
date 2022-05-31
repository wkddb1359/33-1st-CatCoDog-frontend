import { useState } from 'react';
import GLOBAL_NAV from './globalNav';
import './NavBottom.scss';

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
                      <div className="dropDownBox" key={listname}>
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
