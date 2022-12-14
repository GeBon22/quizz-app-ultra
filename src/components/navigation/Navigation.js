import "./Navigation.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BsBookmarks } from 'react-icons/bs'
import { AiOutlineFileAdd } from 'react-icons/ai'

export default function Navigation() {
  return (
    <ul className="nav">
      <Link to="/"><AiOutlineHome style={{color: 'white', fontSize: '30px'}}/></Link>
      <Link to="Profile"><CgProfile style={{color: 'white', fontSize: '30px'}}/></Link>
      <Link to="Bookmarks"><BsBookmarks style={{color: 'white', fontSize: '30px'}}/></Link>
      <Link to="Form"><AiOutlineFileAdd style={{color: 'white', fontSize: '30px'}}/></Link>
    </ul>
  );
}
