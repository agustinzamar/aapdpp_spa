import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getOne } from '../../store/slices/usersSlice'

export const useGetUser = id => {
    const dispatch = useDispatch()
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (id) {
            dispatch(getOne(id)).then(data => setUser(data))
        }
    }, [id]) //eslint-disable-line

    return user
}
