import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GLOBAL_NAV from './globalNav';
import './NavBottom.scss';

const NavBottom = () => {
  const [currentId, setCurrentId] = useState();
  const navigate = useNavigate();

  const moveCategory = (e, value) => {
    if (e.target.className !== 'dropP') return;
    navigate(`list?category=${value}`);
  };

  const moveSubCategory = id => {
    navigate(`list?category=${id}`);
  };
  // 이벤트 버블링, 이벤트 위임

  return (
    <div className="navBottom">
      <ul className="navContainer">
        {GLOBAL_NAV.map(({ id, name, list, value }) => {
          return (
            <li
              className="dropList"
              key={id}
              onMouseEnter={() => setCurrentId(id)}
              onMouseLeave={() => setCurrentId()}
              onClick={e => moveCategory(e, value)}
            >
              <p className="dropP">{name}</p>

              {currentId === id && (
                <div className={`dropDownBoxContainer${id}`}>
                  {list.map(lists => {
                    return (
                      <div
                        className="dropDownBox"
                        key={lists.id}
                        onClick={() => {
                          moveSubCategory(lists.value);
                        }}
                      >
                        {lists.listname}
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
