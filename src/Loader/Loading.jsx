import spinner from '../Loader/Spinner.gif'

function Loader() {
  return (
    <div className='text-center'>
        <img src={`${spinner}`} alt="" />
    </div>
  )
}

export default Loader