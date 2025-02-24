import AniVault2 from '../../../images/AniVault2.png';

const NavBar: React.FC = () => {
    return (
        <>
            <div className="navbar bg-base-300 center-container mt-4 py-2 my-2 rounded-[15px] shadow-xl">
                <div className="navbar-start">
                    <button className="btn btn-ghost btn-circle text-2xl">
                        ⛩️ 
                    </button>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-3xl font-bold">
                        <img src={AniVault2} width="200" height="100" alt="AniVault logo"/>
                    </a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg version="1.1" height="25px" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path className="sharpcorners_een" fill="#ffffff" d="M29.387,12.723l-1.109,1.664L16,6.202L3.723,14.387l-1.109-1.664L6,10.465V5h4v2.798l6-4 L29.387,12.723z M6,14.07V29h7v-8h6v8h7V14.07L16,7.404L6,14.07z"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default NavBar;