import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import EventsApi from '../../api/eventsApi'

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        loading: false,
        data: []
    },
    reducers: {
        setLoadingAction: (state, action) => {
            state.loading = action.payload
        },
        getAllAction: (state, action) => {
            state.data = action.payload
        },
        getOneAction: (state, action) => {
            const { payload } = action
            if (!state.data.findIndex(x => x.id === payload.id)) {
                state.data.push(action.payload)
            }
        },
        deleteAction: (state, action) => {
            const index = state.data.findIndex(
                x => Number(x.id) === Number(action.payload)
            )
            state.data.splice(index, 1)
        },
        createAction: (state, action) => {
            state.data.push(action.payload)
        },
        editAction: (state, action) => {
            const index = state.data.findIndex(
                x => Number(x.id) === Number(action.payload.id)
            )
            state.data.splice(index, action.payload.data)
        }
    }
})
export default eventsSlice.reducer

const {
    getAllAction,
    getOneAction,
    setLoadingAction,
    deleteAction,
    createAction,
    editAction
} = eventsSlice.actions
export const getAll = () => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await EventsApi.getAll()
        if (response.status === 200) {
            dispatch(getAllAction(response.data))
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const getOne = id => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await EventsApi.getOne(id)
        if (response.status !== 200) {
            return Promise.reject(
                `Response status was: ${response.status} - ${response.statusText}`
            )
        }
        dispatch(getOneAction(response.data))
        return Promise.resolve(response.data)
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const remove = id => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await EventsApi.delete(id)
        if (response.status === 204) {
            dispatch(deleteAction(id))
            toast.success('Evento eliminado')
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const create = data => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await EventsApi.create(data)
        if (response.status === 201) {
            dispatch(createAction(response.data))
            toast.success('Evento agregado')
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}

export const edit = data => async dispatch => {
    try {
        dispatch(setLoadingAction(true))
        const response = await EventsApi.edit(data)
        if (response.status === 200) {
            dispatch(editAction(response.data))
            toast.success('Evento actualizado')
            return
        }
    } catch (err) {
        return Promise.reject(err.message)
    } finally {
        dispatch(setLoadingAction(false))
    }
}
