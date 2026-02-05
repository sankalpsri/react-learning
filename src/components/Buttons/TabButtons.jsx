export default function TabButtons({ onClick, children, isActive }) {
    return (
        <li className='nav-item'>
            <button onClick={onClick} className={`nav-link text-secondary ${isActive ? 'active bg-dark bg-gradient text-white' : ''}`}>{children}</button>
        </li>
    );
}
