import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID="ad0e5ce1-467f-4197-9bc6-42d186475dc9";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
    );
};
export default App;