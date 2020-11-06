import React from 'react'

type ChartStoreContextValue = {
    height: number
    width: number
    dimensions: {
        top: number
        bottom: number
        left: number
        right: number
        innerHeight: number
        innerWidth: number
    }
}

export const ChartStoreContext = React.createContext<ChartStoreContextValue | null>(null)

export const useChartStore = () => {
    const store = React.useContext(ChartStoreContext)

    if (!store) {
        throw new Error('useChartStore must be used within a ChartStoreProvider')
    }

    return store
}
