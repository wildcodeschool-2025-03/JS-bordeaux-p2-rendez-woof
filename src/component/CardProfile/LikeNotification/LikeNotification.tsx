import "./LikeNotification.css";

interface LikeNotificationProps {
	message: string;
}

function LikeNotification({ message }: LikeNotificationProps) {
	return <div className="like-notification">❤️ {message}</div>;
}

export default LikeNotification;
