import { StateCreator } from "zustand"
import Notification from "../components/Notification "
import { FavoritesSliceType } from "./favoritesSlice"

type Notification = {
    text: string
    show: boolean
    error: boolean
}

export type NotificationSliceType = {
    notification:Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
    closeNotification: () => void
}

export const createNotificationSlice: 
    StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = (set, get) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                show: true,
                error: payload.error
            }
        })
        setTimeout(() => {
            get().closeNotification()
    }, 3000)
},
    closeNotification: () => {
        set({
                notification: {
                    text: '',
                    show: false,
                    error: false
                }
        })
    }
})