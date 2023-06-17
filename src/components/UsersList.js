import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, selectUsers, selectIsLoading, selectError } from '../store/users/usersSlice'

const UsersList = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.login.uuid}>{user.name.first} {user.name.last}</li>
      ))}
    </ul>
  )
}

export default UsersList
