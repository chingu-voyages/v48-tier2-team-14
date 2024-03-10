import { useContext } from 'react'
import { AppContext } from '../context/Context'

function Search() {

  const { data } = useContext(AppContext);

	console.log(data);

  return (
    <div>Search Bar</div>
  )
}
export default Search