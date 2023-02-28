import { AppRouter } from "./router"
import { AuthProvider, ChatProvider } from "./context"


export const App = () => {
    return (
        <AuthProvider>
            <ChatProvider>
                <AppRouter />
            </ChatProvider>
        </AuthProvider>
    )
}
