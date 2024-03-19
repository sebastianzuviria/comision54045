import { useContext } from "react"
import { NotificationContext } from "../NotificationsService"

export const useNotification = () => {
    return useContext(NotificationContext)
}