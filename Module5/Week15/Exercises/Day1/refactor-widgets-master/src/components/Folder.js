import { useState } from 'react';

const Headers = ({ titles, currentTab, selectTab }) => {
  const handleClick = (e) => {
    const idx = parseInt(e.target.id, 10);
    selectTab(idx);
  }

  const tabs = titles.map((title, idx) => {
    const headerClass = (idx === currentTab) ? 'active' : '';

    return (
      <li
        key={idx}
        id={idx}
        onClick={handleClick}
        className={headerClass}
      >
        {title}
      </li>
    );
  });

  return (
    <ul className='tab-header'>
      {tabs}
    </ul>
  );
}

//converting from a class component to a function component requires removing the 'class' variable and replacing it with function.
// state variables are declared using the 'useState' variable as seen 3 lines below on like 35.
//

function Folder({ folders }) {
  const [currentTab, setCurrentTab] = useState(0)

// changing the folder and titles variables was effected by removing the 'this.state' and 'this.props' arguments that are no longer necessary as the folders object is a destructured argument passed in the Folder function component.
  const folder = folders[currentTab];
  const titles = folders.map((folder) => folder.title);

    return (
      <section>
        <h1>Tabs</h1>
        <div className='tabs'>
          <Headers
            titles={titles}
            currentTab={currentTab}
            selectTab={setCurrentTab}
          />
          <div className='tab-content'>
            {folder.content}
          </div>
        </div>
      </section>
    );
  }


export default Folder;
