import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="ad0e5ce1-467f-4197-9bc6-42d186475dc9"
            userName="Nikita"
            userSecret="baby"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
    );
};
export default App;