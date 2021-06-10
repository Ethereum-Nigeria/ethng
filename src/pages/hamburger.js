import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';




const Hamburger = ({toggleNav}) => {
  return (
    <div >
      <MenuOpenRoundedIcon className='toggle'  onClick={() => {
        console.log('Nav toggle')
        toggleNav()
      }}   />
    </div>
  )
}

export default Hamburger
