import "./Navigation.css";
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BsBookmarks } from 'react-icons/bs'
import { AiOutlineFileAdd } from 'react-icons/ai'

export default function Navigation() {
  return (
    <ul className="nav">
      <AiOutlineHome style={{color: 'white', fontSize: '30px'}}/>
      <CgProfile style={{color: 'white', fontSize: '30px'}}/>
      <BsBookmarks style={{color: 'white', fontSize: '30px'}}/>
      <AiOutlineFileAdd style={{color: 'white', fontSize: '30px'}}/>
    </ul>
  );
}
