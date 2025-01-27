import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from '../redax/user/userSlice'
 import Loading from '../utils/loading/Loading'
function Service() {
    const dispatch = useDispatch()
    const {loading,users,error} = useSelector((state) => state.list)


    useEffect (()=> {
        dispatch(fetchUsers())
    },[dispatch])

    console.log(users);
    if(loading ) return <Loading/>
    if(error) return <p>Error: {error}</p>

    
  return (
    <div>
      Service
      {
        users.map((x) => (
          <div key={x.id}>
            <img src={x.image} alt="" />

          </div>
        ))
      }
      <div>
     
      </div>
    </div>
  )
}

export default Service
