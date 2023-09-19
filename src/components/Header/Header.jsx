import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='container mx-auto flex justify-between mt-12 pb-6 border-b-2 items-center'>
            <h1 className='text-4xl font-bold text-[#111]'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;