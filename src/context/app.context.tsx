import { createContext, useContext, useState } from "react";

interface AppContextType {
    theme: string;
    setTheme: (v: string) => void;
    appState: ILogin | null;
    setAppState: (v: any) => void;
    cart: ICart | Record<string, never>;
    setCart: (v: any) => void;
    restaurant: IRestaurant | null;
    setRestaurant: (v: any) => void
}

interface IProps {
    children: React.ReactNode
}

const AppContext = createContext<AppContextType | null>(null)

const AppProvider = (props: IProps) => {

    const [theme, setTheme] = useState<string>('')
    const [appState, setAppState] = useState<ILogin | null>(null)
    const [cart, setCart] = useState<ICart | Record<string, never>>({})
    const [restaurant, setRestaurant] = useState<IRestaurant | null>(null)

    return (
        <AppContext.Provider
            value={{
                theme, setTheme,
                appState, setAppState,
                cart, setCart,
                restaurant,
                setRestaurant
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export const useCurrentApp = () => {
    const currentApp = useContext(AppContext)
    if (!currentApp) {
        throw new Error()
    }

    return currentApp
}

export default AppProvider