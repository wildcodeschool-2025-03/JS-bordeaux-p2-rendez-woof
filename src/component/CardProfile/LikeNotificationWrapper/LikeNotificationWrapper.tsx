import { useContext } from 'react'
import { LikesContext, LikesContextType } from '../LikeContext/LikesContext';

import LikeNotification from '../LikeNotification/LikeNotification'

function LikeNotificationWrapper() {
    const context = useContext(LikesContext) as LikesContextType;

    if (!context) {
        return null;
    }


const { likeNotification } = context;

if (!likeNotification) {
    return null;
}

return <LikeNotification message={likeNotification} />;
}
export default LikeNotificationWrapper;