import { PrettyChatWindow } from "react-chat-engine-pretty";

interface ChatsPageProps {
  user: any;
}

export function ChatsPage(props:any) {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
}